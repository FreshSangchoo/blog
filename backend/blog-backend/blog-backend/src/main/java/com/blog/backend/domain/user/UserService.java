package com.blog.backend.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    // 회원가입
    public User register(User user) {
        Optional<User> isExist = userRepository.findByEmail(user.getEmail());

        // 존재하는 이메일인지 확인
        if (isExist.isPresent()) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        return userRepository.save(user);
    }
}
