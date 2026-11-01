package com.gamehub.server.chat;

import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChatRepository extends JpaRepository<ChatMessage, Long> {

    Optional<ChatMessage> findBySenderIdAndClientId(UUID senderId, String clientId);

    /** Tin nhắn giữa hai người có id > afterId, cũ trước. */
    @Query("""
            select m from ChatMessage m
            where ((m.senderId = :a and m.recipientId = :b) or (m.senderId = :b and m.recipientId = :a))
              and m.id > :afterId
            order by m.id asc
            """)
    List<ChatMessage> after(@Param("a") UUID a, @Param("b") UUID b, @Param("afterId") long afterId, Pageable page);

    /** Tin nhắn mới nhất giữa hai người, mới trước (đảo lại khi trả về). */
    @Query("""
            select m from ChatMessage m
            where (m.senderId = :a and m.recipientId = :b) or (m.senderId = :b and m.recipientId = :a)
            order by m.id desc
            """)
    List<ChatMessage> latest(@Param("a") UUID a, @Param("b") UUID b, Pageable page);

    /** Mỗi cuộc trò chuyện: id người kia và id tin nhắn cuối. */
    interface ConversationRow {
        UUID getPartner();

        Long getLastId();
    }

    /**
     * Mỗi cuộc trò chuyện của {@code me} (tối đa {@code limit}), tin cuối mới nhất trước. Tách hai truy vấn
     * nhóm theo cột thường rồi gộp: PostgreSQL không chấp nhận {@code group by case when ... = ?} vì hai
     * tham số bind không được coi là cùng một biểu thức (H2 chấp nhận nên test cũ không phát hiện).
     */
    default List<ConversationRow> conversations(UUID me, int limit) {
        Map<UUID, Long> lastByPartner = new HashMap<>();
        for (ConversationRow r : sentTo(me)) lastByPartner.merge(r.getPartner(), r.getLastId(), Math::max);
        for (ConversationRow r : receivedFrom(me)) lastByPartner.merge(r.getPartner(), r.getLastId(), Math::max);
        return lastByPartner.entrySet().stream()
                .sorted(Map.Entry.<UUID, Long>comparingByValue().reversed())
                .limit(limit)
                .map(e -> (ConversationRow) new SimpleConversationRow(e.getKey(), e.getValue()))
                .toList();
    }

    record SimpleConversationRow(UUID partner, Long lastId) implements ConversationRow {
        @Override
        public UUID getPartner() {
            return partner;
        }

        @Override
        public Long getLastId() {
            return lastId;
        }
    }

    @Query("""
            select m.recipientId as partner, max(m.id) as lastId from ChatMessage m
            where m.senderId = :me group by m.recipientId
            """)
    List<ConversationRow> sentTo(@Param("me") UUID me);

    @Query("""
            select m.senderId as partner, max(m.id) as lastId from ChatMessage m
            where m.recipientId = :me group by m.senderId
            """)
    List<ConversationRow> receivedFrom(@Param("me") UUID me);

    interface UnreadRow {
        UUID getSender();

        Long getCount();
    }

    @Query("""
            select m.senderId as sender, count(m) as count from ChatMessage m
            where m.recipientId = :me and m.readAt is null
            group by m.senderId
            """)
    List<UnreadRow> unread(@Param("me") UUID me);

    @Modifying
    @Query("""
            update ChatMessage m set m.readAt = :now
            where m.recipientId = :me and m.senderId = :other and m.readAt is null
            """)
    int markRead(@Param("me") UUID me, @Param("other") UUID other, @Param("now") Instant now);
}
