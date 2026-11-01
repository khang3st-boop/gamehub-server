package com.gamehub.server.match;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.gamehub.server.game.rubik.CubieCube;
import com.gamehub.server.game.rubik.CubieCube.Move;
import com.gamehub.server.game.sudoku.Sudoku;
import com.gamehub.server.match.MatchDtos.FinishRequest;
import com.gamehub.server.match.MatchDtos.PuzzleDrop;

/**
 * Kiểm tra bài nộp "đã giải xong" của trận đua. Trả về lý do từ chối, hoặc {@code null} nếu hợp lệ.
 * <ul>
 * <li>Rubik: áp dụng chuỗi xáo rồi lời giải phải về trạng thái đã giải; tốc độ tối đa 20 nước/giây.</li>
 * <li>Sudoku: lưới khớp các ô đề cho sẵn và là lời giải hợp lệ.</li>
 * <li>Xếp hình: mỗi mảnh đặt đúng đúng một lần, thời điểm tăng dần, không nhanh hơn ngưỡng con
 * người (server không thấy hình học kéo thả nên đây là kiểm tra tính hợp lý của nhật ký).</li>
 * </ul>
 */
final class MatchVerifier {

    static final long RUBIK_MS_PER_MOVE = 50;
    static final long RUBIK_MIN_MS = 1_000;
    static final long SUDOKU_MIN_MS = 15_000;
    static final long PUZZLE_MS_PER_PIECE = 400;
    static final long PUZZLE_MIN_GAP_MS = 150;
    static final long CLOCK_TOLERANCE_MS = 2_000;

    private MatchVerifier() {
    }

    static String verify(String game, Map<String, Object> config, FinishRequest req, long elapsedMs) {
        return switch (game) {
            case "rubik" -> rubik((String) config.get("scramble"), req.solution(), elapsedMs);
            case "sudoku" -> sudoku((String) config.get("puzzle"), req.grid(), elapsedMs);
            case "puzzle" -> puzzle((String) config.get("level"), req.drops(), elapsedMs);
            default -> "Game này không nộp kết quả kiểu đua giải";
        };
    }

    static String rubik(String scramble, String solution, long elapsedMs) {
        if (solution == null || solution.isBlank()) {
            return "Thiếu chuỗi nước đi";
        }
        List<Move> moves;
        try {
            moves = Move.parseSequence(solution);
        } catch (IllegalArgumentException e) {
            return "Chuỗi nước đi không hợp lệ";
        }
        if (moves.size() > 2000) {
            return "Quá nhiều nước đi";
        }
        CubieCube cube = CubieCube.SOLVED.apply(Move.parseSequence(scramble)).apply(moves);
        if (!cube.isSolved()) {
            return "Khối Rubik chưa được giải";
        }
        if (elapsedMs < Math.max(RUBIK_MIN_MS, moves.size() * RUBIK_MS_PER_MOVE)) {
            return "Thời gian không hợp lý so với số nước";
        }
        return null;
    }

    static String sudoku(String puzzle, String grid, long elapsedMs) {
        if (grid == null || !grid.matches("^[1-9]{81}$")) {
            return "Lưới phải đủ 81 chữ số 1–9";
        }
        for (int i = 0; i < 81; i++) {
            char given = puzzle.charAt(i);
            if (given != '0' && given != grid.charAt(i)) {
                return "Lưới không khớp đề";
            }
        }
        if (!Sudoku.isSolved(Sudoku.parse(grid))) {
            return "Lời giải sai";
        }
        if (elapsedMs < SUDOKU_MIN_MS) {
            return "Thời gian không hợp lý";
        }
        return null;
    }

    static String puzzle(String level, List<PuzzleDrop> drops, long elapsedMs) {
        int n = Integer.parseInt(level.substring(0, level.indexOf('x')));
        int pieces = n * n;
        if (drops == null || drops.size() != pieces) {
            return "Chưa đặt đủ " + pieces + " mảnh";
        }
        Set<Integer> seen = new HashSet<>();
        long last = -1;
        long lastManual = -PUZZLE_MIN_GAP_MS;
        int manual = 0;
        for (PuzzleDrop d : drops) {
            if (d.piece() < 0 || d.piece() >= pieces || !seen.add(d.piece())) {
                return "Nhật ký mảnh không hợp lệ";
            }
            if (d.atMs() < last || d.atMs() > elapsedMs + CLOCK_TOLERANCE_MS) {
                return "Thời điểm đặt mảnh không hợp lệ";
            }
            if (!d.hint()) {
                if (d.atMs() - lastManual < PUZZLE_MIN_GAP_MS) {
                    return "Đặt mảnh nhanh bất thường";
                }
                lastManual = d.atMs();
                manual++;
            }
            last = d.atMs();
        }
        if (elapsedMs < manual * PUZZLE_MS_PER_PIECE) {
            return "Thời gian không hợp lý so với số mảnh";
        }
        return null;
    }

    static boolean usedPuzzleHints(List<PuzzleDrop> drops) {
        return drops != null && drops.stream().anyMatch(PuzzleDrop::hint);
    }
}
