package com.gamehub.server.match;

import java.security.SecureRandom;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.stereotype.Component;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.daily.DailyChallenges;
import com.gamehub.server.game.caro.Caro;
import com.gamehub.server.game.rubik.CubieCube;
import com.gamehub.server.game.rubik.CubieCube.Move;

/**
 * Sinh đề cho trận online. Hai người nhận CÙNG MỘT đề do server tạo:
 * <ul>
 * <li>Rubik: chuỗi xáo 20 nước;</li>
 * <li>Sudoku: đề gốc đã kiểm chứng duy nhất lời giải + biến đổi đối xứng theo seed;</li>
 * <li>Xếp hình: tranh có sẵn + lưới + seed (client cắt và xáo mảnh xác định theo seed);</li>
 * <li>Caro: bàn 15×15 trống, server bốc thăm ai cầm X (đi trước).</li>
 * </ul>
 * Xếp hình online chỉ dùng tranh có sẵn: ảnh cá nhân không bao giờ được gửi lên server.
 */
@Component
public class MatchConfigFactory {

    public static final Map<String, List<String>> MODES = Map.of(
            "rubik", List.of("3x3"),
            "sudoku", List.of("easy", "medium", "hard"),
            "puzzle", List.of("3x3", "4x4", "5x5", "6x6"),
            "caro", List.of("15x15"));

    static final int SCRAMBLE_LENGTH = 20;

    private final Random random = new SecureRandom();
    private final AppProperties props;

    public MatchConfigFactory(AppProperties props) {
        this.props = props;
    }

    public static void validate(String game, String mode) {
        List<String> modes = game == null ? null : MODES.get(game);
        if (modes == null) {
            throw ApiException.badRequest("INVALID_GAME", "Game phải là rubik, sudoku, puzzle hoặc caro");
        }
        if (!modes.contains(mode)) {
            throw ApiException.badRequest("INVALID_MODE", "Chế độ của " + game + " phải thuộc " + modes);
        }
    }

    public Map<String, Object> create(String game, String mode, UUID a, UUID b) {
        validate(game, mode);
        Map<String, Object> c = new LinkedHashMap<>();
        switch (game) {
            case "rubik" -> {
                List<Move> moves = CubieCube.scramble(random, SCRAMBLE_LENGTH);
                c.put("scramble", Move.format(moves));
            }
            case "sudoku" -> {
                var s = DailyChallenges.sudokuFromSeed(mode, random.nextInt(Integer.MAX_VALUE));
                c.put("difficulty", s.difficulty());
                c.put("puzzle", s.puzzle());
            }
            case "puzzle" -> {
                List<String> art = DailyChallenges.puzzleArt();
                c.put("image", art.get(random.nextInt(art.size())));
                c.put("level", mode);
                c.put("seed", random.nextInt(Integer.MAX_VALUE));
            }
            case "caro" -> {
                c.put("size", Caro.SIZE);
                c.put("winLength", Caro.WIN_LENGTH);
                c.put("x", (random.nextBoolean() ? a : b).toString());
                c.put("turnSeconds", props.online().caroTurn().toSeconds());
            }
            default -> throw new IllegalStateException(game);
        }
        return c;
    }
}
