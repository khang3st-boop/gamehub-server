package com.gamehub.server.chat;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamehub.server.chat.ChatDtos.ConversationDto;
import com.gamehub.server.chat.ChatDtos.MessageDto;
import com.gamehub.server.chat.ChatDtos.ReportDto;
import com.gamehub.server.chat.ChatDtos.ReportRequest;
import com.gamehub.server.chat.ChatDtos.SendMessageRequest;
import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.common.Text;
import com.gamehub.server.friends.FriendshipRepository;
import com.gamehub.server.moderation.ContentFilter;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.BlockRepository;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

/**
 * Chat 1–1 giữa hai người ĐÃ KẾT BẠN (cả hai cùng đồng ý): không nhận tin nhắn từ người lạ.
 * Chặn theo bất kỳ chiều nào sẽ ngăn gửi tin. Tin mới được đẩy realtime ({@code chat.message});
 * client vẫn có thể thăm dò bằng afterId khi WebSocket chưa nối lại.
 */
@Service
public class ChatService {

    static final int PAGE = 100;

    private final ChatRepository messages;
    private final ReportRepository reports;
    private final UserRepository users;
    private final UserService userService;
    private final BlockRepository blocks;
    private final RateLimiter limiter;
    private final FriendshipRepository friendships;
    private final RealtimeEvents events;
    private final Clock clock;

    public ChatService(ChatRepository messages, ReportRepository reports, UserRepository users,
            UserService userService, BlockRepository blocks, RateLimiter limiter, FriendshipRepository friendships,
            RealtimeEvents events, Clock clock) {
        this.friendships = friendships;
        this.events = events;
        this.messages = messages;
        this.reports = reports;
        this.users = users;
        this.userService = userService;
        this.blocks = blocks;
        this.limiter = limiter;
        this.clock = clock;
    }

    @Transactional(readOnly = true)
    public List<ConversationDto> conversations(UUID me) {
        var rows = messages.conversations(me, 100);
        if (rows.isEmpty()) {
            return List.of();
        }
        Map<Long, ChatMessage> last = messages.findAllById(rows.stream().map(ChatRepository.ConversationRow::getLastId)
                .toList()).stream().collect(Collectors.toMap(ChatMessage::getId, Function.identity()));
        Map<UUID, User> byId = users.findAllById(rows.stream().map(ChatRepository.ConversationRow::getPartner)
                .toList()).stream().collect(Collectors.toMap(User::getId, Function.identity()));
        Map<UUID, Long> unread = messages.unread(me).stream()
                .collect(Collectors.toMap(ChatRepository.UnreadRow::getSender, ChatRepository.UnreadRow::getCount));
        Set<UUID> blockedByMe = new HashSet<>(blocks.blockedBy(me));
        List<ConversationDto> out = new ArrayList<>();
        for (var row : rows) {
            User u = byId.get(row.getPartner());
            ChatMessage m = last.get(row.getLastId());
            if (u == null || m == null) {
                continue;
            }
            out.add(new ConversationDto(u.getId(), u.getDisplayName(), u.getAvatarColor(), m.getText(),
                    m.getSentAt(), unread.getOrDefault(u.getId(), 0L).intValue(), blockedByMe.contains(u.getId())));
        }
        return out;
    }

    /** Tin nhắn với {@code other}: không có afterId → 100 tin mới nhất; có → tin sau afterId. Đánh dấu đã đọc. */
    @Transactional
    public List<MessageDto> messages(UUID me, UUID other, Long afterId) {
        userService.require(other);
        List<ChatMessage> list;
        if (afterId == null) {
            list = new ArrayList<>(messages.latest(me, other, PageRequest.of(0, PAGE)));
            Collections.reverse(list);
        } else {
            list = messages.after(me, other, afterId, PageRequest.of(0, PAGE));
        }
        messages.markRead(me, other, Instant.now(clock));
        return list.stream().map(MessageDto::of).toList();
    }

    @Transactional
    public MessageDto send(UUID me, UUID other, SendMessageRequest req) {
        if (me.equals(other)) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể nhắn tin cho chính mình");
        }
        var existing = messages.findBySenderIdAndClientId(me, req.clientId());
        if (existing.isPresent()) {
            ChatMessage m = existing.get();
            if (!m.getRecipientId().equals(other)) {
                throw ApiException.conflict("CLIENT_ID_REUSED", "clientId đã được dùng cho tin nhắn khác");
            }
            return MessageDto.of(m);
        }
        userService.require(other);
        if (userService.blockedEitherWay(me, other)) {
            throw ApiException.forbidden("BLOCKED", "Không thể nhắn tin: một trong hai người đã chặn người kia");
        }
        if (!friendships.areFriends(me, other)) {
            throw ApiException.forbidden("FRIENDS_ONLY", "Chỉ nhắn tin được với bạn bè (cả hai đã đồng ý kết bạn)");
        }
        String text = Text.clean(req.text());
        if (text == null) {
            throw ApiException.badRequest("VALIDATION", "Tin nhắn không được trống");
        }
        limiter.hit("chat:" + me, 30, Duration.ofMinutes(1));
        String masked = ContentFilter.mask(text);
        if (masked.length() > 500) {
            masked = masked.substring(0, 500);
        }
        try {
            MessageDto dto = MessageDto.of(messages.saveAndFlush(
                    new ChatMessage(me, other, masked, req.clientId(), Instant.now(clock))));
            events.toUser(other, "chat.message", dto);
            events.toUser(me, "chat.message", dto);
            return dto;
        } catch (DataIntegrityViolationException race) {
            return messages.findBySenderIdAndClientId(me, req.clientId()).map(MessageDto::of)
                    .orElseThrow(() -> race);
        }
    }

    @Transactional
    public ReportDto report(UUID me, ReportRequest req) {
        if (me.equals(req.userId())) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể tự báo cáo chính mình");
        }
        userService.require(req.userId());
        if (req.messageId() != null) {
            ChatMessage m = messages.findById(req.messageId())
                    .orElseThrow(() -> ApiException.notFound("Không tìm thấy tin nhắn"));
            // Chỉ báo cáo được tin nhắn mà người bị báo cáo đã gửi cho chính mình.
            if (!m.getSenderId().equals(req.userId()) || !m.getRecipientId().equals(me)) {
                throw ApiException.badRequest("INVALID_TARGET", "Tin nhắn không thuộc cuộc trò chuyện này");
            }
        }
        String reason = Text.clean(req.reason());
        if (reason == null) {
            throw ApiException.badRequest("VALIDATION", "Cần nêu lý do");
        }
        limiter.hit("report:" + me, 20, Duration.ofHours(1));
        Report r = reports.save(new Report(me, req.userId(), req.messageId(), reason, Instant.now(clock)));
        return new ReportDto(r.getId(), "NEW");
    }
}
