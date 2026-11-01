package com.gamehub.server.user;

import java.time.Clock;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.friends.FriendshipRepository;
import com.gamehub.server.moderation.ContentFilter;
import com.gamehub.server.user.UserDtos.UpdateProfileRequest;
import com.gamehub.server.user.UserDtos.UserSummaryDto;

@Service
public class UserService {

    private final UserRepository users;
    private final BlockRepository blocks;
    private final FriendshipRepository friendships;
    private final Clock clock;

    public UserService(UserRepository users, BlockRepository blocks, FriendshipRepository friendships, Clock clock) {
        this.users = users;
        this.blocks = blocks;
        this.friendships = friendships;
        this.clock = clock;
    }

    /** Người dùng của token hiện tại; 401 nếu tài khoản không còn tồn tại. */
    @Transactional(readOnly = true)
    public User me(UUID id) {
        return users.findById(id).orElseThrow(
                () -> ApiException.unauthorized("USER_NOT_FOUND", "Tài khoản không còn tồn tại"));
    }

    @Transactional(readOnly = true)
    public User require(UUID id) {
        return users.findById(id).orElseThrow(() -> ApiException.notFound("Không tìm thấy người chơi"));
    }

    @Transactional
    public User update(UUID id, UpdateProfileRequest req) {
        User u = me(id);
        if (req.displayName() != null) {
            String name = req.displayName().trim();
            if (name.length() < 2) {
                throw ApiException.badRequest("VALIDATION", "Tên hiển thị cần ít nhất 2 ký tự");
            }
            requireAllowedName(name);
            u.setDisplayName(name);
        }
        if (req.avatarColor() != null) {
            u.setAvatarColor(req.avatarColor());
        }
        return u;
    }

    @Transactional(readOnly = true)
    public List<UserSummaryDto> search(UUID me, String q) {
        String term = q == null ? "" : q.trim().toLowerCase();
        if (term.length() < 2 || term.length() > 30) {
            throw ApiException.badRequest("VALIDATION", "Từ khoá tìm kiếm cần 2–30 ký tự");
        }
        String escaped = term.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_");
        List<UUID> hidden = blocks.relatedTo(me);
        return users.search(me, escaped, PageRequest.of(0, 20)).stream()
                .filter(u -> !hidden.contains(u.getId()))
                .map(UserSummaryDto::of)
                .toList();
    }

    @Transactional
    public void block(UUID me, UUID other) {
        if (me.equals(other)) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể tự chặn chính mình");
        }
        require(other);
        if (!blocks.existsByBlockerIdAndBlockedId(me, other)) {
            blocks.save(new Block(me, other, Instant.now(clock)));
        }
        // Chặn cũng huỷ kết bạn / lời mời kết bạn giữa hai người.
        friendships.deleteBetween(me, other);
    }

    @Transactional
    public void unblock(UUID me, UUID other) {
        blocks.deletePair(me, other);
    }

    /** Không cho đặt tên giả danh hệ thống / quản trị viên (vd "Admin", "Hệ thống"). */
    public static void requireAllowedName(String name) {
        if (ContentFilter.isReservedName(name)) {
            throw ApiException.badRequest("NAME_RESERVED", "Tên này dành cho hệ thống, hãy chọn tên khác");
        }
        if (!ContentFilter.mask(name).equals(name)) {
            throw ApiException.badRequest("NAME_INAPPROPRIATE", "Tên chứa từ ngữ không phù hợp");
        }
    }

    /** Có quan hệ chặn theo bất kỳ chiều nào? */
    @Transactional(readOnly = true)
    public boolean blockedEitherWay(UUID a, UUID b) {
        return blocks.existsByBlockerIdAndBlockedId(a, b) || blocks.existsByBlockerIdAndBlockedId(b, a);
    }
}
