package com.gamehub.server.chat;

import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.chat.ChatDtos.ConversationDto;
import com.gamehub.server.chat.ChatDtos.MessageDto;
import com.gamehub.server.chat.ChatDtos.ReportDto;
import com.gamehub.server.chat.ChatDtos.ReportRequest;
import com.gamehub.server.chat.ChatDtos.SendMessageRequest;
import com.gamehub.server.common.CurrentUser;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Chat & báo cáo", description = "Nhắn tin 1–1, báo cáo vi phạm")
@SecurityRequirement(name = "bearer")
public class ChatController {

    private final ChatService service;

    public ChatController(ChatService service) {
        this.service = service;
    }

    @GetMapping("/chat/conversations")
    @Operation(summary = "Danh sách cuộc trò chuyện, kèm số tin chưa đọc")
    public List<ConversationDto> conversations(@AuthenticationPrincipal Jwt jwt) {
        return service.conversations(CurrentUser.id(jwt));
    }

    @GetMapping("/chat/conversations/{userId}/messages")
    @Operation(summary = "Tin nhắn với một người (afterId để lấy tin mới); đánh dấu đã đọc")
    public List<MessageDto> messages(@AuthenticationPrincipal Jwt jwt, @PathVariable("userId") UUID userId,
            @RequestParam(name = "afterId", required = false) Long afterId) {
        return service.messages(CurrentUser.id(jwt), userId, afterId);
    }

    @PostMapping("/chat/conversations/{userId}/messages")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Gửi tin nhắn (idempotent theo clientId). 403 BLOCKED nếu có quan hệ chặn")
    public MessageDto send(@AuthenticationPrincipal Jwt jwt, @PathVariable("userId") UUID userId,
            @Valid @RequestBody SendMessageRequest body) {
        return service.send(CurrentUser.id(jwt), userId, body);
    }

    @PostMapping("/reports")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Báo cáo người chơi hoặc tin nhắn vi phạm")
    public ReportDto report(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody ReportRequest body) {
        return service.report(CurrentUser.id(jwt), body);
    }
}
