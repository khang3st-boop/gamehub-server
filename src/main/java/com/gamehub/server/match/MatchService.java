package com.gamehub.server.match;

import java.security.SecureRandom;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.game.caro.Caro;
import com.gamehub.server.match.Match.EndReason;
import com.gamehub.server.match.Match.Status;
import com.gamehub.server.match.MatchDtos.AssistEvent;
import com.gamehub.server.match.MatchDtos.BracketMatchDto;
import com.gamehub.server.match.MatchDtos.CaroMoveEvent;
import com.gamehub.server.match.MatchDtos.ConnectionEvent;
import com.gamehub.server.match.MatchDtos.FinishRequest;
import com.gamehub.server.match.MatchDtos.MatchDto;
import com.gamehub.server.match.MatchDtos.PlayerDto;
import com.gamehub.server.match.MatchDtos.ProgressEvent;
import com.gamehub.server.presence.PresenceService;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserSummaryDto;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

/**
 * Máy trạng thái của phòng đấu realtime 2 hoặc 4 người:
 *
 * <pre>
 * WAITING_READY ──(đủ người, tất cả Sẵn sàng)──▶ COUNTDOWN ──(tới startAt)──▶ PLAYING ──▶ FINISHED
 *       │ hết hạn / chủ phòng rời                         │ hết giờ, đầu hàng, rớt mạng quá lâu
 *       ▼                                                  ▼
 *   CANCELLED                              FINISHED (TIMEOUT/FORFEIT/DISCONNECT/DISQUALIFIED) | ABANDONED
 * </pre>
 *
 * <ul>
 * <li>2 người: người nộp lời giải hợp lệ đầu tiên thắng; Caro theo lượt.</li>
 * <li>4 người Rubik/Sudoku/Xếp hình: đua cùng đề, xếp hạng theo thời gian server đo; trận kết thúc khi
 * mọi người đã xong hoặc bị loại (rời, rớt mạng, dùng trợ giúp).</li>
 * <li>4 người Caro: phòng mẹ tạo 2 ván bán kết (bốc thăm cặp), hai người thắng vào chung kết.</li>
 * </ul>
 *
 * Mọi thời gian do đồng hồ SERVER đo; kết quả chỉ ghi nhận sau khi server kiểm tra lời giải
 * ({@link MatchVerifier}) hoặc tự xử nước Caro. Mỗi phòng xử lý tuần tự bằng khoá riêng. Khoá chỉ
 * lấy theo thứ tự ván con → (không bao giờ) phòng mẹ; phòng mẹ chỉ đọc ván con trong lượt hẹn giờ.
 */
@Service
public class MatchService {

    public static final String SOURCE_INVITE = "INVITE";
    public static final String SOURCE_MATCHMAKING = "MATCHMAKING";
    public static final String SOURCE_ROOM = "ROOM";

    static final int ELO_K = 32;
    static final Duration PROGRESS_THROTTLE = Duration.ofMillis(200);
    /** Phòng có mã chờ đủ người tối đa 10 phút (gia hạn mỗi khi có người vào). */
    static final Duration ROOM_TTL = Duration.ofMinutes(10);
    /** Nghỉ giữa bán kết và chung kết để mọi người xem kết quả. */
    static final Duration FINAL_BREAK = Duration.ofSeconds(5);
    static final String CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    private static final Logger log = LoggerFactory.getLogger(MatchService.class);
    private static final TypeReference<Map<String, Object>> MAP = new TypeReference<>() {
    };

    private final MatchRepository matches;
    private final UserRatingRepository ratings;
    private final UserRepository users;
    private final UserService userService;
    private final MatchConfigFactory configs;
    private final PresenceService presence;
    private final RealtimeEvents events;
    private final ObjectMapper json;
    private final AppProperties props;
    private final Clock clock;
    private final TransactionTemplate tx;
    private final Random random = new SecureRandom();
    private final Map<UUID, Object> locks = new ConcurrentHashMap<>();
    private final Map<String, Instant> lastProgress = new ConcurrentHashMap<>();
    private final Object createLock = new Object();

    public MatchService(MatchRepository matches, UserRatingRepository ratings, UserRepository users,
            UserService userService, MatchConfigFactory configs, PresenceService presence, RealtimeEvents events,
            ObjectMapper json, AppProperties props, Clock clock, PlatformTransactionManager txm) {
        this.matches = matches;
        this.ratings = ratings;
        this.users = users;
        this.userService = userService;
        this.configs = configs;
        this.presence = presence;
        this.events = events;
        this.json = json;
        this.props = props;
        this.clock = clock;
        this.tx = new TransactionTemplate(txm);
    }

    // ------------------------------------------------------------------ tạo phòng

    /** Có đang ở trong một phòng chưa kết thúc (và chưa bị loại khỏi phòng đó) không. */
    public boolean busy(UUID user) {
        return matches.findForUser(user, Match.ACTIVE).stream().anyMatch(m -> !m.isOut(user));
    }

