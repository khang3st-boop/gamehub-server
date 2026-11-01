package com.gamehub.server.friends;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Quan hệ bạn bè giữa hai người, một hàng cho mỗi cặp (low &lt; high theo chuỗi UUID). */
@Entity
@Table(name = "friendships")
public class Friendship {

    public static final String PENDING = "PENDING";
    public static final String ACCEPTED = "ACCEPTED";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_low", nullable = false)
    private UUID userLow;

    @Column(name = "user_high", nullable = false)
    private UUID userHigh;

    @Column(name = "requester_id", nullable = false)
    private UUID requesterId;

    @Column(nullable = false, length = 10)
    private String status;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "responded_at")
    private Instant respondedAt;

    protected Friendship() {
    }

    public Friendship(UUID requester, UUID target, Instant now) {
        UUID[] pair = pair(requester, target);
        this.userLow = pair[0];
        this.userHigh = pair[1];
        this.requesterId = requester;
        this.status = PENDING;
        this.createdAt = now;
    }

    /** Thứ tự chuẩn của một cặp. */
    public static UUID[] pair(UUID a, UUID b) {
        return a.toString().compareTo(b.toString()) < 0 ? new UUID[] {a, b} : new UUID[] {b, a};
    }

    public void accept(Instant now) {
        this.status = ACCEPTED;
        this.respondedAt = now;
    }

    public UUID other(UUID me) {
        return userLow.equals(me) ? userHigh : userLow;
    }

    public boolean isAccepted() {
        return ACCEPTED.equals(status);
    }

    public Long getId() {
        return id;
    }

    public UUID getRequesterId() {
        return requesterId;
    }

    public String getStatus() {
        return status;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getRespondedAt() {
        return respondedAt;
    }
}
