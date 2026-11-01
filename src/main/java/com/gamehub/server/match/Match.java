package com.gamehub.server.match;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

/**
 * Phòng đấu realtime giữa hai người chơi A và B. Đề (config), thời điểm bắt đầu và kết quả đều
 * do server quyết định; client chỉ gửi thao tác.
 */
@Entity
@Table(name = "matches")
public class Match {

    public enum Status {
        WAITING_READY, COUNTDOWN, PLAYING, FINISHED, CANCELLED, ABANDONED;

        public boolean active() {
            return this == WAITING_READY || this == COUNTDOWN || this == PLAYING;
        }
    }

    public enum EndReason {
        SOLVED, CARO_WIN, DRAW, FORFEIT, TIMEOUT, DISCONNECT, READY_TIMEOUT, CANCELLED
    }

    public static final List<Status> ACTIVE = List.of(Status.WAITING_READY, Status.COUNTDOWN, Status.PLAYING);

    @Id
    private UUID id;

    @Column(nullable = false, length = 16)
    private String game;

    @Column(nullable = false, length = 32)
    private String mode;

    @Column(nullable = false, length = 12)
    private String source;

    @Column(nullable = false, length = 16)
    @jakarta.persistence.Enumerated(jakarta.persistence.EnumType.STRING)
    private Status status;

    @Column(name = "player_a", nullable = false)
    private UUID playerA;

    @Column(name = "player_b", nullable = false)
    private UUID playerB;

    @Column(nullable = false, length = 4000)
    private String config;

    @Column(name = "a_ready", nullable = false)
    private boolean aReady;

    @Column(name = "b_ready", nullable = false)
    private boolean bReady;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "ready_deadline", nullable = false)
    private Instant readyDeadline;

    @Column(name = "start_at")
    private Instant startAt;

    @Column(name = "finished_at")
    private Instant finishedAt;

    @Column(name = "winner_id")
    private UUID winnerId;

    @Column(name = "end_reason", length = 16)
    @jakarta.persistence.Enumerated(jakarta.persistence.EnumType.STRING)
    private EndReason endReason;

    @Column(name = "a_time_ms")
    private Long aTimeMs;

    @Column(name = "b_time_ms")
    private Long bTimeMs;

    @Column(name = "a_assisted", nullable = false)
    private boolean aAssisted;

    @Column(name = "b_assisted", nullable = false)
    private boolean bAssisted;

    @Column(name = "a_progress", nullable = false)
    private int aProgress;

    @Column(name = "b_progress", nullable = false)
    private int bProgress;

    /** Nước Caro dạng "112,113,98"; X luôn đi nước đầu. */
    @Column(name = "caro_moves", nullable = false, length = 2000)
    private String caroMoves = "";

    @Column(name = "turn_deadline")
    private Instant turnDeadline;

    @Column(nullable = false)
    private boolean rated;

    @Version
    private long version;

    protected Match() {
    }

    public Match(String game, String mode, String source, UUID a, UUID b, String config, Instant now,
            Instant readyDeadline) {
        this.id = UUID.randomUUID();
        this.game = game;
        this.mode = mode;
        this.source = source;
        this.status = Status.WAITING_READY;
        this.playerA = a;
        this.playerB = b;
        this.config = config;
        this.createdAt = now;
        this.readyDeadline = readyDeadline;
    }

    public boolean isPlayer(UUID user) {
        return playerA.equals(user) || playerB.equals(user);
    }

    public boolean isA(UUID user) {
        return playerA.equals(user);
    }

    public UUID opponentOf(UUID user) {
        return playerA.equals(user) ? playerB : playerA;
    }

    public void setReady(UUID user, boolean ready) {
        if (isA(user)) {
            aReady = ready;
        } else {
            bReady = ready;
        }
    }

    public boolean bothReady() {
        return aReady && bReady;
    }

    public boolean readyOf(UUID user) {
        return isA(user) ? aReady : bReady;
    }

    public void startCountdown(Instant startAt) {
        this.status = Status.COUNTDOWN;
        this.startAt = startAt;
    }

    public void play() {
        this.status = Status.PLAYING;
    }

    public void end(Status status, EndReason reason, UUID winner, Instant at) {
        this.status = status;
        this.endReason = reason;
        this.winnerId = winner;
        this.finishedAt = at;
        this.turnDeadline = null;
    }

    public void setProgress(UUID user, int p) {
        if (isA(user)) {
            aProgress = p;
        } else {
            bProgress = p;
        }
    }

    public int progressOf(UUID user) {
        return isA(user) ? aProgress : bProgress;
    }

    public void markAssisted(UUID user) {
        if (isA(user)) {
            aAssisted = true;
        } else {
            bAssisted = true;
        }
    }

    public boolean assistedOf(UUID user) {
        return isA(user) ? aAssisted : bAssisted;
    }

    public void setTime(UUID user, long ms) {
        if (isA(user)) {
            aTimeMs = ms;
        } else {
            bTimeMs = ms;
        }
    }

    public Long timeOf(UUID user) {
        return isA(user) ? aTimeMs : bTimeMs;
    }

    public List<Integer> caroMoveList() {
        List<Integer> out = new ArrayList<>();
        if (!caroMoves.isEmpty()) {
            for (String s : caroMoves.split(",")) {
                out.add(Integer.parseInt(s));
            }
        }
        return out;
    }

    public void addCaroMove(int cell, Instant nextDeadline) {
        caroMoves = caroMoves.isEmpty() ? Integer.toString(cell) : caroMoves + "," + cell;
        turnDeadline = nextDeadline;
    }

    public UUID getId() {
        return id;
    }

    public String getGame() {
        return game;
    }

    public String getMode() {
        return mode;
    }

    public String getSource() {
        return source;
    }

    public Status getStatus() {
        return status;
    }

    public UUID getPlayerA() {
        return playerA;
    }

    public UUID getPlayerB() {
        return playerB;
    }

    public String getConfig() {
        return config;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getReadyDeadline() {
        return readyDeadline;
    }

    public Instant getStartAt() {
        return startAt;
    }

    public Instant getFinishedAt() {
        return finishedAt;
    }

    public UUID getWinnerId() {
        return winnerId;
    }

    public EndReason getEndReason() {
        return endReason;
    }

    public Instant getTurnDeadline() {
        return turnDeadline;
    }

    public void setTurnDeadline(Instant turnDeadline) {
        this.turnDeadline = turnDeadline;
    }

    public boolean isRated() {
        return rated;
    }

    public void setRated(boolean rated) {
        this.rated = rated;
    }

    public boolean anyAssisted() {
        return aAssisted || bAssisted;
    }
}
