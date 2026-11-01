package com.gamehub.server.user;

import java.time.Instant;
import java.util.Locale;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Tài khoản người chơi. Mật khẩu chỉ lưu dạng băm BCrypt. */
@Entity
@Table(name = "users")
public class User {

    @Id
    private UUID id;

    @Column(nullable = false, length = 20)
    private String username;

    /** Tên đăng nhập viết thường — dùng cho ràng buộc duy nhất không phân biệt hoa/thường. */
    @Column(name = "username_key", nullable = false, length = 20)
    private String usernameKey;

    @Column(name = "display_name", nullable = false, length = 30)
    private String displayName;

    @Column(name = "password_hash", nullable = false, length = 100)
    private String passwordHash;

    @Column(name = "avatar_color", nullable = false)
    private int avatarColor;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    protected User() {
    }

    public User(String username, String displayName, String passwordHash, int avatarColor, Instant createdAt) {
        this.id = UUID.randomUUID();
        this.username = username;
        this.usernameKey = key(username);
        this.displayName = displayName;
        this.passwordHash = passwordHash;
        this.avatarColor = avatarColor;
        this.createdAt = createdAt;
    }

    public static String key(String username) {
        return username.trim().toLowerCase(Locale.ROOT);
    }

    public UUID getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public int getAvatarColor() {
        return avatarColor;
    }

    public void setAvatarColor(int avatarColor) {
        this.avatarColor = avatarColor;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
}
