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
 * Phòng đấu realtime 2 hoặc 4 người (ghế A–D, A là chủ phòng). Đề (config), thời điểm bắt đầu
 * và kết quả đều do server quyết định; client chỉ gửi thao tác.
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
        SOLVED, CARO_WIN, DRAW, FORFEIT, TIMEOUT, DISCONNECT, READY_TIMEOUT, CANCELLED,
        /** Dùng trợ giúp trong trận thách đấu đã khoá trợ giúp. */
        DISQUALIFIED
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

    @Column(name = "player_b")
    private UUID playerB;

    @Column(name = "player_c")
    private UUID playerC;

    @Column(name = "player_d")
    private UUID playerD;

    @Column(nullable = false)
    private int capacity = 2;

    @Column(nullable = false, length = 4000)
    private String config;

    @Column(name = "a_ready", nullable = false)
    private boolean aReady;

    @Column(name = "b_ready", nullable = false)
    private boolean bReady;

    @Column(name = "c_ready", nullable = false)
    private boolean cReady;

    @Column(name = "d_ready", nullable = false)
    private boolean dReady;

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

    @Column(name = "c_time_ms")
    private Long cTimeMs;

    @Column(name = "d_time_ms")
    private Long dTimeMs;

    @Column(name = "a_assisted", nullable = false)
    private boolean aAssisted;

    @Column(name = "b_assisted", nullable = false)
    private boolean bAssisted;

    @Column(name = "c_assisted", nullable = false)
    private boolean cAssisted;

    @Column(name = "d_assisted", nullable = false)
    private boolean dAssisted;

    @Column(name = "a_progress", nullable = false)
    private int aProgress;

    @Column(name = "b_progress", nullable = false)
    private int bProgress;

    @Column(name = "c_progress", nullable = false)
    private int cProgress;

    @Column(name = "d_progress", nullable = false)
    private int dProgress;

    /** Bit theo ghế (A=1, B=2, C=4, D=8): đã rời / rớt mạng / bị loại. */
    @Column(name = "out_mask", nullable = false)
    private int outMask;

    /** Hạng cuối theo ghế ("1,3,2,3"), dùng cho giải Caro 4 người. */
    @Column(length = 16)
    private String ranks;

    @Column(name = "room_code", length = 8)
    private String roomCode;

    @Column(name = "parent_id")
    private UUID parentId;

    @Column(length = 8)
    private String stage;

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

    /** Phòng chờ do chủ phòng tạo: các ghế còn lại trống cho tới khi có người vào. */
    public static Match room(String game, String mode, int capacity, UUID host, String code, Instant now,
            Instant readyDeadline) {
        Match m = new Match(game, mode, "ROOM", host, null, "{}", now, readyDeadline);
        m.capacity = capacity;
        m.roomCode = code;
        return m;
    }

    /** Trận con của giải Caro 4 người (bán kết / chung kết). */
    public static Match bracket(Match parent, String stage, UUID a, UUID b, String config, Instant now) {
        Match m = new Match(parent.game, parent.mode, "BRACKET", a, b, config, now, now);
        m.parentId = parent.id;
        m.stage = stage;
        return m;
    }

    // ------------------------------------------------------------------ ghế

    public static final String[] SLOTS = {"A", "B", "C", "D"};

    /** Chỉ số ghế 0..3 của người chơi, -1 nếu không ngồi trong phòng. */
    public int slot(UUID user) {
        if (user == null) {
            return -1;
        }
        for (int i = 0; i < 4; i++) {
            if (user.equals(at(i))) {
                return i;
            }
        }
        return -1;
    }

    public UUID at(int slot) {
        return switch (slot) {
            case 0 -> playerA;
            case 1 -> playerB;
            case 2 -> playerC;
            case 3 -> playerD;
            default -> null;
        };
    }

    private void setAt(int slot, UUID user) {
        switch (slot) {
            case 0 -> playerA = user;
            case 1 -> playerB = user;
            case 2 -> playerC = user;
            default -> playerD = user;
        }
    }

    /** Người đang ngồi, theo thứ tự ghế. */
    public List<UUID> players() {
        List<UUID> out = new ArrayList<>(capacity);
        for (int i = 0; i < capacity; i++) {
            if (at(i) != null) {
                out.add(at(i));
            }
        }
        return out;
    }

    public boolean full() {
        return players().size() == capacity;
    }

    /** Ngồi vào ghế trống đầu tiên. */
    public void seat(UUID user) {
        for (int i = 0; i < capacity; i++) {
            if (at(i) == null) {
                setAt(i, user);
                return;
            }
        }
        throw new IllegalStateException("Phòng đã đủ người");
    }

    /** Rời ghế khi phòng còn chờ (chủ phòng không rời ghế: rời = huỷ phòng). */
    public void unseat(UUID user) {
        int s = slot(user);
        if (s <= 0) {
            return;
        }
        setAt(s, null);
        setReadyAt(s, false);
    }

    public void resetReady() {
        for (int i = 0; i < 4; i++) {
            setReadyAt(i, false);
        }
    }

    public boolean isPlayer(UUID user) {
        return slot(user) >= 0;
    }

    public boolean isA(UUID user) {
        return playerA.equals(user);
    }

    public boolean isHost(UUID user) {
        return playerA.equals(user);
    }

    /** Đối thủ trong trận 2 người. */
    public UUID opponentOf(UUID user) {
        return playerA.equals(user) ? playerB : playerA;
    }

    public void setReady(UUID user, boolean ready) {
        setReadyAt(slot(user), ready);
    }

    private void setReadyAt(int s, boolean ready) {
        switch (s) {
            case 0 -> aReady = ready;
            case 1 -> bReady = ready;
            case 2 -> cReady = ready;
            case 3 -> dReady = ready;
            default -> {
            }
        }
    }

    /** Đủ người và tất cả đã Sẵn sàng. */
    public boolean bothReady() {
        if (!full()) {
            return false;
        }
        for (UUID p : players()) {
            if (!readyOf(p)) {
                return false;
            }
        }
        return true;
    }

    public boolean readyOf(UUID user) {
        return switch (slot(user)) {
            case 0 -> aReady;
            case 1 -> bReady;
            case 2 -> cReady;
            case 3 -> dReady;
            default -> false;
        };
    }

    public boolean isOut(UUID user) {
        int s = slot(user);
        return s >= 0 && (outMask & (1 << s)) != 0;
    }

    public void markOut(UUID user) {
        int s = slot(user);
        if (s >= 0) {
            outMask |= 1 << s;
        }
    }

    public void startCountdown(Instant startAt) {
        this.status = Status.COUNTDOWN;
        this.startAt = startAt;
    }

    /** Một người rời phòng khi đang đếm ngược: quay lại chờ đủ người. */
    public void backToWaiting() {
        this.status = Status.WAITING_READY;
        this.startAt = null;
        this.turnDeadline = null;
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
        switch (slot(user)) {
            case 0 -> aProgress = p;
            case 1 -> bProgress = p;
            case 2 -> cProgress = p;
            case 3 -> dProgress = p;
            default -> {
            }
        }
    }

    public int progressOf(UUID user) {
        return switch (slot(user)) {
            case 0 -> aProgress;
            case 1 -> bProgress;
            case 2 -> cProgress;
            case 3 -> dProgress;
            default -> 0;
        };
    }

    public void markAssisted(UUID user) {
        switch (slot(user)) {
            case 0 -> aAssisted = true;
            case 1 -> bAssisted = true;
            case 2 -> cAssisted = true;
            case 3 -> dAssisted = true;
            default -> {
            }
        }
    }

    public boolean assistedOf(UUID user) {
        return switch (slot(user)) {
            case 0 -> aAssisted;
            case 1 -> bAssisted;
            case 2 -> cAssisted;
            case 3 -> dAssisted;
            default -> false;
        };
    }

    public void setTime(UUID user, long ms) {
        switch (slot(user)) {
            case 0 -> aTimeMs = ms;
            case 1 -> bTimeMs = ms;
            case 2 -> cTimeMs = ms;
            case 3 -> dTimeMs = ms;
            default -> {
            }
        }
    }

    public Long timeOf(UUID user) {
        return switch (slot(user)) {
            case 0 -> aTimeMs;
            case 1 -> bTimeMs;
            case 2 -> cTimeMs;
            case 3 -> dTimeMs;
            default -> null;
        };
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
        return aAssisted || bAssisted || cAssisted || dAssisted;
    }

    public int getCapacity() {
        return capacity;
    }

    public UUID getPlayerC() {
        return playerC;
    }

    public UUID getPlayerD() {
        return playerD;
    }

    public void setConfig(String config) {
        this.config = config;
    }

    public void setReadyDeadline(Instant readyDeadline) {
        this.readyDeadline = readyDeadline;
    }

    public String getRoomCode() {
        return roomCode;
    }

    public UUID getParentId() {
        return parentId;
    }

    public String getStage() {
        return stage;
    }

    public String getRanks() {
        return ranks;
    }

    public void setRanks(String ranks) {
        this.ranks = ranks;
    }

    /** Phòng tạo tay (mã phòng / phòng 4 người), khác trận tạo từ lời mời 1v1 hoặc ghép trận. */
    public boolean isRoom() {
        return "ROOM".equals(source);
    }

    /** Phòng mẹ của giải Caro 4 người (các ván chơi ở trận con). */
    public boolean isBracketParent() {
        return capacity == 4 && "caro".equals(game);
    }
}