    /** Tạo phòng 1v1 cho A và B (từ lời mời được chấp nhận hoặc ghép trận). 409 nếu ai đó đang bận. */
    public MatchDto create(String game, String mode, UUID a, UUID b, String source) {
        MatchConfigFactory.validate(game, mode);
        synchronized (createLock) {
            MatchDto dto = tx.execute(s -> {
                if (busy(a) || busy(b)) {
                    throw ApiException.conflict("PLAYER_BUSY", "Một người chơi đang ở trong trận khác");
                }
                Instant now = Instant.now(clock);
                String config = json.writeValueAsString(configs.create(game, mode, a, b));
                Match m = matches.save(new Match(game, mode, source, a, b, config, now,
                        now.plus(props.online().readyTimeout())));
                MatchDto snap = snapshot(m);
                events.toUser(a, "match.created", snap);
                events.toUser(b, "match.created", snap);
                return snap;
            });
            presence.setInMatch(a, true);
            presence.setInMatch(b, true);
            log.info("Tạo trận {} {} {} ({})", dto.id(), game, mode, source);
            return dto;
        }
    }

    /** Tạo phòng chờ 2/4 người có mã 6 ký tự; người tạo là chủ phòng (ghế A). */
    public MatchDto createRoom(UUID me, String game, String mode, int capacity) {
        MatchConfigFactory.validate(game, mode);
        if (capacity != 2 && capacity != 4) {
            throw ApiException.badRequest("INVALID_CAPACITY", "Phòng chỉ có 2 hoặc 4 người");
        }
        synchronized (createLock) {
            MatchDto dto = tx.execute(s -> {
                if (busy(me)) {
                    throw ApiException.conflict("PLAYER_BUSY", "Bạn đang ở trong một phòng khác");
                }
                Instant now = Instant.now(clock);
                Match m = matches.save(Match.room(game, mode, capacity, me, newRoomCode(), now, now.plus(ROOM_TTL)));
                MatchDto snap = snapshot(m);
                events.toUser(me, "match.created", snap);
                return snap;
            });
            presence.setInMatch(me, true);
            log.info("Tạo phòng {} {} {} {} người", dto.id(), dto.roomCode(), game, capacity);
            return dto;
        }
    }

    /** Vào phòng bằng mã. */
    public MatchDto joinByCode(UUID me, String code) {
        UUID id = tx.execute(s -> matches.findFirstByRoomCodeAndStatus(code.toUpperCase(), Status.WAITING_READY)
                .map(Match::getId).orElseThrow(() -> ApiException.notFound("Không tìm thấy phòng đang chờ với mã này")));
        return joinRoom(me, id);
    }

    /** Vào phòng chờ (bằng mã hoặc nhận lời mời của chủ phòng). Idempotent nếu đã ngồi trong phòng. */
    public MatchDto joinRoom(UUID me, UUID roomId) {
        synchronized (createLock) {
            MatchDto dto = locked(roomId, m -> {
                if (m.isPlayer(me) && m.getStatus().active()) {
                    return snapshot(m);
                }
                if (!m.isRoom() || m.getStatus() != Status.WAITING_READY) {
                    throw ApiException.conflict("ROOM_CLOSED", "Phòng đã bắt đầu hoặc đã đóng");
                }
                if (m.full()) {
                    throw ApiException.conflict("ROOM_FULL", "Phòng đã đủ người");
                }
                if (busy(me)) {
                    throw ApiException.conflict("PLAYER_BUSY", "Bạn đang ở trong một phòng khác");
                }
                for (UUID p : m.players()) {
                    if (userService.blockedEitherWay(me, p)) {
                        throw ApiException.forbidden("BLOCKED", "Không thể vào phòng này");
                    }
                }
                m.seat(me);
                m.setReadyDeadline(Instant.now(clock).plus(ROOM_TTL));
                MatchDto snap = broadcastState(m);
                events.toUser(me, "match.created", snap);
                return snap;
            });
            presence.setInMatch(me, true);
            return dto;
        }
    }

    private String newRoomCode() {
        for (int attempt = 0; attempt < 20; attempt++) {
            StringBuilder b = new StringBuilder(6);
            for (int i = 0; i < 6; i++) {
                b.append(CODE_ALPHABET.charAt(random.nextInt(CODE_ALPHABET.length())));
            }
            String code = b.toString();
            if (!matches.existsByRoomCodeAndStatusIn(code, Match.ACTIVE)) {
                return code;
            }
        }
        throw new IllegalStateException("Không sinh được mã phòng");
    }

    // ------------------------------------------------------------------ đọc

    public MatchDto get(UUID me, UUID id) {
        return tx.execute(s -> snapshot(participant(load(id), me)));
    }

    /**
     * Phòng đang diễn ra của tôi (để khôi phục sau khi mất mạng / mở lại app), hoặc null. Trong giải
     * Caro 4 người, ván con đang chơi được ưu tiên hơn phòng mẹ.
     */
    public MatchDto active(UUID me) {
        return tx.execute(s -> matches.findForUser(me, Match.ACTIVE).stream()
                .filter(m -> !m.isOut(me))
                .min(Comparator.comparing((Match m) -> m.getParentId() == null))
                .map(this::snapshot).orElse(null));
    }

