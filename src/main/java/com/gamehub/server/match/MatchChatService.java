package com.gamehub.server.match;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamehub.server.chat.ChatDtos.ReportDto;
import com.gamehub.server.chat.Report;
import com.gamehub.server.chat.ReportRepository;
import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.common.Text;
import com.gamehub.server.match.MatchDtos.ChatRequest;
import com.gamehub.server.match.MatchDtos.MatchMessageDto;
import com.gamehub.server.match.MatchDtos.MatchReportRequest;
import com.gamehub.server.moderation.ContentFilter;
import com.gamehub.server.realtime.RealtimeEvents;

/**
 * Chat trong phòng đấu: chỉ hai người chơi của phòng, tối đa 300 ký tự, 10 tin / 10 giây,
 * lọc từ ngữ thô tục, gửi lại cùng clientId không tạo tin trùng (để client tự gửi lại khi mất mạng).
 * Người gửi luôn là tài khoản trong token: không thể giả danh người khác.
 */
@Service
public class MatchChatService {

    static final int PAGE = 200;

    private final MatchRepository matches;
    private final MatchMessageRepository messages;
    private final ReportRepository reports;
    private final RateLimiter limiter;
    private final RealtimeEvents events;
    private final Clock clock;

    public MatchChatService(MatchRepository matches, MatchMessageRepository messages, ReportRepository reports,
            RateLimiter limiter, RealtimeEvents events, Clock clock) {
        this.matches = matches;
        this.messages = messages;
        this.reports = reports;
        this.limiter = limiter;
        this.events = events;
        this.clock = clock;
    }

    @Transactional
    public MatchMessageDto send(UUID me, UUID matchId, ChatRequest req) {
        Match m = participant(me, matchId);
        var existing = messages.findBySenderIdAndClientId(me, req.clientId());
        if (existing.isPresent()) {
            if (!existing.get().getMatchId().equals(matchId)) {
                throw ApiException.conflict("CLIENT_ID_REUSED", "clientId đã được dùng cho tin nhắn khác");
            }
            return MatchMessageDto.of(existing.get());
        }
        if (m.getFinishedAt() != null
                && m.getFinishedAt().plus(Duration.ofMinutes(10)).isBefore(Instant.now(clock))) {
            throw ApiException.conflict("MATCH_CLOSED", "Phòng đã đóng chat");
        }
        String text = Text.clean(req.text());
        if (text == null) {
            throw ApiException.badRequest("VALIDATION", "Tin nhắn không được trống");
        }
        if (text.length() > 300) {
            throw ApiException.badRequest("VALIDATION", "Tin nhắn trong trận tối đa 300 ký tự");
        }
        limiter.hit("matchchat:" + me, 10, Duration.ofSeconds(10));
        String masked = ContentFilter.mask(text);
        if (masked.length() > 300) {
            masked = masked.substring(0, 300);
        }
        MatchMessage saved;
        try {
            saved = messages.saveAndFlush(new MatchMessage(matchId, me, masked, req.clientId(), Instant.now(clock)));
        } catch (DataIntegrityViolationException race) {
            return messages.findBySenderIdAndClientId(me, req.clientId()).map(MatchMessageDto::of)
                    .orElseThrow(() -> race);
        }
        MatchMessageDto dto = MatchMessageDto.of(saved);
        events.toMatch(matchId, "match.chat", dto);
        return dto;
    }

    @Transactional(readOnly = true)
    public List<MatchMessageDto> history(UUID me, UUID matchId, long after) {
        participant(me, matchId);
        return messages.after(matchId, after, PageRequest.of(0, PAGE)).stream().map(MatchMessageDto::of).toList();
    }

    /** Báo cáo đối thủ (và tuỳ chọn một tin nhắn cụ thể của đối thủ trong phòng). */
    @Transactional
    public ReportDto report(UUID me, UUID matchId, MatchReportRequest req) {
        Match m = participant(me, matchId);
        UUID opponent = m.opponentOf(me);
        if (req.messageId() != null) {
            MatchMessage msg = messages.findById(req.messageId())
                    .orElseThrow(() -> ApiException.notFound("Không tìm thấy tin nhắn"));
            if (!msg.getMatchId().equals(matchId) || !msg.getSenderId().equals(opponent)) {
                throw ApiException.badRequest("INVALID_TARGET", "Chỉ báo cáo được tin nhắn của đối thủ trong phòng này");
            }
        }
        String reason = Text.clean(req.reason());
        if (reason == null) {
            throw ApiException.badRequest("VALIDATION", "Cần nêu lý do");
        }
        limiter.hit("report:" + me, 20, Duration.ofHours(1));
        Report r = reports.save(Report.forMatchMessage(me, opponent, req.messageId(), reason, Instant.now(clock)));
        return new ReportDto(r.getId(), "NEW");
    }

    private Match participant(UUID me, UUID matchId) {
        Match m = matches.findById(matchId).orElseThrow(() -> ApiException.notFound("Không tìm thấy trận đấu"));
        if (!m.isPlayer(me)) {
            throw ApiException.forbidden("NOT_PARTICIPANT", "Bạn không ở trong trận này");
        }
        return m;
    }
}
