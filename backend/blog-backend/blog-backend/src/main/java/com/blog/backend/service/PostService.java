package com.blog.backend.service;

import com.blog.backend.dto.AIPostRequestDto;
import com.blog.backend.dto.AIPostResponseDto;
import com.blog.backend.dto.PostRequestDto;
import com.blog.backend.dto.PostResponseDto;
import com.blog.backend.entity.Hashtag;
import com.blog.backend.entity.Post;
import com.blog.backend.repository.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
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

    // 전체 게시글 조회
    public List<PostResponseDto> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        List<PostResponseDto> result = new ArrayList<>();
        for (Post post : posts) {
            result.add(convertToDto(post));
        }
        return result;
    }

    // 특정 게시글 조회
    public PostResponseDto getPostById(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다: " + id));
        return convertToDto(post);
    }

    // 게시글 저장(생성)
    @Transactional
    public PostResponseDto createPost(PostRequestDto requestDto) {
        Post post = new Post();
        post.setTitle(requestDto.getTitle());
        post.setContent(requestDto.getContent());
        post.setHashtags(convertHashtags(requestDto.getHashtags(), post));

        Post saved = postRepository.save(post);
        return convertToDto(saved);
    }

    // 게시글 수정
    @Transactional
    public PostResponseDto updatePost(Long id, PostRequestDto requestDto) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다: " + id));

        post.setTitle(requestDto.getTitle());
        post.setContent(requestDto.getContent());
        post.setHashtags(convertHashtags(requestDto.getHashtags(), post));

        return convertToDto(postRepository.save(post));
    }

    // 게시글 삭제
    @Transactional
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    // AI 게시글 생성
    @Value("${openai.api.key}")
    private String openAIAPIKey;

    public AIPostResponseDto generateTechPost(AIPostRequestDto dto) {
        String prompt = String.format("""
        제목: %s
        내용: %s

        위 정보를 바탕으로 기술 블로그 글을 markdown 형식으로 작성해 주세요.
        - 개발자가 이해하기 쉬운 스타일
        - 코드 예제, 절차 포함
        - 기술 블로그 형식으로 작성
        """, dto.getTitle(), dto.getContent());

        // 여기는 실제 OpenAI 연동 전까지는 임시 반환
        String generatedMarkdown = "AI 마크다운 생성 예시입니다.";

        return new AIPostResponseDto(generatedMarkdown);
    }
}
