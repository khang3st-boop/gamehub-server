package com.gamehub.server.challenge;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

/**
 * Thử thách Rubik giữa hai người trên CÙNG một chuỗi xáo trộn do server sinh.
 * Kết quả của từng bên lưu dạng cột phẳng (creator_* / opponent_*); {@code @Version} chống ghi đè đồng thời.
 */
@Entity
@Table(name = "challenges")
public class Challenge {

    public enum Status { OPEN, ACCEPTED, COMPLETED, DECLINED, EXPIRED }

    /** Kết quả một bên; dùng khi so sánh để xác định người thắng. */
    public record Entry(long durationMs, int moves, boolean assisted) {
    }

    @Id
    private UUID id;

    @Column(name = "creator_id", nullable = false)
    private UUID creatorId;

    @Column(name = "opponent_id")
    private UUID opponentId;

    @Column(nullable = false, length = 200)
    private String scramble;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 12)
    private Status status;

    @Column(name = "allow_assist", nullable = false)
    private boolean allowAssist;

    @Column(length = 140)
    private String message;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    @Column(name = "accepted_at")
    private Instant acceptedAt;

    @Column(name = "completed_at")
    private Instant completedAt;

    @Column(name = "winner_id")
    private UUID winnerId;

    @Column(name = "creator_client_id", length = 64)
    private String creatorClientId;

    @Column(name = "creator_duration_ms")
    private Long creatorDurationMs;

    @Column(name = "creator_moves")
    private Integer creatorMoves;

    @Column(name = "creator_assisted")
    private Boolean creatorAssisted;

    @Column(name = "creator_solution", length = 8000)
    private String creatorSolution;

    @Column(name = "creator_submitted_at")
    private Instant creatorSubmittedAt;

    @Column(name = "opponent_client_id", length = 64)
    private String opponentClientId;

    @Column(name = "opponent_duration_ms")
    private Long opponentDurationMs;

    @Column(name = "opponent_moves")
    private Integer opponentMoves;

    @Column(name = "opponent_assisted")
    private Boolean opponentAssisted;

    @Column(name = "opponent_solution", length = 8000)
    private String opponentSolution;

    @Column(name = "opponent_submitted_at")
    private Instant opponentSubmittedAt;

    @Version
    private long version;

    protected Challenge() {
    }

    public Challenge(UUID creatorId, UUID opponentId, String scramble, boolean allowAssist, String message,
            Instant createdAt, Instant expiresAt) {
        this.id = UUID.randomUUID();
        this.creatorId = creatorId;
        this.opponentId = opponentId;
        this.scramble = scramble;
        this.allowAssist = allowAssist;
        this.message = message;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.status = Status.OPEN;
    }

    public boolean isParticipant(UUID user) {
        return user.equals(creatorId) || user.equals(opponentId);
    }

    public boolean hasSubmitted(UUID user) {
        if (user.equals(creatorId)) {
            return creatorSubmittedAt != null;
        }
        return user.equals(opponentId) && opponentSubmittedAt != null;
    }

    /** clientId bài đã nộp của {@code user} (để nộp lại cùng clientId được coi là trùng, không lỗi). */
    public String submittedClientId(UUID user) {
        return user.equals(creatorId) ? creatorClientId : opponentClientId;
    }

    public void accept(UUID user, Instant at) {
        this.opponentId = user;
        this.status = Status.ACCEPTED;
        this.acceptedAt = at;
    }

    public void decline(Instant at) {
        this.status = Status.DECLINED;
        this.completedAt = at;
    }

    public void submit(UUID user, String clientId, long durationMs, int moves, boolean assisted, String solution,
            Instant at) {
        if (user.equals(creatorId)) {
            creatorClientId = clientId;
            creatorDurationMs = durationMs;
            creatorMoves = moves;
            creatorAssisted = assisted;
            creatorSolution = solution;
            creatorSubmittedAt = at;
        } else {
            opponentClientId = clientId;
            opponentDurationMs = durationMs;
            opponentMoves = moves;
            opponentAssisted = assisted;
            opponentSolution = solution;
            opponentSubmittedAt = at;
        }
        if (creatorSubmittedAt != null && opponentSubmittedAt != null) {
            complete(at);
        }
    }

    /**
     * Hết hạn: chưa ai nhận hoặc chưa ai nộp → EXPIRED; mới một bên nộp → bên đó thắng (đối thủ bỏ cuộc).
     *
     * @return true nếu trạng thái thay đổi
     */
    public boolean expireIfDue(Instant now) {
        if (now.isBefore(expiresAt) || (status != Status.OPEN && status != Status.ACCEPTED)) {
            return false;
        }
        if (status == Status.ACCEPTED && (creatorSubmittedAt != null) != (opponentSubmittedAt != null)) {
            status = Status.COMPLETED;
            winnerId = creatorSubmittedAt != null ? creatorId : opponentId;
        } else {
            status = Status.EXPIRED;
        }
        completedAt = now;
        return true;
    }

    private void complete(Instant at) {
        status = Status.COMPLETED;
        completedAt = at;
        int cmp = compare(creatorEntry(), opponentEntry());
        winnerId = cmp < 0 ? creatorId : cmp > 0 ? opponentId : null;
    }

    /**
     * So sánh hai bài giải: tự giải (không trợ giúp) thắng bài có trợ giúp; sau đó thời gian ngắn hơn;
     * sau đó ít nước hơn. Trả về số âm nếu {@code a} tốt hơn, 0 nếu hoà.
     */
    public static int compare(Entry a, Entry b) {
        if (a.assisted() != b.assisted()) {
            return a.assisted() ? 1 : -1;
        }
        int byTime = Long.compare(a.durationMs(), b.durationMs());
        return byTime != 0 ? byTime : Integer.compare(a.moves(), b.moves());
    }

    public Entry creatorEntry() {
        return creatorSubmittedAt == null ? null
                : new Entry(creatorDurationMs, creatorMoves, Boolean.TRUE.equals(creatorAssisted));
    }

    public Entry opponentEntry() {
        return opponentSubmittedAt == null ? null
                : new Entry(opponentDurationMs, opponentMoves, Boolean.TRUE.equals(opponentAssisted));
    }

    public UUID getId() {
        return id;
    }

    public UUID getCreatorId() {
        return creatorId;
    }

    public UUID getOpponentId() {
        return opponentId;
    }

    public String getScramble() {
        return scramble;
    }

    public Status getStatus() {
        return status;
    }

    public boolean isAllowAssist() {
        return allowAssist;
    }

    public String getMessage() {
        return message;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }

    public UUID getWinnerId() {
        return winnerId;
    }

    public Instant getCreatorSubmittedAt() {
        return creatorSubmittedAt;
    }

    public Instant getOpponentSubmittedAt() {
        return opponentSubmittedAt;
    }
}
