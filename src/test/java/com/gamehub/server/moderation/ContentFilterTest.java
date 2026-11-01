package com.gamehub.server.moderation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ContentFilterTest {

    @Test
    void masksWholeBadWordsOnly() {
        assertEquals("*** thật", ContentFilter.mask("vcl thật"));
        assertEquals("Ôi *** quá", ContentFilter.mask("Ôi Đéo quá"));
        // Không che nhầm từ chứa chuỗi con, hay từ thường không dấu.
        assertEquals("dmsoft du lịch con lợn", ContentFilter.mask("dmsoft du lịch con lợn"));
        assertEquals("Chơi hay lắm!", ContentFilter.mask("Chơi hay lắm!"));
    }

    @Test
    void reservedNamesBlockImpersonation() {
        assertTrue(ContentFilter.isReservedName("Admin"));
        assertTrue(ContentFilter.isReservedName("Hệ Thống"));
        assertTrue(ContentFilter.isReservedName("admin_01"));
        assertTrue(ContentFilter.isReservedName("Quản trị viên"));
        assertFalse(ContentFilter.isReservedName("Khang"));
        assertFalse(ContentFilter.isReservedName("Người chơi 1"));
    }
}
