package com.gamehub.server.match;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.match.MatchDtos.CreateRoomRequest;
import com.gamehub.server.match.MatchDtos.JoinRoomRequest;
import com.gamehub.server.match.MatchDtos.MatchDto;

/**
 * Phòng chờ 2/4 người có mã. Sau khi vào phòng, mọi thao tác (Sẵn sàng, chat, rời phòng, nộp kết quả)
 * dùng chung API {@code /api/v1/matches/{id}/...}.
 */
@RestController
@RequestMapping("/api/v1/rooms")
@Tag(name = "Phòng chờ", description = "Tạo phòng 2/4 người có mã, vào phòng bằng mã; mời bạn qua lời mời kèm roomId")
@SecurityRequirement(name = "bearer")
public class RoomController {

    private final MatchService service;

    public RoomController(MatchService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Tạo phòng chờ (2 hoặc 4 người). Tôi là chủ phòng; đề sinh khi mọi người Sẵn sàng")
    public MatchDto create(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody CreateRoomRequest body) {
        return service.createRoom(CurrentUser.id(jwt), body.game(), body.mode(), body.capacity());
    }

    @PostMapping("/join")
    @Operation(summary = "Vào phòng bằng mã 6 ký tự (404 nếu không có phòng đang chờ, 409 ROOM_FULL nếu đủ người)")
    public MatchDto join(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody JoinRoomRequest body) {
        return service.joinByCode(CurrentUser.id(jwt), body.code());
    }
}
