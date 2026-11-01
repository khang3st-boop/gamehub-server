package com.gamehub.server.match;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Tin nhắn trong phòng đấu (chỉ hai người chơi đọc/gửi). */
@Entity
@Table(name = "match_messages")
public class MatchMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "match_id", nullable = false)
    private UUID matchId;

    @Column(name = "sender_id", nullable = false)
    private UUID senderId;

    @Column(nullable = false, length = 300)
    private String text;

    @Column(name = "client_id", nullable = false, length = 64)
    private String clientId;

    @Column(name = "sent_at", nullable = false)
    private Instant sentAt;

    protected MatchMessage() {
    }

    public MatchMessage(UUID matchId, UUID senderId, String text, String clientId, Instant sentAt) {
        this.matchId = matchId;
        this.senderId = senderId;
        this.text = text;
        this.clientId = clientId;
        this.sentAt = sentAt;
    }

    public Long getId() {
        return id;
    }

    public UUID getMatchId() {
        return matchId;
    }

    public UUID getSenderId() {
        return senderId;
    }

    public String getText() {
        return text;
    }

    public String getClientId() {
        return clientId;
    }

    public Instant getSentAt() {
        return sentAt;
    }
}
