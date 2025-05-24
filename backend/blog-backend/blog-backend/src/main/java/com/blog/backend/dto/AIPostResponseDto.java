package com.blog.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AIPostResponseDto {
    private String markdown;

    public AIPostResponseDto(String markdown) {
        this.markdown = markdown;
    }
}