    public List<MatchDto> history(UUID me, int limit) {
        return tx.execute(s -> {
            List<Match> list = matches.history(me, PageRequest.of(0, Math.clamp(limit, 1, 100)));
            Map<UUID, User> byId = loadUsers(list);
            return list.stream().map(m -> snapshot(m, byId)).toList();
        });
    }

    // ------------------------------------------------------------------ thao tác

    public MatchDto ready(UUID me, UUID id, boolean ready) {
        return locked(id, m -> {
            participant(m, me);
            if (m.getStatus() != Status.WAITING_READY) {
                if (ready && (m.getStatus() == Status.COUNTDOWN || m.getStatus() == Status.PLAYING)) {
                    return snapshot(m); // gửi lại sau khi mất mạng: idempotent
                }
                throw ApiException.conflict("MATCH_NOT_WAITING", "Phòng không còn chờ sẵn sàng");
            }
            m.setReady(me, ready);
            if (m.bothReady()) {
                start(m);
            }
            return broadcastState(m);
        });
    }

    /** Đủ người và tất cả sẵn sàng: phòng tạo tay sinh đề lúc này để mọi người nhận cùng một đề. */
    private void start(Match m) {
        Instant now = Instant.now(clock);
        if (m.isRoom()) {
            List<UUID> ps = m.players();
            m.setConfig(json.writeValueAsString(configs.create(m.getGame(), m.getMode(), ps.get(0), ps.get(1))));
        }
        if (m.isBracketParent()) {
            startBracket(m, now);
            return;
        }
        Instant startAt = now.plus(props.online().countdown());
        m.startCountdown(startAt);
        if (isCaro(m)) {
            m.setTurnDeadline(startAt.plus(props.online().caroTurn()));
        }
    }

    /** Giải Caro 4 người: bốc thăm 2 cặp bán kết, mỗi cặp là một ván con 1v1. */
    private void startBracket(Match parent, Instant now) {
        List<UUID> ps = new ArrayList<>(parent.players());
        Collections.shuffle(ps, random);
        Map<String, Object> cfg = config(parent);
        cfg.put("bracket", true);
        parent.setConfig(json.writeValueAsString(cfg));
        parent.startCountdown(now);
        parent.play();
        createBracketMatch(parent, "SEMI1", ps.get(0), ps.get(1), now.plus(props.online().countdown()));
        createBracketMatch(parent, "SEMI2", ps.get(2), ps.get(3), now.plus(props.online().countdown()));
    }

    private void createBracketMatch(Match parent, String stage, UUID a, UUID b, Instant startAt) {
        Instant now = Instant.now(clock);
        String config = json.writeValueAsString(configs.create(parent.getGame(), parent.getMode(), a, b));
        Match child = Match.bracket(parent, stage, a, b, config, now);
        child.setReady(a, true);
        child.setReady(b, true);
        child.startCountdown(startAt);
        child.setTurnDeadline(startAt.plus(props.online().caroTurn()));
        matches.save(child);
        MatchDto snap = snapshot(child);
        events.toUser(a, "match.created", snap);
        events.toUser(b, "match.created", snap);
        log.info("Giải Caro {}: tạo {} {}", parent.getId(), stage, child.getId());
    }

    /** Tiến độ để hiển thị cho đối thủ (không ảnh hưởng thắng thua). Gửi quá dày thì bỏ qua. */
    public void progress(UUID me, UUID id, int progress) {
        Instant now = Instant.now(clock);
        String key = id + ":" + me;
        Instant last = lastProgress.get(key);
        if (last != null && last.plus(PROGRESS_THROTTLE).isAfter(now)) {
            return;
        }
        lastProgress.put(key, now);
        locked(id, m -> {
            participant(m, me);
            promote(m);
            if (m.getStatus() != Status.PLAYING || isCaro(m) || m.isOut(me) || m.timeOf(me) != null) {
                return null;
            }
            int p = Math.clamp(progress, 0, 99); // 100 chỉ có khi server xác nhận đã giải
            m.setProgress(me, p);
            events.toMatch(m.getId(), "match.progress", new ProgressEvent(me, p));
            return null;
        });
    }

    /**
     * Người chơi dùng gợi ý / tự giải. Trận khoá trợ giúp: người đó bị xử thua (DISQUALIFIED);
     * trận cũ không khoá: chỉ không tính xếp hạng. Đối thủ luôn được báo.
     */
    public MatchDto assist(UUID me, UUID id) {
        return locked(id, m -> {
            participant(m, me);
            promote(m);
            if (!m.getStatus().active() || m.isOut(me)) {
                return snapshot(m);
            }
            if (!m.assistedOf(me)) {
                m.markAssisted(me);
                events.toMatch(m.getId(), "match.assist", new AssistEvent(me));
            }
            if (assistLocked(m) && m.getStatus() == Status.PLAYING) {
                disqualify(m, me);
                return broadcastState(m);
            }
            return snapshot(m);
        });
    }

