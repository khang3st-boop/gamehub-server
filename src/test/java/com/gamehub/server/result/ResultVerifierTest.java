package com.gamehub.server.result;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.time.Clock;
import java.time.Instant;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.junit.jupiter.api.Test;

import com.gamehub.server.game.Scoring;
import com.gamehub.server.game.rubik.CubieCube;
import com.gamehub.server.game.rubik.CubieCube.Move;
import com.gamehub.server.result.ResultDtos.ResultPayload;

class ResultVerifierTest {

    static final Instant NOW = Instant.parse("2026-10-31T10:00:00Z");
    final ResultVerifier verifier = new ResultVerifier(Clock.fixed(NOW, ZoneOffset.UTC));

    /** Đề Sudoku kinh điển có lời giải duy nhất (30 ô cho sẵn, 51 ô trống). */
    static final String PUZZLE =
            "530070000600195000098000060800060003400803001700020006060000280000419005000080079";
    static final String SOLUTION =
            "534678912672195348198342567859761423426853791713924856961537284287419635345286179";

    static ResultPayload payload(String game, String mode, String outcome, long ms, int moves, int errors, int hints,
            boolean assisted, Map<String, Object> details) {
        return new ResultPayload("c-" + game, game, mode, outcome, 0, ms, moves, errors, hints, assisted,
                NOW.minusSeconds(5), details);
    }

    /** Nghịch đảo một chuỗi nước: đảo thứ tự, mỗi nước quay ngược chiều. */
    static String inverse(String scramble) {
        List<Move> moves = new ArrayList<>(Move.parseSequence(scramble));
        java.util.Collections.reverse(moves);
        return Move.format(moves.stream().map(m -> new Move(m.face(), 4 - m.turns())).toList());
    }

    // ------------------------------------------------------------------ Rubik

    @Test
    void rubikValidSolutionIsAcceptedAndScoredByServer() {
        String scramble = "R U R' U' F2 D L' B";
        String solution = inverse(scramble);
        var v = verifier.verify(payload("rubik", "scramble", "win", 60_000, 8, 0, 0, false,
                Map.of("scramble", scramble, "solution", solution)));
        assertThat(v.assisted()).isFalse();
        assertThat(v.rankable()).isTrue();
        assertThat(v.score()).isEqualTo(Scoring.rubik(60_000, 8, 0, false)).isEqualTo(5000 - 300 - 80);
    }

