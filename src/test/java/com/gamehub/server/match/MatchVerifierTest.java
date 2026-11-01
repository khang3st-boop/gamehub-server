package com.gamehub.server.match;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;

import com.gamehub.server.daily.DailyChallenges;
import com.gamehub.server.game.rubik.CubieCube.Move;
import com.gamehub.server.game.sudoku.Sudoku;
import com.gamehub.server.match.MatchDtos.FinishRequest;
import com.gamehub.server.match.MatchDtos.PuzzleDrop;

class MatchVerifierTest {

    static String inverse(String scramble) {
        List<Move> moves = new ArrayList<>(Move.parseSequence(scramble));
        Collections.reverse(moves);
        return Move.format(moves.stream().map(m -> new Move(m.face(), 4 - m.turns())).toList());
    }

    /** Giải Sudoku bằng quay lui (chỉ dùng trong test). */
    static String solveSudoku(String puzzle) {
        int[] g = Sudoku.parse(puzzle);
        if (!fill(g, 0)) {
            throw new IllegalStateException("Không giải được");
        }
        StringBuilder sb = new StringBuilder();
        for (int v : g) {
            sb.append(v);
        }
        return sb.toString();
    }

    private static boolean fill(int[] g, int i) {
        if (i == 81) {
            return true;
        }
        if (g[i] != 0) {
            return fill(g, i + 1);
        }
        int r = i / 9;
        int c = i % 9;
        for (int v = 1; v <= 9; v++) {
            boolean ok = true;
            for (int k = 0; k < 9 && ok; k++) {
                int br = r / 3 * 3 + k / 3;
                int bc = c / 3 * 3 + k % 3;
                ok = g[r * 9 + k] != v && g[k * 9 + c] != v && g[br * 9 + bc] != v;
            }
            if (ok) {
                g[i] = v;
                if (fill(g, i + 1)) {
                    return true;
                }
                g[i] = 0;
            }
        }
        return false;
    }

    static FinishRequest rubik(String solution) {
        return new FinishRequest(solution, null, null, null, false);
    }

    @Test
    void rubikNeedsRealSolutionAndPlausibleTime() {
        String scramble = "R U R' U' F2 D L2 B";
        Map<String, Object> cfg = Map.of("scramble", scramble);
        assertNull(MatchVerifier.verify("rubik", cfg, rubik(inverse(scramble)), 5_000));
        assertEquals("Khối Rubik chưa được giải", MatchVerifier.verify("rubik", cfg, rubik("R U"), 5_000));
        assertNotNull(MatchVerifier.verify("rubik", cfg, rubik(inverse(scramble)), 200)); // nhanh phi lý
        assertNotNull(MatchVerifier.verify("rubik", cfg, rubik("X9"), 5_000));
        assertNotNull(MatchVerifier.verify("rubik", cfg, rubik(""), 5_000));
    }

    @Test
    void sudokuMustMatchGivensAndBeSolved() {
        var s = DailyChallenges.sudokuFromSeed("easy", 42);
        String solved = solveSudoku(s.puzzle());
        Map<String, Object> cfg = Map.of("puzzle", s.puzzle());
        assertNull(MatchVerifier.verify("sudoku", cfg, new FinishRequest(null, solved, null, null, false), 60_000));
        assertNotNull(MatchVerifier.verify("sudoku", cfg, new FinishRequest(null, solved, null, null, false), 3_000));
        char[] broken = solved.toCharArray();
        char t = broken[0];
        broken[0] = broken[1];
        broken[1] = t;
        assertNotNull(MatchVerifier.verify("sudoku", cfg,
                new FinishRequest(null, new String(broken), null, null, false), 60_000));
        assertNotNull(MatchVerifier.verify("sudoku", cfg, new FinishRequest(null, "123", null, null, false), 60_000));
    }

    @Test
    void puzzleLogMustCoverEveryPieceOnceAtHumanSpeed() {
        Map<String, Object> cfg = Map.of("level", "3x3");
        List<PuzzleDrop> ok = new ArrayList<>();
        for (int i = 0; i < 9; i++) {
            ok.add(new PuzzleDrop(i, 1_000L * (i + 1), false));
        }
        assertNull(MatchVerifier.verify("puzzle", cfg, new FinishRequest(null, null, ok, 0, false), 10_000));
        // Thiếu mảnh.
        assertNotNull(MatchVerifier.verify("puzzle", cfg,
                new FinishRequest(null, null, ok.subList(0, 8), 0, false), 10_000));
        // Mảnh trùng.
        List<PuzzleDrop> dup = new ArrayList<>(ok);
        dup.set(8, new PuzzleDrop(0, 9_000, false));
        assertNotNull(MatchVerifier.verify("puzzle", cfg, new FinishRequest(null, null, dup, 0, false), 10_000));
        // Đặt dồn dập nhanh hơn người.
        List<PuzzleDrop> bot = new ArrayList<>();
        for (int i = 0; i < 9; i++) {
            bot.add(new PuzzleDrop(i, 10L * i, false));
        }
        assertNotNull(MatchVerifier.verify("puzzle", cfg, new FinishRequest(null, null, bot, 0, false), 10_000));
        // Thời điểm vượt quá thời gian server đo.
        assertNotNull(MatchVerifier.verify("puzzle", cfg, new FinishRequest(null, null, ok, 0, false), 2_000));
    }

    @Test
    void eloIsZeroSumAndFavoursUnderdog() {
        int[] even = MatchService.elo(1200, 1200, 1);
        assertEquals(1216, even[0]);
        assertEquals(1184, even[1]);
        int[] upset = MatchService.elo(1000, 1400, 1);
        assertEquals(2000 + 400, upset[0] + upset[1]);
        int[] draw = MatchService.elo(1200, 1200, 0.5);
        assertEquals(1200, draw[0]);
    }
}
