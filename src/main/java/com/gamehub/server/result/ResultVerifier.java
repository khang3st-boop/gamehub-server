package com.gamehub.server.result;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

import com.gamehub.server.daily.DailyChallenges;
import com.gamehub.server.daily.DailyRandom;
import com.gamehub.server.game.Scoring;
import com.gamehub.server.game.caro.Caro;
import com.gamehub.server.game.rubik.CubieCube;
import com.gamehub.server.game.rubik.CubieCube.Move;
import com.gamehub.server.game.sudoku.Sudoku;
import com.gamehub.server.result.ResultDtos.ResultPayload;

/**
 * Kiểm tra một kết quả gửi từ client và TÍNH LẠI điểm. Server không tin điểm client gửi:
 * điểm lưu luôn là điểm do server tính từ dữ liệu ván (phát lại lời giải Rubik, giải lại
 * Sudoku, phát lại ván Caro...). Dữ liệu sai/không khả tín bị từ chối kèm lý do.
 */
@Component
public class ResultVerifier {

    public static final Duration MAX_DURATION = Duration.ofHours(24);
    public static final Duration MAX_CLOCK_SKEW = Duration.ofMinutes(5);
    static final int MAX_COUNTER = 100_000;
    private static final Pattern PUZZLE_MODE = Pattern.compile("^([3-6])x([3-6])$");
    private static final Pattern CARO_MODE = Pattern.compile("^(easy|medium|hard)-(x|o)$");

    private final Clock clock;

    public ResultVerifier(Clock clock) {
        this.clock = clock;
    }

    /** Kết quả đã kiểm tra: điểm server tính, có dùng trợ giúp, có được xếp hạng. */
    public record Verified(int score, boolean assisted, boolean rankable) {
    }

    /** Kết quả bị từ chối; {@link #getMessage()} là lý do tiếng Việt hiển thị cho người chơi. */
    public static class Rejected extends RuntimeException {
        public Rejected(String reason) {
            super(reason, null, false, false);
        }
    }

    public Verified verify(ResultPayload r) {
        if (r.durationMs() < 0 || r.durationMs() > MAX_DURATION.toMillis()) {
            throw new Rejected("Thời gian chơi không hợp lệ");
        }
        if (r.playedAt().isAfter(Instant.now(clock).plus(MAX_CLOCK_SKEW))) {
            throw new Rejected("Thời điểm chơi nằm ở tương lai");
        }
        if (r.moves() < 0 || r.errors() < 0 || r.hints() < 0
                || r.moves() > MAX_COUNTER || r.errors() > MAX_COUNTER || r.hints() > MAX_COUNTER) {
            throw new Rejected("Số liệu ván chơi không hợp lệ");
        }
        if (!List.of("win", "loss", "draw").contains(r.outcome())) {
            throw new Rejected("Kết quả ván không hợp lệ");
        }
        Map<String, Object> d = r.details() == null ? Map.of() : r.details();
        if (d.containsKey("daily")) {
            daily(r, d);
        } else if (r.game().equals("rubik") && r.mode().equals("daily")) {
            throw new Rejected("Thiếu ngày của thử thách hằng ngày");
        }
        return switch (r.game()) {
            case "rubik" -> rubik(r, d);
            case "sudoku" -> sudoku(r, d);
            case "puzzle" -> puzzle(r, d);
            case "caro" -> caro(r, d);
            default -> throw new Rejected("Trò chơi không được hỗ trợ");
        };
    }

    // ------------------------------------------------------------------ Rubik

    /** Thử thách 15 nước: xáo trộn và lời giải đều tối đa 15 nước HTM (mỗi U, U2, U' là 1). */
    static final String SHORT_MODE = "short15";
    static final int SHORT_LIMIT = 15;

