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
                핵심 내용 요약: %s
                
                작성 기준 날짜: %s
                
                아래 조건을 만족하는 기술 블로그 글을 Markdown 형식으로 작성해 주세요.
                
                ## 버전 및 최신성 기준
                - 글의 모든 내용은 **%s 기준 최신 버전**을 참고하여 작성해주세요.
                - React, Spring, Node 등 사용된 기술 스택은 최신 버전의 방식으로 설명해주세요.
                - 과거 버전(예: React 17/18, Node 14 등)의 문법이나 설정 방식은 사용하지 마세요.
                - 혹시 구버전과 차이가 있다면, 해당 차이점과 대안을 간단히 함께 설명해주세요.
                
                ## 구성 요구
                다음의 구조를 따라주세요. 각 섹션은 충분히 여백을 두고, 읽기 쉽게 작성해주세요.
                
                ### 소개
                - 글의 시작 부분에는 자연스러운 도입부를 작성해주세요.
                - 이 도입부는 글의 주제, 필요성, 배경 등을 이야기하듯 설명하는 문단입니다.
                - 필요하다면 `### 소개` 제목이나 다른 제목을 붙여도 괜찮습니다. (단, 사용자가 제거할 수 있으니 자연스럽게 써 주세요.)
                
                ### 사전 지식
                - 필요한 개발 환경, 설치 도구, 사전 개념 등을 간단한 리스트로 정리해주세요.
                - 문장이 아닌 단어나 문구 위주로 작성해주세요.
                - 없으면 생략해도 됩니다.
                
                ### 본론
                - 튜토리얼 형식으로 각 단계를 순서대로 제시해주세요.
                - 각 단계마다 코드 예제나 명령어 등을 함께 보여주세요.
                - 중요한 개념은 중간중간 설명하거나 주의점 등을 콤팩트하게 전달해주세요.
                - 필요한 개념이 있다면 자세한 설명을 같이 해주세요.
                
                ### 출력 확인
                - 작업이 정상적으로 되었는지 확인하는 방법을 안내해주세요.
                - 예시 결과나 화면을 보여줄 수 있다면 함께 포함해주세요.
                - 에러가 날 수 있는 주의점들을 말해주고, 간단한 해결 방법도 함께 제시해주세요.
                
                ### 요약
                - 배운 내용을 다시 정리해 주세요.
                
                ## 스타일 가이드 (이 항목은 작성 참고용이며 결과물에 포함하지 마세요)
                - 너무 딱딱하지 않게, 개발자끼리 말하듯 자연스러운 어투로 작성해주세요.  
                  (예: "~해주면 됩니다", "~할 수 있어요")
                - 느낌표, 물음표 등을 사용해도 됩니다.
                - 마크다운 문법을 사용해 주세요. (제목, 리스트, 코드블록 등 적극 활용)
                - 문단 사이에 줄바꿈을 적절히 넣어 가독성을 높여주세요.
                - 복잡한 개념은 간단한 예시나 비유를 사용해 설명해주세요.
                - 이모지(예: ✅, ⚠️, 💡, 👉)는 적절히 사용해도 좋습니다.  
                  단, 과도하게 남발하지 말고, 강조나 안내 목적에 한해 사용해 주세요.
                - 최상단 제목은 생략해 주세요.
                - 문단 제목에 밑줄을 그지 말아 주세요.
                """, dto.getTitle(), dto.getContent(), LocalDate.now(), LocalDate.now());


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
