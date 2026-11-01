package com.gamehub.server.common;

/** Làm sạch văn bản người dùng nhập (lời nhắn, tin nhắn, lý do báo cáo). */
public final class Text {

    private Text() {
    }

    /**
     * Bỏ ký tự điều khiển (trừ xuống dòng), gộp quá 2 dòng trống, cắt khoảng trắng hai đầu.
     * Trả về {@code null} nếu rỗng. Không escape HTML: client hiển thị dạng văn bản thuần.
     */
    public static String clean(String s) {
        if (s == null) {
            return null;
        }
        String t = s.replace("\r\n", "\n")
                .replaceAll("[\\p{Cntrl}&&[^\n]]", "")
                .replaceAll("\n{3,}", "\n\n")
                .strip();
        return t.isEmpty() ? null : t;
    }
}