    /** Nộp lời giải. 2 người: hợp lệ → người nộp thắng ngay. 4 người: ghi thời gian, xếp hạng khi xong. */
    public MatchDto finish(UUID me, UUID id, FinishRequest req) {
        return locked(id, m -> {
            participant(m, me);
            promote(m);
            if (isCaro(m)) {
                throw ApiException.badRequest("WRONG_GAME", "Caro dùng nước đi, không nộp lời giải");
            }
            if (m.getStatus() != Status.PLAYING) {
                throw ApiException.conflict("MATCH_NOT_PLAYING", m.getStatus() == Status.FINISHED
                        ? "Trận đã kết thúc" : "Trận chưa bắt đầu");
            }
            if (m.isOut(me)) {
                throw ApiException.conflict("PLAYER_OUT", "Bạn đã bị loại khỏi trận này");
            }
            if (m.timeOf(me) != null) {
                return snapshot(m); // nộp lại sau khi mất mạng: idempotent
            }
            Instant now = Instant.now(clock);
            long elapsed = Duration.between(m.getStartAt(), now).toMillis();
            String reject = MatchVerifier.verify(m.getGame(), config(m), req, elapsed);
            if (reject != null) {
                throw ApiException.unprocessable("RESULT_REJECTED", reject);
            }
            boolean assisted = req.usedAssist() || MatchVerifier.usedPuzzleHints(req.drops());
            if (assisted) {
                m.markAssisted(me);
                if (assistLocked(m)) {
                    // Không ném lỗi (sẽ huỷ cả giao dịch): ghi nhận vi phạm rồi xử thua.
                    events.toMatch(m.getId(), "match.assist", new AssistEvent(me));
                    disqualify(m, me);
                    return broadcastState(m);
                }
            }
            m.setProgress(me, 100);
            m.setTime(me, elapsed);
            if (m.getCapacity() == 2) {
                end(m, Status.FINISHED, EndReason.SOLVED, me);
            } else {
                events.toMatch(m.getId(), "match.progress", new ProgressEvent(me, 100));
                checkRaceEnd(m);
            }
            return broadcastState(m);
        });
    }

    /** Một nước Caro: server kiểm tra lượt, ô trống, thắng/hoà. */
    public MatchDto caroMove(UUID me, UUID id, int cell, int index) {
        return locked(id, m -> {
            participant(m, me);
            promote(m);
            if (!isCaro(m) || m.isBracketParent()) {
                throw ApiException.badRequest("WRONG_GAME", "Chỉ ván Caro 1v1 mới có nước đi theo lượt");
            }
            if (m.getStatus() != Status.PLAYING) {
                throw ApiException.conflict("MATCH_NOT_PLAYING", "Trận chưa bắt đầu hoặc đã kết thúc");
            }
            List<Integer> moves = m.caroMoveList();
            if (index != moves.size()) {
                throw ApiException.conflict("STALE_MOVE", "Bàn cờ đã thay đổi, hãy tải lại trạng thái");
            }
            UUID x = caroX(m);
            UUID toMove = moves.size() % 2 == 0 ? x : m.opponentOf(x);
            if (!toMove.equals(me)) {
                throw ApiException.conflict("NOT_YOUR_TURN", "Chưa đến lượt bạn");
            }
            if (cell < 0 || cell >= Caro.CELLS) {
                throw ApiException.badRequest("INVALID_MOVE", "Ô không hợp lệ");
            }
            int[] board = new int[Caro.CELLS];
            for (int k = 0; k < moves.size(); k++) {
                board[moves.get(k)] = k % 2 == 0 ? Caro.X : Caro.O;
            }
            if (board[cell] != 0) {
                throw ApiException.conflict("CELL_TAKEN", "Ô đã có quân");
            }
            board[cell] = moves.size() % 2 == 0 ? Caro.X : Caro.O;
            Instant now = Instant.now(clock);
            m.addCaroMove(cell, now.plus(props.online().caroTurn()));
            events.toMatch(m.getId(), "match.caro.move",
                    new CaroMoveEvent(moves.size(), cell, me, m.getTurnDeadline()));
            if (Caro.isWinningMove(board, cell)) {
                m.setTime(me, Duration.between(m.getStartAt(), now).toMillis());
                end(m, Status.FINISHED, EndReason.CARO_WIN, me);
                return broadcastState(m);
            }
            if (moves.size() + 1 == Caro.CELLS) {
                end(m, Status.FINISHED, EndReason.DRAW, null);
                return broadcastState(m);
            }
            return snapshot(m);
        });
    }

