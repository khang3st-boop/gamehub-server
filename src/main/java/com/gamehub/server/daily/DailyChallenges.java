package com.gamehub.server.daily;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.gamehub.server.game.rubik.CubieCube;
import com.gamehub.server.game.rubik.CubieCube.Move;

/**
 * Sinh đề thử thách hằng ngày — bản sao Java của {@code daily_challenge.dart}. Cùng ngày ⇒ cùng
 * đề trên client và server, nên server kiểm tra được kết quả gửi lên có đúng đề của ngày không.
 * Golden test ở cả hai phía khoá các giá trị sinh ra.
 */
public final class DailyChallenges {

    private DailyChallenges() {
    }

    public record Rubik(String scramble, String code) {
    }

    public record Sudoku(String difficulty, String puzzle) {
    }

    public record Puzzle(String image, String level, int seed) {
    }

    public record Caro(String level, String player, List<Integer> moves) {
        /** Chế độ kết quả tương ứng ({@code <level>-x}). */
        public String resultMode() {
            return level + "-x";
        }
    }

    public record Challenge(String date, Rubik rubik, Sudoku sudoku, Puzzle puzzle, Caro caro) {
    }

    static final String CODE_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

    /** Đề gốc Sudoku (đã kiểm chứng duy nhất lời giải) — trùng {@code dailySudokuBases} ở client. */
    static final Map<String, List<String>> SUDOKU_BASES = Map.of(
            "easy", List.of(
                    "300007459800000020097065803006902080400608001080304700105830240020000005643500008",
                    "009300800036598740047200030018470000000905000000086570070009120081752390002004600",
                    "230009751401007063000103004049608500000000000005904310500701000910300608374800095",
                    "500000240300487000000652031040760000206915403000034060680321000000576008037000006",
                    "015027038890040000000803009500062900370105084001780003700509000000030076250470390",
                    "062000917080000030100006402603057040508090306040620801401200003030000020279000160",
                    "219008045400010800800030019020050601104000907603070050390040008008090004740500193",
                    "000610040090024018081590000203050009700832006500060304000045680850170090020086000"),
            "medium", List.of(
                    "900750000700002060005048070370000980000080000052000013030460100060200008000091005",
                    "075001900401090007090030000040000200060523040009000070000050020600070801002800650",
                    "000800000062003090410020806094001000600709001000200340901030027070400160000002000",
                    "000615780000000340500400016000701600006030500005209000250006001041000000073142000",
                    "160070002000900030300150080050000068076000150810000040090023005080004000600010024",
                    "150009000060002040802000050400010760720000083036070004080000406010300070000400039",
                    "870000400053400002000016005010059007000807000500630020700160000200003740008000016",
                    "560007904040509010700020060600058000000000000000640002070030008020806090408900026"),
            "hard", List.of(
                    "010004360000000197000050000000008920100947003095200000000090000567000000029800040",
                    "000060100003008590000000873500002080002000700070400002837000000029100300005090000",
                    "000080000000400061106700502004900010050000090070006400605004203810007000000060000",
                    "000020000400000872500803000010400067006000300750006040000908005975000003000010000",
                    "100530460000480002400000308030008040900000005080200010805000001200015000016079004",
                    "000600870008012040270000000500300010900000008020005003000000034030290600016008000",
                    "003000000250000900007306050700000240004703600029000007010904300005000016000000500",
                    "000000200000009004040102857080310005090000080600048030539204060700500000001000000"));

    /** Tranh có sẵn cho Xếp hình hằng ngày — trùng {@code dailyPuzzleArt}. */
    static final List<String> PUZZLE_ART = List.of("sunset", "ocean", "garden", "aurora", "city", "space", "cube",
            "caro");

    /** Thế cờ Caro đã kiểm thử (X đi tiếp, AI cầm O) — trùng {@code dailyCaroPositions}. */
    static final List<List<Integer>> CARO_POSITIONS = List.of(
            List.of(110, 144, 82, 153, 111, 55, 97, 192),
            List.of(112, 111, 128, 129, 80, 141),
            List.of(112, 128, 98, 70, 97, 82, 96, 95, 126, 84),
            List.of(112, 80, 126, 84, 81, 140, 111, 66),
            List.of(112, 82, 114, 113, 128, 144, 142, 156, 127, 172, 126, 129),
            List.of(112, 96, 126, 140, 110, 78, 111, 109, 142, 174),
            List.of(112, 111, 126, 140, 142, 110, 127, 97, 125, 124),
            List.of(112, 142, 114, 113, 98, 146, 84, 70));

    public static Challenge forDate(LocalDate date) {
        return new Challenge(date.toString(), rubik(date), sudoku(date), puzzle(date), caro(date));
    }

    static Rubik rubik(LocalDate date) {
        List<Move> moves = CubieCube.scramble(DailyRandom.of("rubik", date), 20);
        return new Rubik(Move.format(moves), code(date));
    }

