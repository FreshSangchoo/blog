package com.blog.backend.service;

import com.blog.backend.dto.AIPostRequestDto;
import com.blog.backend.dto.AIPostResponseDto;
import com.blog.backend.dto.PostRequestDto;
import com.blog.backend.dto.PostResponseDto;
import com.blog.backend.entity.Hashtag;
import com.blog.backend.entity.Post;
import com.blog.backend.exception.AILimitExceededException;
import com.blog.backend.repository.PostRepository;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatCompletionResult;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.service.OpenAiService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final OpenAiService openAiService;

    public PostService(PostRepository postRepository, @Value("${openai.api.key}") String openAIAPIKey) {
        this.postRepository = postRepository;
        this.openAiService = new OpenAiService(openAIAPIKey, Duration.ofSeconds(60));
    }

    private PostResponseDto convertToDto(Post post) {
        List<String> hashtagNames = new ArrayList<>();
        if (post.getHashtags() != null) {
            for (Hashtag hashtag : post.getHashtags()) {
                hashtagNames.add(hashtag.getName());
            }
        }

        return new PostResponseDto(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                hashtagNames,
                post.getCreatedAt(),
                post.getUpdatedAt()
        );
    }

    private List<Hashtag> convertHashtags(List<String> names, Post post) {
        List<Hashtag> hashtags = new ArrayList<>();
        if (names != null) {
            for (String name : names) {
                Hashtag h = new Hashtag(name);
                h.setPost(post);
                hashtags.add(h);
            }
        }
        return hashtags;
    }

    public List<PostResponseDto> getAllPosts() {
        List<Post> posts = postRepository.findAllByOrderByCreatedAtDesc();
        List<PostResponseDto> result = new ArrayList<>();
        for (Post post : posts) {
            result.add(convertToDto(post));
        }
        return result;
    }

    public PostResponseDto getPostById(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다: " + id));
        return convertToDto(post);
    }

    @Transactional
    public PostResponseDto createPost(PostRequestDto requestDto) {
        Post post = new Post();
        post.setTitle(requestDto.getTitle());
        post.setContent(requestDto.getContent());
        post.setHashtags(convertHashtags(requestDto.getHashtags(), post));

        Post saved = postRepository.save(post);
        return convertToDto(saved);
    }

    @Transactional
    public PostResponseDto updatePost(Long id, PostRequestDto requestDto) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다: " + id));

        post.setTitle(requestDto.getTitle());
        post.setContent(requestDto.getContent());
        post.setHashtags(convertHashtags(requestDto.getHashtags(), post));

        return convertToDto(postRepository.save(post));
    }

    @Transactional
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    // AI 호출 제한을 위한 전역 카운터 및 날짜
    private LocalDate lastCallDate = LocalDate.now();
    private final AtomicInteger callCount = new AtomicInteger(0);

    public AIPostResponseDto generateTechPost(AIPostRequestDto dto) {
        LocalDate today = LocalDate.now();

        // 날짜가 바뀌면 카운터 초기화
        if (!today.equals(lastCallDate)) {
            lastCallDate = today;
            callCount.set(0);
        }

        // 호출 횟수 제한 확인
        if (callCount.get() >= 5) {
            throw new AILimitExceededException("오늘은 AI 글 생성 횟수(5회)를 모두 사용했습니다.");
        }


        callCount.incrementAndGet();

        String prompt = String.format("""
        제목: %s
        내용: %s

        위 정보를 바탕으로 기술 블로그 글을 markdown 형식으로 작성해 주세요.
        - 개발자가 이해하기 쉬운 스타일
        - 코드 예제, 절차 포함
        - 기술 블로그 형식으로 작성
        """, dto.getTitle(), dto.getContent());

        ChatMessage systemMessage = new ChatMessage("system", "당신은 뛰어난 기술 블로그 작가입니다.");
        ChatMessage userMessage = new ChatMessage("user", prompt);

        ChatCompletionRequest chatRequest = ChatCompletionRequest.builder()
                .model("gpt-3.5-turbo")
                .messages(List.of(systemMessage, userMessage))
                .maxTokens(1000)
                .temperature(0.7) // 창의성 조절 (0.0~1.0)
                .build();

        ChatCompletionResult result = openAiService.createChatCompletion(chatRequest);
        String markdown = result.getChoices().get(0).getMessage().getContent();

        return new AIPostResponseDto(markdown);
    }
}
