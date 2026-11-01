package com.gamehub.server.daily;

import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.format.ResolverStyle;
import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;

/**
 * Bộ sinh số mulberry32 và các tiện ích ngày của thử thách hằng ngày — GIỐNG HỆT
 * {@code lib/features/daily/domain/daily_random.dart} ở client. Đổi bất kỳ quy tắc nào ở đây
 * phải đổi cả client và tăng {@link #RULES_VERSION}.
 *
 * <p>Kế thừa {@link Random} để dùng lại {@code CubieCube.scramble}; chỉ {@link #nextInt(int)}
 * được ghi đè và được dùng để sinh đề.
 */
public final class DailyRandom extends Random {

    private static final long serialVersionUID = 1L;

    public static final String RULES_VERSION = "v1";
    /** Múi giờ cố định UTC+7: ngày mới bắt đầu lúc 17:00 UTC hôm trước. */
    public static final ZoneOffset ZONE = ZoneOffset.ofHours(7);
    /** Ngày sớm nhất có thử thách. */
    public static final LocalDate FIRST_DAY = LocalDate.of(2026, 1, 1);

    private static final Pattern DATE = Pattern.compile("^\\d{4}-\\d{2}-\\d{2}$");
    private static final DateTimeFormatter STRICT = DateTimeFormatter.ofPattern("uuuu-MM-dd")
            .withResolverStyle(ResolverStyle.STRICT);

    private int state;

    public DailyRandom(int seed) {
        super(0);
        this.state = seed;
    }

    /** Bộ sinh của trò {@code game} trong ngày {@code date}. */
    public static DailyRandom of(String game, LocalDate date) {
        return new DailyRandom(fnv1a32("gamehub-daily-" + RULES_VERSION + "|" + game + "|" + date));
    }

    /** FNV-1a 32 bit trên các byte UTF-8 (int có dấu; {@code & 0xFFFFFFFFL} để đọc không dấu). */
    public static int fnv1a32(String text) {
        int h = 0x811C9DC5;
        for (byte b : text.getBytes(StandardCharsets.UTF_8)) {
            h ^= b & 0xFF;
            h *= 0x01000193;
        }
        return h;
    }

    /** Số nguyên không dấu 32 bit tiếp theo (mulberry32). */
    public long nextUint32() {
        state += 0x6D2B79F5;
        int t = state;
        t = (t ^ (t >>> 15)) * (t | 1);
        t ^= t + (t ^ (t >>> 7)) * (t | 61);
        return (t ^ (t >>> 14)) & 0xFFFFFFFFL;
    }

    /** Số trong {@code [0, bound)}: {@code (nextUint32 · bound) >> 32}. */
    @Override
    public int nextInt(int bound) {
        if (bound <= 0) {
            throw new IllegalArgumentException("bound phải dương");
        }
        return (int) ((nextUint32() * bound) >>> 32);
    }

    /** Xáo trộn Fisher–Yates (i từ cuối về 1, j = nextInt(i + 1)) — giống client. */
    public <T> void shuffle(List<T> list) {
        for (int i = list.size() - 1; i > 0; i--) {
            int j = nextInt(i + 1);
            T t = list.get(i);
            list.set(i, list.get(j));
            list.set(j, t);
        }
    }

    // ------------------------------------------------------------------ ngày

    /** Ngày thử thách (UTC+7) chứa thời điểm {@code t}. */
    public static LocalDate dayOf(Instant t) {
        return t.atOffset(ZONE).toLocalDate();
    }

    /** Thời điểm bắt đầu ngày thử thách. */
    public static Instant startOf(LocalDate day) {
        return day.atStartOfDay().toInstant(ZONE);
    }

    /** Thời điểm kết thúc (không bao gồm) của ngày thử thách. */
    public static Instant endOf(LocalDate day) {
        return startOf(day).plus(Duration.ofDays(1));
    }

    /** {@code yyyy-MM-dd} hợp lệ → ngày; sai định dạng hoặc ngày không tồn tại → null. */
    public static LocalDate parse(String text) {
        if (text == null || !DATE.matcher(text).matches()) {
            return null;
        }
        try {
            return LocalDate.parse(text, STRICT);
        } catch (DateTimeParseException e) {
            return null;
        }
    }
}
