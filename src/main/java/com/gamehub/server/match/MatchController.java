package com.gamehub.server.match;

import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.gamehub.server.chat.ChatDtos.ReportDto;
import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.match.MatchDtos.CaroMoveRequest;
import com.gamehub.server.match.MatchDtos.ChatRequest;
import com.gamehub.server.match.MatchDtos.FinishRequest;
import com.gamehub.server.match.MatchDtos.MatchDto;
import com.gamehub.server.match.MatchDtos.MatchMessageDto;
import com.gamehub.server.match.MatchDtos.MatchReportRequest;
import com.gamehub.server.match.MatchDtos.ProgressRequest;

/**
 * Phòng đấu realtime. Các thao tác cũng có bản STOMP ({@code /app/match.*}); REST dùng khi
 * WebSocket chưa nối lại được và để khôi phục trạng thái sau khi mở lại app.
 */
@RestController
@RequestMapping("/api/v1/matches")
@Tag(name = "Trận đấu online", description = "Phòng đấu 2/4 người (1v1, phòng có mã, giải Caro 4 người): sẵn sàng, đếm ngược, tiến độ, nộp kết quả, Caro theo lượt, chat trong phòng")
@SecurityRequirement(name = "bearer")
public class MatchController {

    private final MatchService service;
    private final MatchChatService chat;

    public MatchController(MatchService service, MatchChatService chat) {
        this.service = service;
        this.chat = chat;
    }

    @GetMapping("/active")
    @Operation(summary = "Phòng đang diễn ra của tôi (204 nếu không có) — dùng để vào lại sau khi mất mạng")
    public ResponseEntity<MatchDto> active(@AuthenticationPrincipal Jwt jwt) {
        MatchDto m = service.active(CurrentUser.id(jwt));
        return m == null ? ResponseEntity.noContent().build() : ResponseEntity.ok(m);
    }

    @GetMapping("/me")
    @Operation(summary = "Lịch sử trận online của tôi, mới nhất trước")
    public List<MatchDto> history(@AuthenticationPrincipal Jwt jwt,
            @RequestParam(name = "limit", defaultValue = "30") int limit) {
        return service.history(CurrentUser.id(jwt), limit);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Trạng thái đầy đủ của phòng (chỉ người chơi trong phòng)")
    public MatchDto get(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.get(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/ready")
    @Operation(summary = "Bấm Sẵn sàng (ready=false để bỏ). Hai người sẵn sàng → đếm ngược do server hẹn giờ")
    public MatchDto ready(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @RequestParam(name = "ready", defaultValue = "true") boolean ready) {
        return service.ready(CurrentUser.id(jwt), id, ready);
    }

    @PostMapping("/{id}/progress")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @Operation(summary = "Báo tiến độ 0–100 để đối thủ thấy (chỉ hiển thị, không quyết định thắng thua)")
    public void progress(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody ProgressRequest body) {
        service.progress(CurrentUser.id(jwt), id, body.progress());
    }

    @PostMapping("/{id}/assist")
    @Operation(summary = "Báo đã dùng gợi ý / tự giải: trận không còn tính xếp hạng")
    public MatchDto assist(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.assist(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/finish")
    @Operation(summary = "Nộp lời giải (Rubik/Sudoku/Xếp hình). Server kiểm tra; sai → 422 RESULT_REJECTED")
    public MatchDto finish(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody FinishRequest body) {
        return service.finish(CurrentUser.id(jwt), id, body);
    }

    @PostMapping("/{id}/caro/move")
    @Operation(summary = "Đánh một nước Caro. Server kiểm tra lượt, ô trống và xử thắng/hoà")
    public MatchDto caroMove(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody CaroMoveRequest body) {
        return service.caroMove(CurrentUser.id(jwt), id, body.cell(), body.index());
    }

    @PostMapping("/{id}/forfeit")
    @Operation(summary = "Rời phòng: trước khi bắt đầu thì huỷ phòng; đang chơi thì xử thua")
    public MatchDto forfeit(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.forfeit(CurrentUser.id(jwt), id);
    }

    @GetMapping("/{id}/messages")
    @Operation(summary = "Lịch sử chat trong phòng (after = id tin cuối đã có)")
    public List<MatchMessageDto> messages(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @RequestParam(name = "after", defaultValue = "0") long after) {
        return chat.history(CurrentUser.id(jwt), id, after);
    }

    @PostMapping("/{id}/messages")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Gửi chat trong phòng (≤ 300 ký tự, idempotent theo clientId, có lọc từ thô tục)")
    public MatchMessageDto send(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody ChatRequest body) {
        return chat.send(CurrentUser.id(jwt), id, body);
    }

    @PostMapping("/{id}/report")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Báo cáo đối thủ hoặc một tin nhắn của đối thủ trong phòng")
    public ReportDto report(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody MatchReportRequest body) {
        return chat.report(CurrentUser.id(jwt), id, body);
    }
}
