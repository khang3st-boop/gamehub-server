package com.gamehub.server.daily;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;

import com.gamehub.server.game.caro.Caro;
import com.gamehub.server.game.sudoku.Sudoku;

import tools.jackson.databind.json.JsonMapper;

/**
 * Khoá quy tắc sinh đề hằng ngày bằng các giá trị "vàng" tính từ bản Dart ở client
 * ({@code test/daily/daily_challenge_test.dart} giữ đúng các giá trị này). Nếu test này
 * hỏng, client và server sẽ sinh đề khác nhau và mọi kết quả hằng ngày bị từ chối.
 */
class DailyChallengesTest {

    static final Map<String, String> GOLDEN = Map.of(
            "2026-10-31",
            "{\"date\":\"2026-10-31\",\"rubik\":{\"scramble\":\"U' D F2 B2 D U' R B' U' F2 U' D' R2 D2 F2 B D2 R D' F'\","
                    + "\"code\":\"RB-20261031-2KTL\"},\"sudoku\":{\"difficulty\":\"hard\",\"puzzle\":"
                    + "\"000100609540700001000200040200040900800020006003007000050000090080650100010000503\"},"
                    + "\"puzzle\":{\"image\":\"cube\",\"level\":\"5x5\",\"seed\":2026577568},"
                    + "\"caro\":{\"level\":\"hard\",\"player\":\"X\",\"moves\":[112,96,126,140,110,78,111,109,142,174]}}",
            "2026-11-02",
            "{\"date\":\"2026-11-02\",\"rubik\":{\"scramble\":\"F D' R2 F R' L F' B U2 F' R2 D2 R2 D' R' B R' U D R'\","
                    + "\"code\":\"RB-20261102-HKZM\"},\"sudoku\":{\"difficulty\":\"easy\",\"puzzle\":"
                    + "\"516700200082590076300000800008005921130028450005000003800306090004809100070102008\"},"
                    + "\"puzzle\":{\"image\":\"ocean\",\"level\":\"3x3\",\"seed\":2023280359},"
                    + "\"caro\":{\"level\":\"medium\",\"player\":\"X\",\"moves\":[112,80,126,84,81,140,111,66]}}",
            "2026-11-04",
            "{\"date\":\"2026-11-04\",\"rubik\":{\"scramble\":\"D F U L2 D' B D2 U2 B' U' B' D' L F D2 U B D B' L\","
                    + "\"code\":\"RB-20261104-BSYM\"},\"sudoku\":{\"difficulty\":\"medium\",\"puzzle\":"
                    + "\"087010000000300270600480001000500000710003506063020080040700160801002034000030000\"},"
                    + "\"puzzle\":{\"image\":\"caro\",\"level\":\"4x4\",\"seed\":1593819496},"
                    + "\"caro\":{\"level\":\"medium\",\"player\":\"X\",\"moves\":[112,80,126,84,81,140,111,66]}}");

