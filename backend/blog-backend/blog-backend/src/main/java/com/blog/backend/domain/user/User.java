package com.blog.backend.domain.user;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    // 기본 키값
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 가임 id = email
    @Column(nullable = false, unique = true)
    private String email;

    // 비밀번호
    @Column(nullable = false)
    private String password;

    // 닉네임
    private String nickname;

    // 가입 시간
    private LocalDateTime createdAt;

    // 가입 시간을 자동으로 현재 시각으로 채우기
    @PrePersist
    public void setCreatedAt() {
        this.createdAt = LocalDateTime.now();
    }
}