    /**
     * Rời phòng / đầu hàng. Phòng chờ có mã: khách rời thì nhả ghế, chủ phòng rời thì huỷ phòng.
     * Trận 1v1 chưa bắt đầu: huỷ; đang chơi: đối thủ thắng. Đua 4 người: người rời bị loại.
     */
    public MatchDto forfeit(UUID me, UUID id) {
        Optional<UUID> child = tx.execute(s -> {
            Match m = load(id);
            if (!m.isBracketParent() || m.getStatus() != Status.PLAYING) {
                return Optional.<UUID>empty();
            }
            return matches.findByParentIdOrderByCreatedAt(id).stream()
                    .filter(c -> c.getStatus().active() && c.isPlayer(me)).map(Match::getId).findFirst();
        });
        if (child.isPresent()) {
            forfeit(me, child.get()); // đầu hàng ván đang chơi trong giải
        }
        MatchDto dto = locked(id, m -> {
            participant(m, me);
            promote(m);
            switch (m.getStatus()) {
                case WAITING_READY, COUNTDOWN -> {
                    if (m.isRoom() && !m.isHost(me)) {
                        m.unseat(me);
                        if (m.getStatus() == Status.COUNTDOWN) {
                            m.backToWaiting();
                        }
                        MatchDto snap = broadcastState(m);
                        events.toUser(me, "match.left", snap);
                        return snap;
                    }
                    end(m, Status.CANCELLED, EndReason.CANCELLED, null);
                }
                case PLAYING -> {
                    if (m.isBracketParent()) {
                        if (!m.isOut(me)) {
                            m.markOut(me);
                        }
                        return snapshot(m);
                    }
                    if (m.getCapacity() == 2) {
                        end(m, Status.FINISHED, EndReason.FORFEIT, m.opponentOf(me));
                    } else if (!m.isOut(me)) {
                        m.markOut(me);
                        checkRaceEnd(m);
                    }
                }
                default -> {
                    return snapshot(m);
                }
            }
            return broadcastState(m);
        });
        if (!busy(me)) {
            presence.setInMatch(me, false);
        }
        return dto;
    }

    // ------------------------------------------------------------------ hẹn giờ

    /** Mỗi giây: đếm ngược xong, hết hạn sẵn sàng, hết giờ lượt Caro, rớt mạng quá lâu, tiến giải. */
    @Scheduled(fixedDelayString = "PT1S", initialDelayString = "PT1S")
    public void tick() {
        Set<UUID> active = new HashSet<>();
        for (Match m : matches.findByStatusIn(Match.ACTIVE)) {
            active.add(m.getId());
            try {
                locked(m.getId(), this::sweep);
            } catch (RuntimeException e) {
                log.warn("Lỗi xử lý hẹn giờ trận {}: {}", m.getId(), e.toString());
            }
        }
        locks.keySet().retainAll(active);
        lastProgress.keySet().removeIf(k -> !active.contains(UUID.fromString(k.substring(0, 36))));
    }

    private Void sweep(Match m) {
        Instant now = Instant.now(clock);
        Duration grace = props.online().disconnectGrace();
        List<UUID> gone = m.players().stream().filter(p -> !m.isOut(p) && gone(p, now, grace)).toList();
        switch (m.getStatus()) {
            case WAITING_READY -> {
                if (now.isAfter(m.getReadyDeadline())) {
                    end(m, Status.CANCELLED, EndReason.READY_TIMEOUT, null);
                    broadcastState(m);
                } else if (!gone.isEmpty()) {
                    if (m.isRoom() && !gone.contains(m.getPlayerA())) {
                        // Khách rớt mạng quá lâu: nhả ghế cho người khác vào, phòng vẫn chờ.
                        for (UUID p : gone) {
                            m.unseat(p);
                            presence.setInMatch(p, false);
                        }
                    } else {
                        end(m, Status.CANCELLED, EndReason.DISCONNECT, null);
                    }
                    broadcastState(m);
                }
            }
            case COUNTDOWN, PLAYING -> {
                if (promote(m)) {
                    broadcastState(m);
                }
                if (m.getStatus() != Status.PLAYING) {
                    return null;
                }
                if (m.isBracketParent()) {
                    advanceBracket(m, now);
                } else if (m.getCapacity() > 2) {
                    sweepRace(m, now, gone);
                } else {
                    sweepDuel(m, now, gone);
                }
            }
            default -> {
            }
        }
        return null;
    }

    private void sweepDuel(Match m, Instant now, List<UUID> gone) {
        if (gone.size() == 2) {
            end(m, Status.ABANDONED, EndReason.DISCONNECT, null);
            broadcastState(m);
        } else if (gone.size() == 1) {
            end(m, Status.FINISHED, EndReason.DISCONNECT, m.opponentOf(gone.get(0)));
            broadcastState(m);
        } else if (isCaro(m) && m.getTurnDeadline() != null && now.isAfter(m.getTurnDeadline())) {
            UUID x = caroX(m);
            UUID toMove = m.caroMoveList().size() % 2 == 0 ? x : m.opponentOf(x);
            end(m, Status.FINISHED, EndReason.TIMEOUT, m.opponentOf(toMove));
            broadcastState(m);
        } else if (!isCaro(m) && now.isAfter(m.getStartAt().plus(props.online().maxRace()))) {
            end(m, Status.FINISHED, EndReason.TIMEOUT, null);
            broadcastState(m);
        }
    }

