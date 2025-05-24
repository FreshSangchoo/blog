// AILimitExceededException.java
package com.blog.backend.exception;

public class AILimitExceededException extends RuntimeException {
    public AILimitExceededException(String message) {
        super(message);
    }
}
