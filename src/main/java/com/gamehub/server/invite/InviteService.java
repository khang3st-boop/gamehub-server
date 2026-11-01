package com.gamehub.server.invite;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.friends.FriendService;
import com.gamehub.server.match.MatchConfigFactory;
import com.gamehub.server.match.MatchDtos.MatchDto;
import com.gamehub.server.match.MatchService;
import com.gamehub.server.presence.PresenceService;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserSummaryDto;
import com.gamehub.server.user.UserService;

/**
 * Lời mời đấu trực tiếp giữa hai người bạn đang online. Lời mời chỉ sống {@code inviteTtl}
 * (mặc định 60 giây) trong bộ nhớ: không cần lưu CSDL vì quá hạn là vô nghĩa. Chấp nhận → tạo phòng.
 */
@Service
public class InviteService {

    public enum Status { PENDING, ACCEPTED, DECLINED, CANCELLED, EXPIRED }

    public record InviteRequest(@NotNull UUID userId, @NotBlank String game, @NotBlank String mode) {
    }

    public record InviteDto(UUID id, UserSummaryDto from, UserSummaryDto to, String game, String mode,
            Status status, Instant createdAt, Instant expiresAt, UUID matchId) {
    }

    record Invite(UUID id, UUID from, UUID to, String game, String mode, Instant createdAt, Instant expiresAt) {
    }

    static final int MAX_OUTGOING = 3;

    private final Map<UUID, Invite> invites = new ConcurrentHashMap<>();
    private final FriendService friends;
    private final UserService users;
    private final PresenceService presence;
    private final MatchService matches;
    private final RealtimeEvents events;
    private final RateLimiter limiter;
    private final AppProperties props;
    private final Clock clock;

    public InviteService(FriendService friends, UserService users, PresenceService presence, MatchService matches,
            RealtimeEvents events, RateLimiter limiter, AppProperties props, Clock clock) {
        this.friends = friends;
        this.users = users;
        this.presence = presence;
        this.matches = matches;
        this.events = events;
        this.limiter = limiter;
        this.props = props;
        this.clock = clock;
    }

    public List<InviteDto> list(UUID me) {
        List<InviteDto> out = new ArrayList<>();
        invites.values().stream()
                .filter(i -> i.from().equals(me) || i.to().equals(me))
                .sorted(Comparator.comparing(Invite::createdAt).reversed())
                .forEach(i -> out.add(dto(i, Status.PENDING, null)));
        return out;
    }

