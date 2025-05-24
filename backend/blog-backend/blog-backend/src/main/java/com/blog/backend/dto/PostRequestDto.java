package com.blog.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter@Setter
public class PostRequestDto {

    private String title;
    private String content;
    private List<String> hashtags;

    public PostRequestDto() {}

    public PostRequestDto(String title, String content, List<String> hashtags) {
        this.title = title;
        this.content = content;
        this.hashtags = hashtags;
    }

}