    @Test
    void fnvAndMulberryMatchClientVectors() {
        assertThat(DailyRandom.fnv1a32("") & 0xFFFFFFFFL).isEqualTo(2166136261L);
        assertThat(DailyRandom.fnv1a32("gamehub-daily-v1|rubik|2026-10-31") & 0xFFFFFFFFL).isEqualTo(3787653828L);
        DailyRandom r = new DailyRandom(42);
        List<Long> first = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            first.add(r.nextUint32());
        }
        assertThat(first).containsExactly(2581720956L, 1925393290L, 3661312704L, 2876485805L, 750819978L);
        DailyRandom s = DailyRandom.of("sudoku", LocalDate.of(2026, 10, 31));
        List<Integer> ints = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            ints.add(s.nextInt(100));
        }
        assertThat(ints).containsExactly(45, 84, 15, 10, 32);
    }

    @Test
    void challengeJsonMatchesClientExactly() {
        JsonMapper mapper = JsonMapper.builder().build();
        GOLDEN.forEach((date, json) -> assertThat(mapper.writeValueAsString(
                DailyChallenges.forDate(LocalDate.parse(date)))).as(date).isEqualTo(json));
    }

    @Test
    void dayBoundaryIsMidnightUtcPlus7() {
        assertThat(DailyRandom.dayOf(Instant.parse("2026-10-31T16:59:59Z"))).isEqualTo(LocalDate.of(2026, 10, 31));
        assertThat(DailyRandom.dayOf(Instant.parse("2026-10-31T17:00:00Z"))).isEqualTo(LocalDate.of(2026, 11, 1));
        assertThat(DailyRandom.startOf(LocalDate.of(2026, 11, 1))).isEqualTo(Instant.parse("2026-10-31T17:00:00Z"));
        assertThat(DailyRandom.parse("2026-02-29")).isNull();
        assertThat(DailyRandom.parse("2026-2-01")).isNull();
        assertThat(DailyRandom.parse(" 2026-02-01")).isNull();
        assertThat(DailyRandom.parse("2028-02-29")).isEqualTo(LocalDate.of(2028, 2, 29));
    }

    @Test
    void sudokuBasesAreUniqueAndHardEnough() {
        DailyChallenges.SUDOKU_BASES.forEach((diff, bases) -> {
            int min = switch (diff) {
                case "easy" -> 1;
                case "medium" -> 2;
                default -> 3;
            };
            for (String b : bases) {
                int[] g = Sudoku.parse(b);
                assertThat(Sudoku.countSolutions(g, 2)).as(b).isEqualTo(1);
                assertThat(Sudoku.rate(g)).as(b).isGreaterThanOrEqualTo(min);
            }
        });
    }

    @Test
    void sudokuTransformKeepsUniquenessAndRating() {
        LocalDate d = LocalDate.of(2026, 1, 1);
        for (int k = 0; k < 120; k++, d = d.plusDays(1)) {
            DailyRandom rng = DailyRandom.of("sudoku", d);
            List<String> bases = DailyChallenges.SUDOKU_BASES.get(DailyChallenges.sudokuDifficulty(d));
            int[] base = Sudoku.parse(bases.get(rng.nextInt(bases.size())));
            int[] t = Sudoku.parse(DailyChallenges.forDate(d).sudoku().puzzle());
            assertThat(Sudoku.countSolutions(t, 2)).as(d.toString()).isEqualTo(1);
            assertThat(Sudoku.rate(t)).as(d.toString()).isEqualTo(Sudoku.rate(base));
        }
    }

    @Test
    void caroPositionsAreLegalAndOpenWithXToMove() {
        for (List<Integer> p : DailyChallenges.CARO_POSITIONS) {
            assertThat(p.size() % 2).isZero();
            Caro.Replay r = Caro.replay(p, Caro.O, true);
            assertThat(r.over()).as(p.toString()).isFalse();
        }
    }

    @Test
    void codeHasChecksumAndDateWeekdayRulesHold() {
        assertThat(DailyChallenges.code(LocalDate.of(2026, 10, 31))).isEqualTo("RB-20261031-2KTL");
        // Thứ Hai → dễ/3×3/Caro vừa; Chủ nhật → khó/5×5/Caro khó.
        var mon = DailyChallenges.forDate(LocalDate.of(2026, 11, 2));
        var sun = DailyChallenges.forDate(LocalDate.of(2026, 11, 8));
        assertThat(mon.sudoku().difficulty()).isEqualTo("easy");
        assertThat(mon.puzzle().level()).isEqualTo("3x3");
        assertThat(mon.caro().level()).isEqualTo("medium");
        assertThat(sun.sudoku().difficulty()).isEqualTo("hard");
        assertThat(sun.puzzle().level()).isEqualTo("5x5");
        assertThat(sun.caro().level()).isEqualTo("hard");
    }
}
