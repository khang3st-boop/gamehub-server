package com.gamehub.server.realtime;

import java.security.Principal;
import java.util.UUID;

/** Danh tính của một kết nối WebSocket: tên = UUID người dùng (lấy từ access token khi CONNECT). */
public record UserPrincipal(UUID userId) implements Principal {

    @Override
    public String getName() {
        return userId.toString();
    }

    public static UUID id(Principal p) {
        if (p instanceof UserPrincipal up) {
            return up.userId();
        }
        if (p == null) {
            throw new IllegalStateException("Kết nối chưa xác thực");
        }
        return UUID.fromString(p.getName());
    }
}
