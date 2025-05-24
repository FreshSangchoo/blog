package com.blog.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class PostResponseDto {
    private Long id;
    private String title;
    private String content;
    private List<String> hashtags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public PostResponseDto() {}

    public PostResponseDto(Long id, String title, String content, List<String> hashtags,
                           LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.hashtags = hashtags;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
