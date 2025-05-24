// GlobalExceptionHandler.java
package com.blog.backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AILimitExceededException.class)
    public ResponseEntity<String> handleLimitExceeded(AILimitExceededException e) {
        return ResponseEntity.status(429).body(e.getMessage()); // 429: Too Many Requests
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericError(Exception e) {
        return ResponseEntity.status(500).body("서버 오류가 발생했습니다.");
    }
}
