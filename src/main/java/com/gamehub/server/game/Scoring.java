package com.gamehub.server.game;

/**
 * Công thức điểm — PHẢI giống hệt client (rubik_scoring.dart, sudoku_engine.dart, jigsaw.dart,
 * caro_rules.dart). Thời gian tính bằng số giây nguyên (làm tròn xuống), như {@code Duration.inSeconds}.
 */
public final class Scoring {

    private Scoring() {
    }

    public static int rubik(long durationMs, int moves, int hints, boolean autoSolve) {
        if (autoSolve) {
            return 0;
        }
        long raw = Math.max(100, 5000 - 5 * (durationMs / 1000) - 10L * moves);
        return (int) Math.max(0, raw - 150L * hints);
    }

    public static int sudokuBase(String difficulty) {
        return switch (difficulty) {
            case "easy" -> 1000;
            case "medium" -> 2000;
            case "hard" -> 3500;
            default -> throw new IllegalArgumentException("Độ khó không hợp lệ");
        };
    }

    public static int sudoku(String difficulty, long durationMs, int errors, int hints) {
        long raw = sudokuBase(difficulty) - 2 * (durationMs / 1000) - 50L * errors - 100L * hints;
        return (int) Math.max(100, raw);
    }

    public static int puzzle(int pieces, long durationMs, int wrongDrops, int hints) {
        long raw = 500 + 30L * pieces - durationMs / 1000 - 5L * wrongDrops - 50L * hints;
        return (int) Math.max(50, raw);
    }

    public static int caro(String level, String outcome, int playerMoves, int hints) {
        int base = switch (level) {
            case "hard" -> 1000;
            case "medium" -> 600;
            default -> 300;
        };
        int raw = switch (outcome) {
            case "win" -> base + Math.max(0, 300 - 3 * playerMoves);
            case "draw" -> base / 3;
            default -> 0;
        };
        return Math.max(0, raw - 100 * hints);
    }
}