    private void sweepRace(Match m, Instant now, List<UUID> gone) {
        boolean changed = false;
        for (UUID p : gone) {
            if (m.timeOf(p) == null) {
                m.markOut(p);
                changed = true;
            }
        }
        if (now.isAfter(m.getStartAt().plus(props.online().maxRace()))) {
            UUID winner = firstFinisher(m);
            end(m, Status.FINISHED, winner == null ? EndReason.TIMEOUT : EndReason.SOLVED, winner);
            changed = true;
        } else if (changed) {
            checkRaceEnd(m);
        }
        if (changed) {
            broadcastState(m);
        }
    }

    /**
     * Đua 4 người kết thúc khi mọi người đã xong hoặc bị loại. Nếu chỉ còn một người chưa bị loại mà
     * chưa ai về đích, người đó thắng.
     */
    private void checkRaceEnd(Match m) {
        if (!m.getStatus().active()) {
            return;
        }
        List<UUID> stillPlaying = m.players().stream().filter(p -> !m.isOut(p) && m.timeOf(p) == null).toList();
        UUID first = firstFinisher(m);
        if (stillPlaying.isEmpty()) {
            if (first != null) {
                end(m, Status.FINISHED, EndReason.SOLVED, first);
            } else {
                end(m, Status.ABANDONED, EndReason.DISCONNECT, null);
            }
        } else if (first == null && stillPlaying.size() == 1) {
            long out = m.players().stream().filter(m::isOut).count();
            boolean dq = m.players().stream().anyMatch(p -> m.isOut(p) && m.assistedOf(p));
            end(m, Status.FINISHED, dq && out == 1 ? EndReason.DISQUALIFIED : EndReason.FORFEIT, stillPlaying.get(0));
        }
    }

    private static UUID firstFinisher(Match m) {
        return m.players().stream().filter(p -> m.timeOf(p) != null && !m.isOut(p))
                .min(Comparator.comparingLong(m::timeOf)).orElse(null);
    }

    /** Vi phạm khoá trợ giúp: 1v1 thì đối thủ thắng; đua 4 người thì người vi phạm bị loại. */
    private void disqualify(Match m, UUID me) {
        log.info("Trận {}: {} dùng trợ giúp khi đã khoá → xử thua", m.getId(), me);
        if (m.getCapacity() == 2) {
            end(m, Status.FINISHED, EndReason.DISQUALIFIED, m.opponentOf(me));
        } else {
            m.markOut(me);
            checkRaceEnd(m);
        }
    }

    /** Phòng mẹ giải Caro: 2 bán kết xong → tạo chung kết; chung kết xong → xếp hạng 1/2/3/3. */
    private void advanceBracket(Match parent, Instant now) {
        List<Match> kids = matches.findByParentIdOrderByCreatedAt(parent.getId());
        Match semi1 = stage(kids, "SEMI1");
        Match semi2 = stage(kids, "SEMI2");
        Match fin = stage(kids, "FINAL");
        if (semi1 == null || semi2 == null || semi1.getStatus().active() || semi2.getStatus().active()) {
            return;
        }
        UUID w1 = bracketWinner(semi1);
        UUID w2 = bracketWinner(semi2);
        if (fin == null) {
            if (w1 != null && w2 != null) {
                createBracketMatch(parent, "FINAL", w1, w2, now.plus(FINAL_BREAK));
                broadcastState(parent);
                return;
            }
            // Một bán kết bị bỏ (cả hai rớt mạng): người thắng bán kết còn lại vô địch.
            UUID champion = w1 != null ? w1 : w2;
            finishBracket(parent, champion, null, List.of(semi1, semi2));
            return;
        }
        if (fin.getStatus().active()) {
            return;
        }
        UUID champion = bracketWinner(fin);
        UUID runnerUp = champion == null ? null : fin.opponentOf(champion);
        finishBracket(parent, champion, runnerUp, List.of(semi1, semi2));
    }

    private void finishBracket(Match parent, UUID champion, UUID runnerUp, List<Match> semis) {
        String[] ranks = new String[parent.getCapacity()];
        for (int i = 0; i < ranks.length; i++) {
            UUID p = parent.at(i);
            ranks[i] = p.equals(champion) ? "1" : p.equals(runnerUp) ? "2" : "3";
        }
        parent.setRanks(String.join(",", ranks));
        if (champion == null) {
            end(parent, Status.ABANDONED, EndReason.DISCONNECT, null);
        } else {
            end(parent, Status.FINISHED, EndReason.CARO_WIN, champion);
        }
        broadcastState(parent);
    }

    private static Match stage(List<Match> kids, String stage) {
        return kids.stream().filter(k -> stage.equals(k.getStage())).findFirst().orElse(null);
    }

