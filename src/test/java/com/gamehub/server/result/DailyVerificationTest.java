package com.gamehub.server.result;

import static com.gamehub.server.result.ResultVerifierTest.inverse;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;

import com.gamehub.server.daily.DailyChallenges;
import com.gamehub.server.game.rubik.CubieCube.Move;
import com.gamehub.server.result.ResultDtos.ResultPayload;

/** Kiểm tra kết quả thử thách hằng ngày: đúng đề của ngày, ngày hợp lệ, và quy tắc xếp hạng ngày. */
class DailyVerificationTest {

    /** 17:00 ngày 31/10/2026 theo UTC+7. */
    static final Instant NOW = Instant.parse("2026-10-31T10:00:00Z");
    static final String TODAY = "2026-10-31";
    final ResultVerifier verifier = new ResultVerifier(Clock.fixed(NOW, ZoneOffset.UTC));
    final DailyChallenges.Challenge today = DailyChallenges.forDate(LocalDate.parse(TODAY));

    static ResultPayload payload(String game, String mode, long ms, int moves, Map<String, Object> details) {
        return new ResultPayload("c-" + game, game, mode, "win", 0, ms, moves, 0, 0, false, NOW.minusSeconds(5),
                details);
    }

    ResultPayload rubik(String mode, String scramble, Object daily) {
        Map<String, Object> d = new HashMap<>();
        d.put("scramble", scramble);
        d.put("solution", inverse(scramble));
        if (daily != null) {
            d.put("daily", daily);
        }
        return payload("rubik", mode, 60_000, Move.parseSequence(scramble).size(), d);
    }

    @Test
    void rubikDailyWithTodaysScrambleIsAccepted() {
        var v = verifier.verify(rubik("daily", today.rubik().scramble(), TODAY));
        assertThat(v.rankable()).isTrue();
        // Ký hiệu tương đương (R3 = R') vẫn khớp đề.
        String alt = today.rubik().scramble().replace("'", "3");
        assertThat(verifier.verify(rubik("daily", alt, TODAY)).rankable()).isTrue();
    }

    @Test
    void rubikDailyWithOtherScrambleOrMissingDateIsRejected() {
        assertThatThrownBy(() -> verifier.verify(rubik("daily", "R U F' D2 L B'", TODAY)))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
        assertThatThrownBy(() -> verifier.verify(rubik("daily", today.rubik().scramble(), null)))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("Thiếu ngày");
        // Có daily nhưng khai chế độ thường cũng không được.
        assertThatThrownBy(() -> verifier.verify(rubik("scramble", today.rubik().scramble(), TODAY)))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
    }

    @Test
    void dailyDateMustBeValidAndNotInFuture() {
        String future = DailyChallenges.forDate(LocalDate.of(2026, 11, 2)).rubik().scramble();
        for (Object bad : List.of("2026-11-02", "2025-12-31", "2026-13-01", "31/10/2026", 20261031)) {
            String s = bad.equals("2026-11-02") ? future : today.rubik().scramble();
            assertThatThrownBy(() -> verifier.verify(rubik("daily", s, bad))).as(String.valueOf(bad))
                    .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("Ngày thử thách");
        }
        // Đề ngày cũ (luyện lại qua mã) vẫn hợp lệ.
        String old = DailyChallenges.forDate(LocalDate.of(2026, 10, 1)).rubik().scramble();
        assertThat(verifier.verify(rubik("daily", old, "2026-10-01")).rankable()).isTrue();
    }

    @Test
    void puzzleDailyMustMatchImageLevelAndSeed() {
        var p = today.puzzle();
        Map<String, Object> d = new HashMap<>(Map.of("daily", TODAY, "image", p.image(), "pieces", 25,
                "seed", p.seed()));
        assertThat(verifier.verify(payload("puzzle", p.level(), 60_000, 25, d)).rankable()).isTrue();
        d.put("seed", p.seed() + 1);
        assertThatThrownBy(() -> verifier.verify(payload("puzzle", p.level(), 60_000, 25, d)))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
        d.put("seed", p.seed());
        d.put("pieces", 16);
        assertThatThrownBy(() -> verifier.verify(payload("puzzle", "4x4", 60_000, 16, d)))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
    }

    @Test
    void sudokuDailyMustMatchPuzzleAndDifficulty() {
        var s = today.sudoku();
        assertThatThrownBy(() -> verifier.verify(payload("sudoku", "easy", 600_000, 50,
                Map.of("daily", TODAY, "puzzle", s.puzzle(), "solution", s.puzzle()))))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
        String other = ResultVerifierTest.PUZZLE;
        assertThatThrownBy(() -> verifier.verify(payload("sudoku", s.difficulty(), 600_000, 51,
                Map.of("daily", TODAY, "puzzle", other, "solution", ResultVerifierTest.SOLUTION))))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
    }

    @Test
    void caroDailyMustStartFromTodaysPosition() {
        var c = today.caro();
        List<Integer> moves = new ArrayList<>(c.moves());
        moves.set(0, 0);
        assertThatThrownBy(() -> verifier.verify(payload("caro", c.resultMode(), 60_000, 5,
                Map.of("daily", TODAY, "moves", moves))))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
        assertThatThrownBy(() -> verifier.verify(payload("caro", "easy-x", 60_000, 5,
                Map.of("daily", TODAY, "moves", c.moves()))))
                .isInstanceOf(ResultVerifier.Rejected.class).hasMessageContaining("không khớp");
    }

    // ------------------------------------------------------- xếp hạng theo ngày

    @Test
    void liveSubmissionWithinTheDayIsRanked() {
        Instant start = Instant.parse("2026-10-30T17:00:00Z"); // 00:00 ngày 31/10 (UTC+7)
        Instant end = Instant.parse("2026-10-31T17:00:00Z");
        assertThat(ResultService.isLiveDaily(TODAY, NOW.minusSeconds(3), NOW)).isTrue();
        // Đồng hồ máy chậm vài phút sát đầu ngày vẫn được tính.
        assertThat(ResultService.isLiveDaily(TODAY, start.minus(Duration.ofMinutes(4)), start.plusSeconds(30)))
                .isTrue();
        // Ván kết thúc sát nửa đêm, gửi trễ vài phút sang ngày mới: vẫn tính cho ngày cũ.
        assertThat(ResultService.isLiveDaily(TODAY, end.minusSeconds(20), end.plus(Duration.ofMinutes(3))))
                .isTrue();
    }

    @Test
    void offlineLateOrOutOfDaySubmissionIsNotRanked() {
        Instant end = Instant.parse("2026-10-31T17:00:00Z");
        // Chơi offline rồi 2 giờ sau mới đồng bộ.
        assertThat(ResultService.isLiveDaily(TODAY, NOW.minus(Duration.ofHours(2)), NOW)).isFalse();
        // Server nhận sau hạn chót của ngày.
        assertThat(ResultService.isLiveDaily(TODAY, end.plus(Duration.ofMinutes(9)), end.plus(Duration.ofMinutes(11))))
                .isFalse();
        // Luyện lại đề ngày cũ hôm nay.
        assertThat(ResultService.isLiveDaily("2026-10-01", NOW, NOW)).isFalse();
        // Khai thời điểm chơi lệch xa so với ngày của đề.
        assertThat(ResultService.isLiveDaily(TODAY, end.plus(Duration.ofMinutes(8)), end.plus(Duration.ofMinutes(8))))
                .isFalse();
        assertThat(ResultService.isLiveDaily("không phải ngày", NOW, NOW)).isFalse();
    }
}