    private Verified rubik(ResultPayload r, Map<String, Object> d) {
        if (!List.of("scramble", "challenge", "daily", SHORT_MODE).contains(r.mode())) {
            throw new Rejected("Chế độ Rubik không hợp lệ");
        }
        boolean shortChallenge = r.mode().equals(SHORT_MODE);
        // Thử thách 15 nước: giải xong nhưng quá 15 nước HTM được ghi nhận là "loss".
        if (!r.outcome().equals("win") && !(shortChallenge && r.outcome().equals("loss"))) {
            throw new Rejected("Ván Rubik chỉ được ghi nhận khi đã giải xong");
        }
        List<Move> scramble = parseMoves(string(d, "scramble"), 100, "chuỗi xáo trộn");
        List<Move> solution = parseMoves(string(d, "solution"), 5000, "lời giải");
        if (scramble.isEmpty()) {
            throw new Rejected("Thiếu chuỗi xáo trộn");
        }
        if (shortChallenge && scramble.size() > SHORT_LIMIT) {
            throw new Rejected("Xáo trộn thử thách 15 nước quá dài");
        }
        if (shortChallenge && r.outcome().equals("win") != (solution.size() <= SHORT_LIMIT)) {
            throw new Rejected("Kết quả thử thách 15 nước không khớp với số nước");
        }
        if (!CubieCube.SOLVED.apply(scramble).apply(solution).isSolved()) {
            throw new Rejected("Lời giải không đưa khối Rubik về trạng thái đã giải");
        }
        if (r.moves() != solution.size()) {
            throw new Rejected("Số nước không khớp với lời giải");
        }
        int assistMoves = integer(d, "assistMoves", 0);
        boolean autoSolve = bool(d, "autoSolve");
        if (assistMoves < 0 || assistMoves > solution.size()) {
            throw new Rejected("Số nước trợ giúp không hợp lệ");
        }
        boolean assisted = r.assisted() || r.hints() > 0 || autoSolve || assistMoves > 0;
        if (!assisted && r.durationMs() < Math.max(1000L, 70L * solution.size())) {
            throw new Rejected("Thời gian giải nhanh bất thường so với số nước");
        }
        if (shortChallenge) {
            // Không xếp hạng chung: xáo trộn ngắn sẽ làm lệch bảng xếp hạng Rubik thường.
            int score = r.outcome().equals("win") ? Scoring.rubik(r.durationMs(), solution.size(), r.hints(), autoSolve) : 0;
            return new Verified(score, assisted, false);
        }
        return new Verified(Scoring.rubik(r.durationMs(), solution.size(), r.hints(), autoSolve), assisted, !assisted);
    }

    /** Dùng chung cho thử thách: phát lại lời giải trên chuỗi xáo trộn của server. */
    public static List<Move> replayRubik(String scramble, String solution) {
        List<Move> moves = parseMoves(solution, 5000, "lời giải");
        if (!CubieCube.SOLVED.apply(Move.parseSequence(scramble)).apply(moves).isSolved()) {
            throw new Rejected("Lời giải không đưa khối Rubik về trạng thái đã giải");
        }
        return moves;
    }

    private static List<Move> parseMoves(String text, int max, String what) {
        try {
            List<Move> moves = Move.parseSequence(text);
            if (moves.size() > max) {
                throw new Rejected("Quá nhiều nước trong " + what);
            }
            return moves;
        } catch (IllegalArgumentException e) {
            throw new Rejected("Ký hiệu nước xoay không hợp lệ trong " + what);
        }
    }

    // ------------------------------------------------------------- Hằng ngày