    /** Mã thử thách {@code RB-yyyyMMdd-XXXX} (4 ký tự cuối là mã kiểm tra). */
    public static String code(LocalDate date) {
        int h = DailyRandom.fnv1a32("gamehub-daily-" + DailyRandom.RULES_VERSION + "|code|" + date);
        StringBuilder sb = new StringBuilder();
        for (int k = 0; k < 4; k++) {
            sb.append(CODE_ALPHABET.charAt(h & 31));
            h >>>= 5;
        }
        return "RB-" + date.toString().replace("-", "") + "-" + sb;
    }

    static String sudokuDifficulty(LocalDate date) {
        return switch (date.getDayOfWeek()) {
            case MONDAY, TUESDAY -> "easy";
            case WEDNESDAY, THURSDAY, FRIDAY -> "medium";
            default -> "hard";
        };
    }

    static Sudoku sudoku(LocalDate date) {
        String diff = sudokuDifficulty(date);
        return sudokuFrom(diff, DailyRandom.of("sudoku", date));
    }

    /**
     * Đề Sudoku cho trận online: cùng đề gốc đã kiểm chứng + biến đổi đối xứng như thử thách
     * hằng ngày, nhưng theo seed ngẫu nhiên của server.
     *
     * @throws IllegalArgumentException nếu độ khó không phải easy/medium/hard
     */
    public static Sudoku sudokuFromSeed(String difficulty, int seed) {
        if (!SUDOKU_BASES.containsKey(difficulty)) {
            throw new IllegalArgumentException("Độ khó Sudoku không hợp lệ: " + difficulty);
        }
        return sudokuFrom(difficulty, new DailyRandom(seed));
    }

    /** Tranh có sẵn dùng được cho Xếp hình online (client có sẵn, không tải ảnh). */
    public static List<String> puzzleArt() {
        return PUZZLE_ART;
    }

    private static Sudoku sudokuFrom(String diff, DailyRandom rng) {
        List<String> bases = SUDOKU_BASES.get(diff);
        String base = bases.get(rng.nextInt(bases.size()));
        int[] grid = new int[81];
        for (int i = 0; i < 81; i++) {
            grid[i] = base.charAt(i) - '0';
        }
        StringBuilder sb = new StringBuilder(81);
        for (int v : transformSudoku(grid, rng)) {
            sb.append(v);
        }
        return new Sudoku(diff, sb.toString());
    }

    /**
     * Biến đổi đối xứng (giữ tính duy nhất lời giải và mức kỹ thuật) — cùng thứ tự rút số với
     * client: hoán vị chữ số, hàng (dải rồi hàng trong dải), cột (chồng rồi cột trong chồng),
     * chuyển vị.
     */
    static int[] transformSudoku(int[] grid, DailyRandom rng) {
        List<Integer> digits = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9));
        rng.shuffle(digits);
        int[] rows = axis(rng);
        int[] cols = axis(rng);
        boolean transpose = rng.nextInt(2) == 1;
        int[] out = new int[81];
        for (int i = 0; i < 81; i++) {
            int r = i / 9;
            int c = i % 9;
            if (transpose) {
                int t = r;
                r = c;
                c = t;
            }
            int v = grid[rows[r] * 9 + cols[c]];
            out[i] = v == 0 ? 0 : digits.get(v - 1);
        }
        return out;
    }

    private static int[] axis(DailyRandom rng) {
        List<Integer> groups = new ArrayList<>(List.of(0, 1, 2));
        rng.shuffle(groups);
        List<List<Integer>> inner = new ArrayList<>();
        for (int g = 0; g < 3; g++) {
            inner.add(new ArrayList<>(List.of(0, 1, 2)));
        }
        for (List<Integer> l : inner) {
            rng.shuffle(l);
        }
        int[] map = new int[9];
        for (int k = 0; k < 9; k++) {
            map[k] = groups.get(k / 3) * 3 + inner.get(k / 3).get(k % 3);
        }
        return map;
    }

    static Puzzle puzzle(LocalDate date) {
        DailyRandom rng = DailyRandom.of("puzzle", date);
        String art = PUZZLE_ART.get(rng.nextInt(PUZZLE_ART.size()));
        int seed = rng.nextInt(0x7FFFFFFF);
        String level = switch (date.getDayOfWeek()) {
            case MONDAY, TUESDAY -> "3x3";
            case WEDNESDAY, THURSDAY, FRIDAY -> "4x4";
            default -> "5x5";
        };
        return new Puzzle(art, level, seed);
    }

    static Caro caro(LocalDate date) {
        DailyRandom rng = DailyRandom.of("caro", date);
        List<Integer> pos = CARO_POSITIONS.get(rng.nextInt(CARO_POSITIONS.size()));
        DayOfWeek d = date.getDayOfWeek();
        String level = d == DayOfWeek.SATURDAY || d == DayOfWeek.SUNDAY ? "hard" : "medium";
        return new Caro(level, "X", pos);
    }
}
