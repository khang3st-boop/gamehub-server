package com.gamehub.server.result;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Một ván đã được server kiểm tra. {@code score} là điểm do server tính. */
@Entity
@Table(name = "game_results")
public class GameResultEntity {

    @Id
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Column(name = "client_id", nullable = false, length = 64)
    private String clientId;

    @Column(nullable = false, length = 16)
    private String game;

    @Column(nullable = false, length = 32)
    private String mode;

    @Column(nullable = false, length = 8)
    private String outcome;

    @Column(nullable = false)
    private int score;

    @Column(name = "duration_ms", nullable = false)
    private long durationMs;

    @Column(nullable = false)
    private int moves;

    @Column(nullable = false)
    private int errors;

    @Column(nullable = false)
    private int hints;

    @Column(nullable = false)
    private boolean assisted;

    @Column(nullable = false)
    private boolean rankable;

    @Column(name = "played_at", nullable = false)
    private Instant playedAt;

    @Column(name = "received_at", nullable = false)
    private Instant receivedAt;

    @Column(nullable = false, length = 16000)
    private String details;

    /** Ngày thử thách hằng ngày (yyyy-MM-dd, UTC+7) nếu kết quả được xếp hạng ngày; null nếu không. */
    @Column(name = "daily_date", length = 10)
    private String dailyDate;

    protected GameResultEntity() {
    }

    @SuppressWarnings("java:S107")
    public GameResultEntity(UUID userId, String clientId, String game, String mode, String outcome, int score,
            long durationMs, int moves, int errors, int hints, boolean assisted, boolean rankable, Instant playedAt,
            Instant receivedAt, String details) {
        this.id = UUID.randomUUID();
        this.userId = userId;
        this.clientId = clientId;
        this.game = game;
        this.mode = mode;
        this.outcome = outcome;
        this.score = score;
        this.durationMs = durationMs;
        this.moves = moves;
        this.errors = errors;
        this.hints = hints;
        this.assisted = assisted;
        this.rankable = rankable;
        this.playedAt = playedAt;
        this.receivedAt = receivedAt;
        this.details = details;
    }

    public UUID getId() {
        return id;
    }

    public UUID getUserId() {
        return userId;
    }

    public String getClientId() {
        return clientId;
    }

    public String getGame() {
        return game;
    }

    public String getMode() {
        return mode;
    }

    public String getOutcome() {
        return outcome;
    }

    public int getScore() {
        return score;
    }

    public long getDurationMs() {
        return durationMs;
    }

    public int getMoves() {
        return moves;
    }

    public int getErrors() {
        return errors;
    }

    public int getHints() {
        return hints;
    }

    public boolean isAssisted() {
        return assisted;
    }

    public boolean isRankable() {
        return rankable;
    }

    public Instant getPlayedAt() {
        return playedAt;
    }

    public Instant getReceivedAt() {
        return receivedAt;
    }

    public String getDetails() {
        return details;
    }

    public String getDailyDate() {
        return dailyDate;
    }

    public void setDailyDate(String dailyDate) {
        this.dailyDate = dailyDate;
    }
}
