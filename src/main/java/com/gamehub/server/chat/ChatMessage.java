package com.gamehub.server.chat;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Tin nhắn 1–1. {@code (senderId, clientId)} là khoá idempotent khi client gửi lại. */
@Entity
@Table(name = "chat_messages")
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sender_id", nullable = false)
    private UUID senderId;

    @Column(name = "recipient_id", nullable = false)
    private UUID recipientId;

    @Column(nullable = false, length = 500)
    private String text;

    @Column(name = "client_id", nullable = false, length = 64)
    private String clientId;

    @Column(name = "sent_at", nullable = false)
    private Instant sentAt;

    @Column(name = "read_at")
    private Instant readAt;

    protected ChatMessage() {
    }

    public ChatMessage(UUID senderId, UUID recipientId, String text, String clientId, Instant sentAt) {
        this.senderId = senderId;
        this.recipientId = recipientId;
        this.text = text;
        this.clientId = clientId;
        this.sentAt = sentAt;
    }

    public Long getId() {
        return id;
    }

    public UUID getSenderId() {
        return senderId;
    }

    public UUID getRecipientId() {
        return recipientId;
    }

    public String getText() {
        return text;
    }

    public Instant getSentAt() {
        return sentAt;
    }

    public Instant getReadAt() {
        return readAt;
    }
}
