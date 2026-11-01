package com.gamehub.server.friends;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.friends.FriendDtos.FriendDto;
import com.gamehub.server.friends.FriendDtos.FriendRequestDto;
import com.gamehub.server.friends.FriendDtos.FriendRequestResult;
import com.gamehub.server.friends.FriendDtos.FriendRequestsDto;
import com.gamehub.server.presence.PresenceService;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserSummaryDto;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

/**
 * Kết bạn hai chiều: A gửi lời mời, B chấp nhận. Chỉ bạn bè mới thấy trạng thái online của
 * nhau, mời đấu trực tiếp và nhắn tin riêng. Chặn (theo bất kỳ chiều nào) sẽ huỷ quan hệ và
 * không cho gửi lời mời mới.
 */
@Service
public class FriendService {

    static final int MAX_FRIENDS = 200;

    private final FriendshipRepository friendships;
    private final UserRepository users;
    private final UserService userService;
    private final PresenceService presence;
    private final RealtimeEvents events;
    private final RateLimiter limiter;
    private final Clock clock;

    public FriendService(FriendshipRepository friendships, UserRepository users, UserService userService,
            PresenceService presence, RealtimeEvents events, RateLimiter limiter, Clock clock) {
        this.friendships = friendships;
        this.users = users;
        this.userService = userService;
        this.presence = presence;
        this.events = events;
        this.limiter = limiter;
        this.clock = clock;
    }

    @Transactional(readOnly = true)
    public boolean areFriends(UUID a, UUID b) {
        return friendships.areFriends(a, b);
    }

    @Transactional(readOnly = true)
    public List<FriendDto> friends(UUID me) {
        List<Friendship> list = friendships.involving(me, Friendship.ACCEPTED);
        Map<UUID, User> byId = load(list.stream().map(f -> f.other(me)).toList());
        List<FriendDto> out = new ArrayList<>();
        for (Friendship f : list) {
            User u = byId.get(f.other(me));
            if (u != null) {
                out.add(new FriendDto(UserSummaryDto.of(u), presence.status(u.getId()),
                        f.getRespondedAt() == null ? f.getCreatedAt() : f.getRespondedAt()));
            }
        }
        // Online trước, rồi theo tên.
        out.sort((x, y) -> {
            int c = Integer.compare(rank(x.status()), rank(y.status()));
            return c != 0 ? c : x.user().displayName().compareToIgnoreCase(y.user().displayName());
        });
        return out;
    }

    @Transactional(readOnly = true)
    public FriendRequestsDto requests(UUID me) {
        List<Friendship> list = friendships.involving(me, Friendship.PENDING);
        Map<UUID, User> byId = load(list.stream().map(f -> f.other(me)).toList());
        List<FriendRequestDto> in = new ArrayList<>();
        List<FriendRequestDto> out = new ArrayList<>();
        for (Friendship f : list) {
            User u = byId.get(f.other(me));
            if (u == null) {
                continue;
            }
            FriendRequestDto dto = new FriendRequestDto(UserSummaryDto.of(u), f.getCreatedAt());
            (f.getRequesterId().equals(me) ? out : in).add(dto);
        }
        return new FriendRequestsDto(in, out);
    }

    @Transactional
    public FriendRequestResult request(UUID me, UUID target) {
        if (me.equals(target)) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể kết bạn với chính mình");
        }
        User meUser = userService.me(me);
        userService.require(target);
        if (userService.blockedEitherWay(me, target)) {
            throw ApiException.forbidden("BLOCKED", "Không thể kết bạn: một trong hai người đã chặn người kia");
        }
        var existing = friendships.between(me, target);
        if (existing.isPresent()) {
            Friendship f = existing.get();
            if (f.isAccepted()) {
                throw ApiException.conflict("ALREADY_FRIENDS", "Hai bạn đã là bạn bè");
            }
            if (f.getRequesterId().equals(me)) {
                return new FriendRequestResult(Friendship.PENDING);
            }
            // Người kia đã mời mình trước: chấp nhận luôn.
            return accept(me, target);
        }
        if (friendships.friendIds(me).size() >= MAX_FRIENDS) {
            throw ApiException.unprocessable("FRIEND_LIMIT", "Đã đạt tối đa " + MAX_FRIENDS + " bạn");
        }
        limiter.hit("friend-req:" + me, 30, Duration.ofHours(1));
        try {
            friendships.saveAndFlush(new Friendship(me, target, Instant.now(clock)));
        } catch (DataIntegrityViolationException race) {
            return new FriendRequestResult(Friendship.PENDING);
        }
        events.toUser(target, "friend.request", new FriendRequestDto(UserSummaryDto.of(meUser), Instant.now(clock)));
        return new FriendRequestResult(Friendship.PENDING);
    }

    @Transactional
    public FriendRequestResult accept(UUID me, UUID requester) {
        Friendship f = friendships.between(me, requester)
                .filter(x -> !x.isAccepted() && x.getRequesterId().equals(requester))
                .orElseThrow(() -> ApiException.notFound("Không có lời mời kết bạn này"));
        if (userService.blockedEitherWay(me, requester)) {
            throw ApiException.forbidden("BLOCKED", "Không thể kết bạn: một trong hai người đã chặn người kia");
        }
        f.accept(Instant.now(clock));
        User meUser = userService.me(me);
        events.toUser(requester, "friend.accepted",
                new FriendDto(UserSummaryDto.of(meUser), presence.status(me), f.getRespondedAt()));
        return new FriendRequestResult(Friendship.ACCEPTED);
    }

    /** Từ chối lời mời đến, huỷ lời mời đã gửi hoặc huỷ kết bạn: đều xoá quan hệ. */
    @Transactional
    public void remove(UUID me, UUID other) {
        if (friendships.deleteBetween(me, other) > 0) {
            events.toUser(other, "friend.removed", Map.of("userId", me));
        }
    }

    private Map<UUID, User> load(List<UUID> ids) {
        return users.findAllById(ids).stream().collect(Collectors.toMap(User::getId, Function.identity()));
    }

    private static int rank(PresenceService.Status s) {
        return switch (s) {
            case READY -> 0;
            case ONLINE -> 1;
            case IN_MATCH -> 2;
            case OFFLINE -> 3;
        };
    }
}