    @Test
    void rubikWrongSolutionIsRejected() {
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "win", 60_000, 2, 0, 0, false,
                Map.of("scramble", "R U", "solution", "U R"))))
                .isInstanceOf(ResultVerifier.Rejected.class)
                .hasMessageContaining("không đưa khối Rubik");
    }

    @Test
    void rubikMoveCountMustMatchSolution() {
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "win", 60_000, 1, 0, 0, false,
                Map.of("scramble", "R U", "solution", "U' R'"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    @Test
    void rubikImpossiblyFastUnassistedSolveIsRejected() {
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "win", 300, 2, 0, 0, false,
                Map.of("scramble", "R U", "solution", "U' R'"))))
                .isInstanceOf(ResultVerifier.Rejected.class)
                .hasMessageContaining("nhanh bất thường");
    }

    @Test
    void rubikAutoSolveIsAssistedNotRankableAndScoresZero() {
        var v = verifier.verify(payload("rubik", "scramble", "win", 300, 2, 0, 0, false,
                Map.of("scramble", "R U", "solution", "U' R'", "autoSolve", true, "assistMoves", 2)));
        assertThat(v.assisted()).isTrue();
        assertThat(v.rankable()).isFalse();
        assertThat(v.score()).isZero();
    }

    @Test
    void rubikShortChallengeWithinLimitIsWinButNotRankable() {
        String scramble = "R U R' U' F2 D L' B";
        var v = verifier.verify(payload("rubik", "short15", "win", 60_000, 8, 0, 0, false,
                Map.of("scramble", scramble, "solution", inverse(scramble))));
        assertThat(v.rankable()).isFalse();
        assertThat(v.score()).isEqualTo(Scoring.rubik(60_000, 8, 0, false));
    }

    @Test
    void rubikShortChallengeOverLimitIsLossWithZeroScore() {
        String scramble = "R U R' U' F2 D L' B";
        // Lời giải dài 16 nước: R R' lặp 4 lần rồi nghịch đảo xáo trộn.
        String solution = "R R' R R' R R' R R' " + inverse(scramble);
        var v = verifier.verify(payload("rubik", "short15", "loss", 60_000, 16, 0, 0, false,
                Map.of("scramble", scramble, "solution", solution)));
        assertThat(v.score()).isZero();
        assertThat(v.rankable()).isFalse();
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "short15", "win", 60_000, 16, 0, 0, false,
                Map.of("scramble", scramble, "solution", solution))))
                .isInstanceOf(ResultVerifier.Rejected.class)
                .hasMessageContaining("không khớp");
    }

    @Test
    void rubikShortChallengeRejectsLongScrambleAndFakeLoss() {
        String longScramble = "R U R U R U R U R U R U R U R U";
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "short15", "win", 60_000, 16, 0, 0, false,
                Map.of("scramble", longScramble, "solution", inverse(longScramble)))))
                .isInstanceOf(ResultVerifier.Rejected.class)
                .hasMessageContaining("quá dài");
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "short15", "loss", 60_000, 2, 0, 0, false,
                Map.of("scramble", "R U", "solution", "U' R'"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
        // Chế độ thường vẫn không nhận "loss".
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "loss", 60_000, 2, 0, 0, false,
                Map.of("scramble", "R U", "solution", "U' R'"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    @Test
    void rubikInvalidNotationIsRejected() {
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "win", 60_000, 1, 0, 0, false,
                Map.of("scramble", "R U", "solution", "X9"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    @Test
    void randomScrambleFollowedByInverseIsSolved() {
        Random rng = new Random(42);
        for (int i = 0; i < 50; i++) {
            String s = Move.format(CubieCube.scramble(rng, 25));
            assertThat(CubieCube.SOLVED.apply(Move.parseSequence(s)).isSolved()).isFalse();
            assertThat(ResultVerifier.replayRubik(s, inverse(s))).hasSize(25);
        }
    }

    // ----------------------------------------------------------------- Sudoku

    @Test
    void sudokuValidSolveIsAccepted() {
        var v = verifier.verify(payload("sudoku", "easy", "win", 300_000, 51, 2, 1, false,
                Map.of("puzzle", PUZZLE, "solution", SOLUTION)));
        assertThat(v.score()).isEqualTo(Scoring.sudoku("easy", 300_000, 2, 1)).isEqualTo(1000 - 600 - 100 - 100);
    }

    @Test
    void sudokuSolutionNotMatchingGivensIsRejected() {
        String tampered = "1" + SOLUTION.substring(1);
        assertThatThrownBy(() -> verifier.verify(payload("sudoku", "easy", "win", 300_000, 51, 0, 0, false,
                Map.of("puzzle", PUZZLE, "solution", tampered))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    @Test
    void sudokuWithMultipleSolutionsIsRejected() {
        // Bỏ gần hết ô cho sẵn → nhiều lời giải.
        String sparse = "5" + "0".repeat(80);
        assertThatThrownBy(() -> verifier.verify(payload("sudoku", "easy", "win", 300_000, 80, 0, 0, false,
                Map.of("puzzle", sparse, "solution", SOLUTION))))
                .isInstanceOf(ResultVerifier.Rejected.class)
                .hasMessageContaining("duy nhất");
    }

    @Test
    void sudokuFilledCountMustMatchBlanks() {
        assertThatThrownBy(() -> verifier.verify(payload("sudoku", "easy", "win", 300_000, 50, 0, 0, false,
                Map.of("puzzle", PUZZLE, "solution", SOLUTION))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    // --------------------------------------------------------------- Xếp hình

    @Test
    void puzzleValidAndInvalidCounts() {
        Map<String, Object> d = Map.of("image", "sunset", "pieces", 16);
        var v = verifier.verify(payload("puzzle", "4x4", "win", 90_000, 16 - 1 + 3, 3, 1, false, d));
        assertThat(v.score()).isEqualTo(Scoring.puzzle(16, 90_000, 3, 1)).isEqualTo(500 + 480 - 90 - 15 - 50);
        assertThatThrownBy(() -> verifier.verify(payload("puzzle", "4x4", "win", 90_000, 10, 0, 0, false, d)))
                .isInstanceOf(ResultVerifier.Rejected.class);
        assertThatThrownBy(() -> verifier.verify(payload("puzzle", "4x5", "win", 90_000, 20, 0, 0, false, d)))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    // ------------------------------------------------------------------- Caro

    static Map<String, Object> caro(List<Integer> moves, String player, String level) {
        Map<String, Object> d = new HashMap<>();
        d.put("moves", moves);
        d.put("player", player);
        d.put("level", level);
        return d;
    }

    @Test
    void caroEasyWinIsAcceptedAndOutcomeMustMatchReplay() {
        // X (người) đi 0..4 hàng đầu; O (AI dễ) đi hàng 7.
        List<Integer> moves = List.of(0, 105, 1, 106, 2, 107, 3, 108, 4);
        var v = verifier.verify(payload("caro", "easy-x", "win", 30_000, 5, 0, 0, false, caro(moves, "x", "easy")));
        assertThat(v.score()).isEqualTo(Scoring.caro("easy", "win", 5, 0)).isEqualTo(300 + 285);
        assertThatThrownBy(() -> verifier.verify(
                payload("caro", "easy-x", "loss", 30_000, 5, 0, 0, false, caro(moves, "x", "easy"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    @Test
    void caroStrictAiThatIgnoresImmediateThreatIsRejected() {
        // Ở mức medium, AI luôn chặn nước thắng ngay của đối thủ: ván "AI không chặn" là giả mạo.
        List<Integer> moves = List.of(0, 105, 1, 106, 2, 107, 3, 108, 4);
        assertThatThrownBy(() -> verifier.verify(
                payload("caro", "medium-x", "win", 30_000, 5, 0, 0, false, caro(moves, "x", "medium"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    @Test
    void caroUnfinishedGameNeedsResignation() {
        List<Integer> moves = List.of(0, 105, 1);
        assertThatThrownBy(() -> verifier.verify(
                payload("caro", "easy-x", "loss", 30_000, 2, 0, 0, false, caro(moves, "x", "easy"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
        Map<String, Object> d = caro(moves, "x", "easy");
        d.put("resigned", true);
        var v = verifier.verify(payload("caro", "easy-x", "loss", 30_000, 2, 0, 0, false, d));
        assertThat(v.score()).isZero();
    }

    @Test
    void caroOccupiedCellIsRejected() {
        assertThatThrownBy(() -> verifier.verify(
                payload("caro", "easy-x", "loss", 30_000, 2, 0, 0, false, caro(List.of(0, 0, 1), "x", "easy"))))
                .isInstanceOf(ResultVerifier.Rejected.class);
    }

    // --------------------------------------------------------------- Chung

    @Test
    void generalSanityChecks() {
        Map<String, Object> d = Map.of("scramble", "R U", "solution", "U' R'");
        assertThatThrownBy(() -> verifier.verify(new ResultPayload("x", "rubik", "scramble", "win", 0, 60_000, 2, 0,
                0, false, NOW.plusSeconds(3600), d))).hasMessageContaining("tương lai");
        assertThatThrownBy(() -> verifier.verify(payload("chess", "x", "win", 60_000, 2, 0, 0, false, d)))
                .hasMessageContaining("không được hỗ trợ");
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "lose", 60_000, 2, 0, 0, false, d)))
                .isInstanceOf(ResultVerifier.Rejected.class);
        assertThatThrownBy(() -> verifier.verify(payload("rubik", "scramble", "win", 25 * 3_600_000L, 2, 0, 0,
                false, d))).isInstanceOf(ResultVerifier.Rejected.class);
    }
}