    /** Người đi tiếp của một ván trong giải: người thắng; hoà thì người cầm O (đi sau) đi tiếp. */
    private UUID bracketWinner(Match k) {
        if (k.getWinnerId() != null) {
            return k.getWinnerId();
        }
        if (k.getStatus() == Status.FINISHED && k.getEndReason() == EndReason.DRAW) {
            return k.opponentOf(caroX(k));
        }
        return null;
    }

    private boolean gone(UUID user, Instant now, Duration grace) {
        return presence.disconnectedSince(user).map(t -> t.plus(grace).isBefore(now)).orElse(false);
    }

    /** Báo đối thủ khi một người mất / có lại kết nối (để hiện "Đối thủ đang kết nối lại…"). */
    @EventListener
    public void onConnectionChanged(PresenceService.ConnectionChanged e) {
        for (Match m : matches.findForUser(e.userId(), Match.ACTIVE)) {
            events.toMatch(m.getId(), "match.connection", new ConnectionEvent(e.userId(), e.connected()));
        }
    }

    // ------------------------------------------------------------------ nội bộ

    private <T> T locked(UUID id, Function<Match, T> work) {
        Object lock = locks.computeIfAbsent(id, k -> new Object());
        synchronized (lock) {
            return tx.execute(s -> work.apply(load(id)));
        }
    }

    private Match load(UUID id) {
        return matches.findById(id).orElseThrow(() -> ApiException.notFound("Không tìm thấy trận đấu"));
    }

    private static Match participant(Match m, UUID me) {
        if (!m.isPlayer(me)) {
            throw ApiException.forbidden("NOT_PARTICIPANT", "Bạn không ở trong trận này");
        }
        return m;
    }

    private static boolean isCaro(Match m) {
        return "caro".equals(m.getGame());
    }

    private UUID caroX(Match m) {
        return UUID.fromString((String) config(m).get("x"));
    }

    private boolean assistLocked(Match m) {
        return Boolean.TRUE.equals(config(m).get("assistLocked"));
    }

    /** COUNTDOWN → PLAYING khi đã tới startAt. */
    private boolean promote(Match m) {
        if (m.getStatus() == Status.COUNTDOWN && !Instant.now(clock).isBefore(m.getStartAt())) {
            m.play();
            return true;
        }
        return false;
    }

    private void end(Match m, Status status, EndReason reason, UUID winner) {
        Instant now = Instant.now(clock);
        m.end(status, reason, winner, now);
        // Trận cũ (không khoá trợ giúp) có người dùng gợi ý thì không tính điểm. Trận khoá trợ giúp
        // đã xử thua người vi phạm nên kết quả vẫn hợp lệ cho những người còn lại.
        boolean assistSpoiled = m.anyAssisted() && !assistLocked(m);
        boolean rated = status == Status.FINISHED && !assistSpoiled && !m.isBracketParent()
                && (winner != null || reason == EndReason.DRAW);
        m.setRated(rated);
        if (rated) {
            if (m.getCapacity() == 2) {
                updateRatings(m, winner, now);
            } else {
                updateRaceRatings(m, now);
            }
        }
        if (m.getParentId() == null) {
            for (UUID p : m.players()) {
                presence.setInMatch(p, false);
            }
        }
        log.info("Trận {} kết thúc: {} {} thắng={}", m.getId(), status, reason, winner);
    }

    private void updateRatings(Match m, UUID winner, Instant now) {
        UserRating ra = ratings.find(m.getPlayerA(), m.getGame())
                .orElseGet(() -> new UserRating(m.getPlayerA(), m.getGame(), now));
        UserRating rb = ratings.find(m.getPlayerB(), m.getGame())
                .orElseGet(() -> new UserRating(m.getPlayerB(), m.getGame(), now));
        double scoreA = winner == null ? 0.5 : winner.equals(m.getPlayerA()) ? 1 : 0;
        int[] next = elo(ra.getRating(), rb.getRating(), scoreA);
        ra.record(next[0], scoreA == 1, now);
        rb.record(next[1], scoreA == 0, now);
        ratings.save(ra);
        ratings.save(rb);
    }

