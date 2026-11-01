package com.gamehub.server.game.rubik;

import java.security.SecureRandom;
import java.util.Map;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/rubik")
@Tag(name = "Rubik", description = "Chuỗi xáo trộn do server sinh (dùng cho thử thách)")
@SecurityRequirement(name = "bearer")
public class RubikController {

    public static final int SCRAMBLE_LENGTH = 25;

    private final SecureRandom random = new SecureRandom();

    @GetMapping("/scramble")
    @Operation(summary = "Sinh chuỗi xáo trộn 25 nước theo quy tắc WCA (không xoay cùng mặt hai lần liên tiếp)")
    public Map<String, String> scramble() {
        return Map.of("scramble", CubieCube.Move.format(CubieCube.scramble(random, SCRAMBLE_LENGTH)));
    }
}