    /**
     * Kết quả khai báo {@code details.daily}: ngày phải hợp lệ (không ở tương lai) và dữ liệu ván
     * phải đúng đề server sinh cho ngày đó. Việc xếp hạng theo ngày do {@code ResultService} quyết
     * định dựa trên thời điểm nhận (kết quả offline/gửi muộn vẫn được lưu nhưng không xếp hạng ngày).
     */
    private void daily(ResultPayload r, Map<String, Object> d) {
        LocalDate day = DailyRandom.parse(string(d, "daily"));
        LocalDate today = DailyRandom.dayOf(Instant.now(clock).plus(MAX_CLOCK_SKEW));
        if (day == null || day.isBefore(DailyRandom.FIRST_DAY) || day.isAfter(today)) {
            throw new Rejected("Ngày thử thách hằng ngày không hợp lệ");
        }
        DailyChallenges.Challenge c = DailyChallenges.forDate(day);
        boolean ok = switch (r.game()) {
            case "rubik" -> r.mode().equals("daily")
                    && Move.format(parseMoves(string(d, "scramble"), 100, "chuỗi xáo trộn"))
                            .equals(c.rubik().scramble());
            case "sudoku" -> r.mode().equals(c.sudoku().difficulty())
                    && c.sudoku().puzzle().equals(string(d, "puzzle"));
            case "puzzle" -> r.mode().equals(c.puzzle().level())
                    && c.puzzle().image().equals(string(d, "image"))
                    && integer(d, "seed", -1) == c.puzzle().seed();
            case "caro" -> {
                List<Integer> moves = intList(d.get("moves"));
                List<Integer> prefix = c.caro().moves();
                yield r.mode().equals(c.caro().resultMode()) && moves != null && moves.size() >= prefix.size()
                        && moves.subList(0, prefix.size()).equals(prefix);
            }
            default -> false;
        };
        if (!ok) {
            throw new Rejected("Đề thử thách hằng ngày không khớp");
        }
    }

    // ----------------------------------------------------------------- Sudoku

    private Verified sudoku(ResultPayload r, Map<String, Object> d) {
        int minLevel = switch (r.mode()) {
            case "easy" -> 1;
            case "medium" -> 2;
            case "hard" -> 3;
            default -> throw new Rejected("Độ khó Sudoku không hợp lệ");
        };
        if (!r.outcome().equals("win")) {
            throw new Rejected("Ván Sudoku chỉ được ghi nhận khi đã giải xong");
        }
        int[] puzzle = Sudoku.parse(string(d, "puzzle"));
        int[] solution = Sudoku.parse(string(d, "solution"));
        if (puzzle == null || solution == null || !Sudoku.isValidGrid(puzzle)) {
            throw new Rejected("Đề hoặc lời giải Sudoku sai định dạng");
        }
        if (!Sudoku.isSolved(solution)) {
            throw new Rejected("Lời giải Sudoku chưa đúng");
        }
        int blanks = 0;
        for (int i = 0; i < 81; i++) {
            if (puzzle[i] == 0) {
                blanks++;
            } else if (puzzle[i] != solution[i]) {
                throw new Rejected("Lời giải không khớp với các ô cho sẵn");
            }
        }
        if (Sudoku.countSolutions(puzzle, 2) != 1) {
            throw new Rejected("Đề Sudoku không có lời giải duy nhất");
        }
        if (Sudoku.rate(puzzle) < minLevel) {
            throw new Rejected("Đề dễ hơn độ khó đã khai báo");
        }
        if (r.moves() != blanks) {
            throw new Rejected("Số ô đã điền không khớp với đề");
        }
        if (r.hints() > blanks) {
            throw new Rejected("Số gợi ý không hợp lệ");
        }
        if (r.durationMs() < 250L * (blanks - r.hints())) {
            throw new Rejected("Thời gian giải nhanh bất thường");
        }
        return new Verified(Scoring.sudoku(r.mode(), r.durationMs(), r.errors(), r.hints()), r.assisted(),
                !r.assisted());
    }

    // --------------------------------------------------------------- Xếp hình

    private Verified puzzle(ResultPayload r, Map<String, Object> d) {
        Matcher m = PUZZLE_MODE.matcher(r.mode());
        if (!m.matches() || !m.group(1).equals(m.group(2))) {
            throw new Rejected("Cấp độ xếp hình không hợp lệ");
        }
        if (!r.outcome().equals("win")) {
            throw new Rejected("Ván xếp hình chỉ được ghi nhận khi đã hoàn thành");
        }
        int n = Integer.parseInt(m.group(1));
        int pieces = n * n;
        if (integer(d, "pieces", -1) != pieces) {
            throw new Rejected("Số mảnh không khớp với cấp độ");
        }
        String image = string(d, "image");
        if (image == null || image.isBlank() || image.length() > 64) {
            throw new Rejected("Thiếu thông tin tranh");
        }
        if (r.hints() > pieces) {
            throw new Rejected("Số gợi ý không hợp lệ");
        }
        if (r.moves() != pieces - r.hints() + r.errors()) {
            throw new Rejected("Số lần thả mảnh không khớp");
        }
        if (r.durationMs() < 400L * (pieces - r.hints())) {
            throw new Rejected("Thời gian ghép nhanh bất thường");
        }
        return new Verified(Scoring.puzzle(pieces, r.durationMs(), r.errors(), r.hints()), r.assisted(),
                !r.assisted());
    }

