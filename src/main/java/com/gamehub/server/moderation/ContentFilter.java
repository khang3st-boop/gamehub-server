package com.gamehub.server.moderation;

import java.text.Normalizer;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Bộ lọc nội dung đơn giản cho chat: che từ ngữ thô tục (tiếng Việt có/không dấu, tiếng Anh)
 * bằng {@code ***} và chặn tên hiển thị giả danh hệ thống. Không thay thế kiểm duyệt của con
 * người — người dùng vẫn chặn/báo cáo được.
 */
public final class ContentFilter {

    private ContentFilter() {
    }

    /** So khớp sau khi bỏ dấu, viết thường, theo nguyên từ (tránh che nhầm "dmsoft"...). */
    private static final Set<String> BAD_WORDS = Set.of(
            "dm", "dmm", "dcm", "dkm", "dit", "du", "lon", "cac", "buoi", "deo", "vcl", "vkl", "vl", "clm",
            "cmm", "cc", "occho", "ditme", "dume", "duma", "fuck", "fucking", "shit", "bitch", "cunt", "dick");

    /** Một số từ cần ngữ cảnh có dấu mới tính là thô tục (không dấu trùng từ thường: "du", "lon", "cac"). */
    private static final Set<String> ACCENT_ONLY = Set.of("du", "lon", "cac", "deo", "dit");
    private static final Set<String> ACCENTED_BAD = Set.of("đụ", "lồn", "cặc", "đéo", "địt");

    private static final Pattern WORD = Pattern.compile("[\\p{L}\\p{N}]+");

    private static final Set<String> RESERVED_NAMES = Set.of(
            "admin", "administrator", "quantri", "quantrivien", "hethong", "system", "gamehub", "moderator",
            "kiemduyet", "support", "hotro", "official");

    /** Văn bản đã che từ thô tục. */
    public static String mask(String text) {
        if (text == null) {
            return null;
        }
        Matcher m = WORD.matcher(text);
        StringBuilder out = new StringBuilder(text.length());
        while (m.find()) {
            String word = m.group();
            String lower = word.toLowerCase(Locale.ROOT);
            String plain = fold(word);
            boolean bad = BAD_WORDS.contains(plain)
                    && (!ACCENT_ONLY.contains(plain) || ACCENTED_BAD.contains(lower));
            m.appendReplacement(out, bad ? "***" : Matcher.quoteReplacement(word));
        }
        m.appendTail(out);
        return out.toString();
    }

    /** Tên hiển thị kiểu "Admin", "Hệ thống", "GameHub" bị cấm để không giả danh. */
    public static boolean isReservedName(String name) {
        if (name == null) {
            return false;
        }
        String compact = fold(name).replaceAll("[^a-z0-9]", "");
        for (String r : RESERVED_NAMES) {
            if (compact.equals(r) || compact.startsWith(r) && compact.length() <= r.length() + 3) {
                return true;
            }
        }
        return false;
    }

    /** Bỏ dấu tiếng Việt, đ → d, viết thường. */
    static String fold(String s) {
        String n = Normalizer.normalize(s, Normalizer.Form.NFD).replaceAll("\\p{M}", "");
        return n.replace('đ', 'd').replace('Đ', 'D').toLowerCase(Locale.ROOT);
    }
}
