package com.gamehub.server.lobby;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.friends.FriendService;
import com.gamehub.server.match.MatchConfigFactory;
import com.gamehub.server.match.MatchService;
import com.gamehub.server.match.UserRatingRepository;
import com.gamehub.server.matchmaking.Regions;
import com.gamehub.server.presence.PresenceService;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserSummaryDto;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Sảnh thách đấu: danh sách người chơi ĐÃ CHỦ ĐỘNG bật "Cho phép người khác mời đấu". Chỉ lưu trong
 * bộ nhớ, tự hết hạn sau {@link #TTL} (bật lại để gia hạn) hoặc khi người dùng offline.
 *
 * <p>Quyền riêng tư: không bao giờ nhận hay trả toạ độ, địa chỉ, khoảng cách. Vùng là mã vùng thô do
 * người dùng tự chọn (hoặc không chia sẻ); thành tích chỉ hiện khi người dùng cho phép.
 */
@Service
public class LobbyService {

    static final Duration TTL = Duration.ofMinutes(10);
    /** Người xem danh sách gần đây được báo "lobby.updated" để tải lại (không gửi cả danh sách). */
    static final Duration WATCH = Duration.ofMinutes(2);
    static final int PAGE = 50;

    public record LobbyRequest(
            @Schema(description = "Game sẵn sàng đấu: rubik, sudoku, puzzle, caro") @NotEmpty @Size(max = 4) List<String> games,
            @Schema(description = "Số người nhận đấu: 2 và/hoặc 4 (mặc định 2)") @Size(max = 2) List<Integer> capacities,
            @Schema(description = "Mã vùng thô tự chọn (vd VN-HCM); null = không chia sẻ") String region,
            @Schema(description = "Cho người khác xem thành tích online") boolean showStats) {
    }

    public record RegionDto(String code, String name) {
    }

    public record StatsDto(String game, int rating, int played, int wins) {
    }

    public record LobbyEntryDto(List<String> games, List<Integer> capacities, RegionDto region, boolean showStats,
            Instant expiresAt) {
    }

    @Schema(description = "Một thẻ người chơi trong sảnh thách đấu")
    public record LobbyPlayerDto(
            UserSummaryDto user,
            List<String> games,
            List<Integer> capacities,
            @Schema(description = "Vùng thô người dùng tự chọn, null nếu không chia sẻ") RegionDto region,
            @Schema(description = "READY | IN_MATCH") String status,
            @Schema(description = "Thành tích online công khai (rỗng nếu người dùng ẩn)") List<StatsDto> stats,
            boolean friend) {
    }

    record Entry(UUID user, List<String> games, List<Integer> capacities, String region, boolean showStats,
            Instant until) {
    }

    private final Map<UUID, Entry> entries = new ConcurrentHashMap<>();
    private final Map<UUID, Instant> watchers = new ConcurrentHashMap<>();
    private final AtomicBoolean dirty = new AtomicBoolean();
    private final PresenceService presence;
    private final MatchService matches;
    private final FriendService friends;
    private final UserService userService;
    private final UserRepository users;
    private final UserRatingRepository ratings;
    private final RealtimeEvents events;
    private final Clock clock;

    public LobbyService(PresenceService presence, MatchService matches, FriendService friends,
            UserService userService, UserRepository users, UserRatingRepository ratings, RealtimeEvents events,
            Clock clock) {
        this.presence = presence;
        this.matches = matches;
        this.friends = friends;
        this.userService = userService;
        this.users = users;
        this.ratings = ratings;
        this.events = events;
        this.clock = clock;
    }

    /** Bật / cập nhật "Cho phép mời đấu". Đồng thời bật trạng thái Sẵn sàng cho bạn bè thấy. */
    public LobbyEntryDto join(UUID me, LobbyRequest req) {
        Set<String> games = new LinkedHashSet<>();
        for (String g : req.games()) {
            if (!MatchConfigFactory.MODES.containsKey(g)) {
                throw ApiException.badRequest("INVALID_GAME", "Game phải là rubik, sudoku, puzzle hoặc caro");
            }
            games.add(g);
        }
        Set<Integer> caps = new LinkedHashSet<>();
        for (Integer c : req.capacities() == null || req.capacities().isEmpty() ? List.of(2) : req.capacities()) {
            if (c == null || (c != 2 && c != 4)) {
                throw ApiException.badRequest("INVALID_CAPACITY", "Chỉ nhận đấu 2 hoặc 4 người");
            }
            caps.add(c);
        }
        String region = req.region() == null || req.region().isBlank() || Regions.ANY.equals(req.region())
                ? null : req.region();
        if (region != null && !Regions.valid(region)) {
            throw ApiException.badRequest("INVALID_REGION", "Vùng không hợp lệ");
        }
        Entry e = new Entry(me, List.copyOf(games), List.copyOf(caps), region, req.showStats(),
                Instant.now(clock).plus(TTL));
        entries.put(me, e);
        presence.setReady(me, true);
        watchers.put(me, Instant.now(clock));
        dirty.set(true);
        return dto(e);
    }

    public void leave(UUID me) {
        if (entries.remove(me) != null) {
            presence.setReady(me, false);
            dirty.set(true);
        }
    }

    public LobbyEntryDto mine(UUID me) {
        Entry e = live(me);
        return e == null ? null : dto(e);
    }

    /** Người này có đang cho phép mời đấu game này không (dùng cho lời mời người không phải bạn bè). */
    public boolean accepts(UUID user, String game, int capacity) {
        Entry e = live(user);
        return e != null && e.games().contains(game) && e.capacities().contains(capacity);
    }

    /**
     * Danh sách người đang cho phép mời đấu. Loại bản thân, người đã chặn/bị chặn và người offline.
     * Lọc theo game, vùng (mã vùng thô), số người và "chỉ người đang rảnh".
     */
    public List<LobbyPlayerDto> list(UUID me, String game, String region, Integer capacity, boolean readyOnly) {
        watchers.put(me, Instant.now(clock));
        List<Entry> hits = new ArrayList<>();
        for (Entry e : entries.values()) {
            if (e.user().equals(me) || live(e.user()) == null) {
                continue;
            }
            if (game != null && !game.isBlank() && !e.games().contains(game)) {
                continue;
            }
            if (capacity != null && !e.capacities().contains(capacity)) {
                continue;
            }
            if (region != null && !region.isBlank() && !Regions.ANY.equals(region) && !region.equals(e.region())) {
                continue;
            }
            if (readyOnly && matches.busy(e.user())) {
                continue;
            }
            if (userService.blockedEitherWay(me, e.user())) {
                continue;
            }
            hits.add(e);
        }
        Map<UUID, User> byId = new HashMap<>();
        users.findAllById(hits.stream().map(Entry::user).toList()).forEach(u -> byId.put(u.getId(), u));
        List<LobbyPlayerDto> out = new ArrayList<>();
        for (Entry e : hits) {
            User u = byId.get(e.user());
            if (u == null) {
                continue;
            }
            boolean busy = matches.busy(e.user());
            List<StatsDto> stats = new ArrayList<>();
            if (e.showStats()) {
                for (String g : e.games()) {
                    ratings.find(e.user(), g).ifPresent(r -> stats.add(
                            new StatsDto(g, r.getRating(), r.getPlayed(), r.getWins())));
                }
            }
            out.add(new LobbyPlayerDto(UserSummaryDto.of(u), e.games(), e.capacities(), region(e.region()),
                    busy ? "IN_MATCH" : "READY", stats, friends.areFriends(me, e.user())));
        }
        out.sort(Comparator.comparing((LobbyPlayerDto p) -> !"READY".equals(p.status()))
                .thenComparing(p -> !p.friend())
                .thenComparing(p -> p.user().displayName(), String.CASE_INSENSITIVE_ORDER));
        return out.size() > PAGE ? out.subList(0, PAGE) : out;
    }

    /** Mỗi 2 giây: bỏ người hết hạn / offline; báo người đang xem nếu danh sách thay đổi. */
    @Scheduled(fixedDelayString = "PT2S", initialDelayString = "PT2S")
    public void sweep() {
        Instant now = Instant.now(clock);
        for (Entry e : List.copyOf(entries.values())) {
            if (live(e.user()) == null && entries.remove(e.user(), e)) {
                dirty.set(true);
            }
        }
        watchers.entrySet().removeIf(w -> w.getValue().plus(WATCH).isBefore(now) || !presence.isConnected(w.getKey()));
        if (dirty.getAndSet(false)) {
            for (UUID w : watchers.keySet()) {
                events.toUser(w, "lobby.updated", Map.of("count", entries.size()));
            }
        }
    }

    /** Có trạng thái đang hiệu lực (chưa hết hạn, người dùng còn online). */
    private Entry live(UUID user) {
        Entry e = entries.get(user);
        if (e == null || e.until().isBefore(Instant.now(clock))
                || presence.status(user) == PresenceService.Status.OFFLINE) {
            return null;
        }
        return e;
    }

    private static RegionDto region(String code) {
        if (code == null) {
            return null;
        }
        return Regions.ALL.stream().filter(r -> r.code().equals(code)).findFirst()
                .map(r -> new RegionDto(r.code(), r.name())).orElse(null);
    }

    private static LobbyEntryDto dto(Entry e) {
        return new LobbyEntryDto(e.games(), e.capacities(), region(e.region()), e.showStats(), e.until());
    }
}