    // ------------------------------------------------------------------- Caro

    private Verified caro(ResultPayload r, Map<String, Object> d) {
        Matcher m = CARO_MODE.matcher(r.mode());
        if (!m.matches()) {
            throw new Rejected("Chế độ Caro không hợp lệ");
        }
        String level = m.group(1);
        int player = m.group(2).equals("x") ? Caro.X : Caro.O;
        String playerSymbol = string(d, "player");
        if (playerSymbol != null && !playerSymbol.equalsIgnoreCase(m.group(2))) {
            throw new Rejected("Quân của người chơi không khớp với chế độ");
        }
        String detailLevel = string(d, "level");
        if (detailLevel != null && !detailLevel.equals(level)) {
            throw new Rejected("Mức AI không khớp với chế độ");
        }
        List<Integer> moves = intList(d.get("moves"));
        if (moves == null || moves.size() > Caro.CELLS) {
            throw new Rejected("Danh sách nước đi Caro không hợp lệ");
        }
        Caro.Replay replay;
        try {
            replay = Caro.replay(moves, 3 - player, !level.equals("easy"));
        } catch (IllegalArgumentException e) {
            throw new Rejected("Ván Caro không hợp lệ: " + e.getMessage());
        }
        int playerMoves = player == Caro.X ? (moves.size() + 1) / 2 : moves.size() / 2;
        if (r.moves() != playerMoves) {
            throw new Rejected("Số nước của người chơi không khớp");
        }
        if (r.errors() > playerMoves || r.hints() > playerMoves) {
            throw new Rejected("Số sai lầm hoặc gợi ý không hợp lệ");
        }
        boolean resigned = bool(d, "resigned");
        String expected;
        if (resigned) {
            if (replay.over()) {
                throw new Rejected("Không thể đầu hàng khi ván đã kết thúc");
            }
            expected = "loss";
        } else {
            if (!replay.over()) {
                throw new Rejected("Ván Caro chưa kết thúc");
            }
            expected = replay.winner() == 0 ? "draw" : replay.winner() == player ? "win" : "loss";
        }
        if (!r.outcome().equals(expected)) {
            throw new Rejected("Kết quả không khớp với diễn biến ván");
        }
        if (r.durationMs() < 200L * playerMoves) {
            throw new Rejected("Thời gian chơi ngắn bất thường");
        }
        int score = resigned ? 0 : Scoring.caro(level, expected, playerMoves, r.hints());
        return new Verified(score, r.assisted(), !r.assisted());
    }

    // ---------------------------------------------------------------- helpers

    private static String string(Map<String, Object> d, String key) {
        Object v = d.get(key);
        return v instanceof String s ? s : null;
    }

    private static boolean bool(Map<String, Object> d, String key) {
        return Boolean.TRUE.equals(d.get(key));
    }

    private static int integer(Map<String, Object> d, String key, int fallback) {
        Object v = d.get(key);
        if (v instanceof Number n && n.doubleValue() == Math.rint(n.doubleValue())
                && Math.abs(n.doubleValue()) <= Integer.MAX_VALUE) {
            return n.intValue();
        }
        return fallback;
    }

    private static List<Integer> intList(Object v) {
        if (!(v instanceof List<?> list)) {
            return null;
        }
        List<Integer> out = new ArrayList<>(list.size());
        for (Object o : list) {
            if (!(o instanceof Number n) || n.doubleValue() != Math.rint(n.doubleValue())) {
                return null;
            }
            out.add(n.intValue());
        }
        return out;
    }
}
