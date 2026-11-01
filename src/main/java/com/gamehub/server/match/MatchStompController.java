package com.gamehub.server.match;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.match.MatchDtos.ChatRequest;
import com.gamehub.server.match.MatchDtos.FinishRequest;
import com.gamehub.server.match.MatchDtos.PuzzleDrop;
import com.gamehub.server.realtime.UserPrincipal;

/**
 * Thao tác phòng đấu qua STOMP (đích {@code /app/match.*}). Kết quả được phát lại qua
 * {@code /topic/match.<id>}; lỗi được gửi riêng tới {@code /user/queue/errors}.
 */
@Controller
public class MatchStompController {

    private static final Logger log = LoggerFactory.getLogger(MatchStompController.class);

    public record ReadyFrame(@NotNull UUID matchId, Boolean ready) {
    }

    public record ProgressFrame(@NotNull UUID matchId, int progress) {
    }

    public record MoveFrame(@NotNull UUID matchId, int cell, int index) {
    }

    public record FinishFrame(@NotNull UUID matchId, String solution, String grid, List<PuzzleDrop> drops,
            Integer wrongDrops, Boolean assisted) {
    }

    public record ChatFrame(@NotNull UUID matchId, String text, String clientId) {
    }

    public record StompError(String code, String message, String action) {
    }

    private final MatchService service;
    private final MatchChatService chat;

    public MatchStompController(MatchService service, MatchChatService chat) {
        this.service = service;
        this.chat = chat;
    }

    @MessageMapping("match.ready")
    public void ready(Principal p, @Payload ReadyFrame f) {
        service.ready(UserPrincipal.id(p), require(f.matchId()), f.ready() == null || f.ready());
    }

    @MessageMapping("match.progress")
    public void progress(Principal p, @Payload ProgressFrame f) {
        service.progress(UserPrincipal.id(p), require(f.matchId()), f.progress());
    }

    @MessageMapping("match.move")
    public void move(Principal p, @Payload MoveFrame f) {
        service.caroMove(UserPrincipal.id(p), require(f.matchId()), f.cell(), f.index());
    }

    @MessageMapping("match.finish")
    public void finish(Principal p, @Payload FinishFrame f) {
        if (f.solution() != null && f.solution().length() > 8000
                || f.drops() != null && f.drops().size() > 64) {
            throw ApiException.badRequest("VALIDATION", "Bài nộp quá lớn");
        }
        service.finish(UserPrincipal.id(p), require(f.matchId()),
                new FinishRequest(f.solution(), f.grid(), f.drops(), f.wrongDrops(), f.assisted()));
    }

    @MessageMapping("match.assist")
    public void assist(Principal p, @Payload ReadyFrame f) {
        service.assist(UserPrincipal.id(p), require(f.matchId()));
    }

    @MessageMapping("match.chat")
    public void chat(Principal p, @Payload ChatFrame f) {
        if (f.clientId() == null || !f.clientId().matches("^[A-Za-z0-9-]{1,64}$")) {
            throw ApiException.badRequest("VALIDATION", "clientId không hợp lệ");
        }
        chat.send(UserPrincipal.id(p), require(f.matchId()), new ChatRequest(f.text(), f.clientId()));
    }

    @MessageExceptionHandler(ApiException.class)
    @SendToUser(destinations = "/queue/errors", broadcast = false)
    public StompError apiError(ApiException e) {
        return new StompError(e.code(), e.getMessage(), null);
    }

    @MessageExceptionHandler(Exception.class)
    @SendToUser(destinations = "/queue/errors", broadcast = false)
    public StompError otherError(Exception e) {
        log.warn("Lỗi xử lý khung STOMP: {}", e.toString());
        return new StompError("BAD_FRAME", "Không xử lý được yêu cầu", null);
    }

    private static UUID require(UUID id) {
        if (id == null) {
            throw ApiException.badRequest("VALIDATION", "Thiếu matchId");
        }
        return id;
    }
}
