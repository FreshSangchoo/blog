package com.blog.backend.controller;

import com.blog.backend.dto.AIPostRequestDto;
import com.blog.backend.dto.AIPostResponseDto;
import com.blog.backend.dto.PostRequestDto;
import com.blog.backend.dto.PostResponseDto;
import com.blog.backend.entity.Post;
import com.blog.backend.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/post")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // 전체 게시글 조회
    @GetMapping
    public ResponseEntity<List<PostResponseDto>> getAllPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    // 게시글 상세 조회
    @GetMapping("/{id}")
    public ResponseEntity<PostResponseDto> getPost(@PathVariable Long id) {
        return ResponseEntity.ok(postService.getPostById(id));
    }

    // 게시글 작성
    @PostMapping
    public ResponseEntity<PostResponseDto> createPost(@RequestBody PostRequestDto requestDto) {
        return ResponseEntity.ok(postService.createPost(requestDto));
    }

    // 게시글 수정
    @PutMapping("/{id}")
    public ResponseEntity<PostResponseDto> updatePost(@PathVariable Long id,
                                                      @RequestBody PostRequestDto requestDto) {
        return ResponseEntity.ok(postService.updatePost(id, requestDto));
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }

    // AI 게시글 생성
    @PostMapping("/generate-post")
    public ResponseEntity<AIPostResponseDto> generatePost(@RequestBody AIPostRequestDto dto) {
        return ResponseEntity.ok(postService.generateTechPost(dto));
    }

}