    /** Đua nhiều người: Elo từng cặp với K/(n−1), thứ tự theo hạng (về đích sớm > chưa xong > bị loại). */
    private void updateRaceRatings(Match m, Instant now) {
        List<UUID> ps = m.players();
        int n = ps.size();
        List<UserRating> rs = new ArrayList<>(n);
        int[] delta = new int[n];
        for (UUID p : ps) {
            rs.add(ratings.find(p, m.getGame()).orElseGet(() -> new UserRating(p, m.getGame(), now)));
        }
        double k = ELO_K / (double) (n - 1);
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int c = Long.compare(order(m, ps.get(i)), order(m, ps.get(j)));
                double scoreI = c < 0 ? 1 : c > 0 ? 0 : 0.5;
                double expectedI = 1 / (1 + Math.pow(10, (rs.get(j).getRating() - rs.get(i).getRating()) / 400.0));
                int d = (int) Math.round(k * (scoreI - expectedI));
                delta[i] += d;
                delta[j] -= d;
            }
        }
        for (int i = 0; i < n; i++) {
            UserRating r = rs.get(i);
            r.record(r.getRating() + delta[i], ps.get(i).equals(m.getWinnerId()), now);
            ratings.save(r);
        }
    }

    /** Khoá sắp xếp hạng đua: thời gian về đích; chưa xong xếp sau; bị loại xếp cuối. */
    private static long order(Match m, UUID p) {
        if (m.isOut(p)) {
            return Long.MAX_VALUE;
        }
        Long t = m.timeOf(p);
        return t == null ? Long.MAX_VALUE - 1 : t;
    }

    /** Elo chuẩn, K = 32. */
    static int[] elo(int a, int b, double scoreA) {
        double expectedA = 1 / (1 + Math.pow(10, (b - a) / 400.0));
        int delta = (int) Math.round(ELO_K * (scoreA - expectedA));
        return new int[] {a + delta, b - delta};
    }

    private MatchDto broadcastState(Match m) {
        MatchDto dto = snapshot(m);
        events.toMatch(m.getId(), "match.state", dto);
        if (!m.getStatus().active()) {
            // Người đã rời màn hình phòng vẫn nhận kết quả qua hàng đợi riêng.
            for (UUID p : m.players()) {
                events.toUser(p, "match.ended", dto);
            }
        }
        return dto;
    }

    Map<String, Object> config(Match m) {
        return json.readValue(m.getConfig(), MAP);
    }

    private MatchDto snapshot(Match m) {
        return snapshot(m, loadUsers(List.of(m)));
    }

    private Map<UUID, User> loadUsers(List<Match> list) {
        Set<UUID> ids = new HashSet<>();
        for (Match m : list) {
            ids.addAll(m.players());
        }
        return users.findAllById(ids).stream().collect(Collectors.toMap(User::getId, Function.identity()));
    }

    /** Hạng hiển thị: giải Caro theo bảng xếp; đua theo thời gian; 1v1 người thắng hạng 1. */
    private static Map<UUID, Integer> ranks(Match m) {
        Map<UUID, Integer> out = new HashMap<>();
        if (m.getRanks() != null) {
            String[] parts = m.getRanks().split(",");
            for (int i = 0; i < parts.length; i++) {
                if (m.at(i) != null) {
                    out.put(m.at(i), Integer.parseInt(parts[i]));
                }
            }
            return out;
        }
        if (m.getCapacity() > 2 && !isCaro(m)) {
            // Đang đua: chỉ người đã về đích có hạng. Kết thúc: người chưa xong rồi người bị loại xếp cuối.
            boolean over = !m.getStatus().active();
            List<UUID> done = m.players().stream().filter(p -> over || (m.timeOf(p) != null && !m.isOut(p)))
                    .sorted(Comparator.comparingLong(p -> order(m, p))).toList();
            for (int i = 0; i < done.size(); i++) {
                out.put(done.get(i), i + 1);
            }
            return out;
        }
        if (m.getStatus() == Status.FINISHED) {
            for (UUID p : m.players()) {
                if (m.getWinnerId() != null) {
                    out.put(p, p.equals(m.getWinnerId()) ? 1 : 2);
                } else if (m.getEndReason() == EndReason.DRAW) {
                    out.put(p, 1);
                }
            }
        }
        return out;
    }

    private MatchDto snapshot(Match m, Map<UUID, User> byId) {
        List<PlayerDto> players = new ArrayList<>(m.getCapacity());
        Map<UUID, Integer> ranks = ranks(m);
        for (UUID p : m.players()) {
            User u = byId.get(p);
            UserSummaryDto summary = u == null ? new UserSummaryDto(p, "?", "Người chơi", 0) : UserSummaryDto.of(u);
            players.add(new PlayerDto(summary, Match.SLOTS[m.slot(p)], m.readyOf(p), m.progressOf(p),
                    m.assistedOf(p), m.timeOf(p), presence.isConnected(p), ranks.get(p), m.isOut(p)));
        }
        List<BracketMatchDto> bracket = m.isBracketParent()
                ? matches.findByParentIdOrderByCreatedAt(m.getId()).stream()
                        .map(k -> new BracketMatchDto(k.getId(), k.getStage(), k.getStatus(), k.players(),
                                k.getWinnerId(), k.getEndReason()))
                        .toList()
                : List.of();
        Map<String, Object> config = config(m);
        return new MatchDto(m.getId(), m.getGame(), m.getMode(), m.getSource(), m.getStatus(), config, players,
                m.getCreatedAt(), m.getReadyDeadline(), m.getStartAt(), m.getFinishedAt(), m.getWinnerId(),
                m.getEndReason(), m.isRated(), m.caroMoveList(), m.getTurnDeadline(), Instant.now(clock),
                m.getCapacity(), m.getRoomCode(), m.getParentId(), m.getStage(), bracket,
                Boolean.TRUE.equals(config.get("assistLocked")));
    }
}