    public InviteDto send(UUID me, InviteRequest req) {
        UUID to = req.userId();
        MatchConfigFactory.validate(req.game(), req.mode());
        if (me.equals(to)) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể tự mời chính mình");
        }
        users.require(to);
        if (users.blockedEitherWay(me, to) || !friends.areFriends(me, to)) {
            throw ApiException.forbidden("FRIENDS_ONLY", "Chỉ mời được bạn bè");
        }
        if (!presence.isConnected(to)) {
            throw ApiException.conflict("TARGET_OFFLINE", "Người này đang offline");
        }
        if (matches.busy(me) || matches.busy(to)) {
            throw ApiException.conflict("PLAYER_BUSY", "Một người chơi đang ở trong trận khác");
        }
        limiter.hit("invite:" + me, 20, Duration.ofMinutes(10));
        synchronized (invites) {
            sweep();
            boolean dup = invites.values().stream().anyMatch(i -> i.from().equals(me) && i.to().equals(to));
            if (dup) {
                throw ApiException.conflict("INVITE_EXISTS", "Bạn đã mời người này, hãy chờ trả lời");
            }
            long outgoing = invites.values().stream().filter(i -> i.from().equals(me)).count();
            if (outgoing >= MAX_OUTGOING) {
                throw ApiException.conflict("TOO_MANY_INVITES", "Bạn đang có quá nhiều lời mời chờ trả lời");
            }
            Instant now = Instant.now(clock);
            Invite i = new Invite(UUID.randomUUID(), me, to, req.game(), req.mode(), now,
                    now.plus(props.online().inviteTtl()));
            invites.put(i.id(), i);
            InviteDto dto = dto(i, Status.PENDING, null);
            events.toUser(to, "invite.received", dto);
            return dto;
        }
    }

    /** Chấp nhận: tạo phòng đấu cho hai người. Lời mời khác của hai người bị huỷ. */
    public InviteDto accept(UUID me, UUID id) {
        Invite i;
        synchronized (invites) {
            i = pending(id);
            if (!i.to().equals(me)) {
                throw ApiException.forbidden("NOT_RECIPIENT", "Lời mời không dành cho bạn");
            }
            invites.remove(id);
        }
        MatchDto match;
        try {
            match = matches.create(i.game(), i.mode(), i.from(), i.to(), MatchService.SOURCE_INVITE);
        } catch (ApiException e) {
            events.toUser(i.from(), "invite.cancelled", dto(i, Status.CANCELLED, null));
            throw e;
        }
        InviteDto done = dto(i, Status.ACCEPTED, match.id());
        events.toUser(i.from(), "invite.accepted", done);
        cancelOthers(i.from(), i.to());
        return done;
    }

    public InviteDto decline(UUID me, UUID id) {
        Invite i;
        synchronized (invites) {
            i = pending(id);
            if (!i.to().equals(me)) {
                throw ApiException.forbidden("NOT_RECIPIENT", "Lời mời không dành cho bạn");
            }
            invites.remove(id);
        }
        InviteDto d = dto(i, Status.DECLINED, null);
        events.toUser(i.from(), "invite.declined", d);
        return d;
    }

    public InviteDto cancel(UUID me, UUID id) {
        Invite i;
        synchronized (invites) {
            i = pending(id);
            if (!i.from().equals(me)) {
                throw ApiException.forbidden("NOT_SENDER", "Chỉ người mời mới huỷ được");
            }
            invites.remove(id);
        }
        InviteDto d = dto(i, Status.CANCELLED, null);
        events.toUser(i.to(), "invite.cancelled", d);
        return d;
    }

    @Scheduled(fixedDelayString = "PT1S", initialDelayString = "PT1S")
    public void expire() {
        synchronized (invites) {
            sweep();
        }
    }

    private void sweep() {
        Instant now = Instant.now(clock);
        for (Invite i : List.copyOf(invites.values())) {
            // Rớt mạng quá 15 giây mới tính là đã rời (cho phép nối lại nhanh).
            boolean gone = presence.disconnectedSince(i.from()).map(t -> t.plusSeconds(15).isBefore(now)).orElse(false);
            if (now.isAfter(i.expiresAt()) || gone) {
                invites.remove(i.id());
                InviteDto d = dto(i, gone ? Status.CANCELLED : Status.EXPIRED, null);
                String type = gone ? "invite.cancelled" : "invite.expired";
                events.toUser(i.from(), type, d);
                events.toUser(i.to(), type, d);
            }
        }
    }

    private void cancelOthers(UUID a, UUID b) {
        synchronized (invites) {
            for (Invite i : List.copyOf(invites.values())) {
                if (i.from().equals(a) || i.from().equals(b) || i.to().equals(a) || i.to().equals(b)) {
                    invites.remove(i.id());
                    InviteDto d = dto(i, Status.CANCELLED, null);
                    events.toUser(i.from(), "invite.cancelled", d);
                    events.toUser(i.to(), "invite.cancelled", d);
                }
            }
        }
    }

    private Invite pending(UUID id) {
        Invite i = invites.get(id);
        if (i == null || Instant.now(clock).isAfter(i.expiresAt())) {
            throw ApiException.conflict("INVITE_GONE", "Lời mời đã hết hạn hoặc không còn");
        }
        return i;
    }

    private InviteDto dto(Invite i, Status status, UUID matchId) {
        return new InviteDto(i.id(), summary(i.from()), summary(i.to()), i.game(), i.mode(), status, i.createdAt(),
                i.expiresAt(), matchId);
    }

    private UserSummaryDto summary(UUID id) {
        User u = users.require(id);
        return UserSummaryDto.of(u);
    }
}
