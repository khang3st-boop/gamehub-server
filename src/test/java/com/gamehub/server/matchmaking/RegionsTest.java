package com.gamehub.server.matchmaking;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class RegionsTest {

    @Test
    void tiersAreCoarseAndSymmetric() {
        assertEquals(0, Regions.tier("VN-HN", "VN-HN"));
        assertEquals(1, Regions.tier("VN-HN", "VN-BTB"));
        assertEquals(1, Regions.tier("VN-BTB", "VN-HN"));
        assertEquals(2, Regions.tier("VN-HN", "VN-HCM"));
        assertEquals(2, Regions.tier("ANY", "VN-HN"));
        for (var r : Regions.ALL) {
            for (String n : r.neighbours()) {
                assertTrue(Regions.neighbours(n).contains(r.code()), r.code() + " ↔ " + n);
            }
        }
    }

    @Test
    void onlyKnownCodesAreAccepted() {
        assertTrue(Regions.valid("VN-CT"));
        assertTrue(Regions.valid("ANY"));
        assertFalse(Regions.valid("21.0285,105.8542"));
        assertFalse(Regions.valid(""));
    }
}
