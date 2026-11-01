package com.gamehub.server.common;

import java.util.UUID;

import org.springframework.security.oauth2.jwt.Jwt;

/** Lấy id người dùng từ access token đã được Spring Security xác thực. */
public final class CurrentUser {

    private CurrentUser() {
    }

    public static UUID id(Jwt jwt) {
        if (jwt == null) {
            throw ApiException.unauthorized("UNAUTHORIZED", "Bạn cần đăng nhập");
        }
        try {
            return UUID.fromString(jwt.getSubject());
        } catch (IllegalArgumentException e) {
            throw ApiException.unauthorized("INVALID_TOKEN", "Token không hợp lệ");
        }
    }
}
