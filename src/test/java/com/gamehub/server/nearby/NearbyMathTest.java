package com.gamehub.server.nearby;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.within;

import java.time.Instant;

import org.junit.jupiter.api.Test;

class NearbyMathTest {

    @Test
    void snapRoundsToHundredthOfDegree() {
        assertThat(NearbyService.snap(10.776889)).isCloseTo(10.78, within(1e-9));
        assertThat(NearbyService.snap(106.700981)).isCloseTo(106.70, within(1e-9));
        assertThat(NearbyService.snap(-33.86882)).isCloseTo(-33.87, within(1e-9));
    }

    @Test
    void distanceIsHaversine() {
        // Hà Nội – TP.HCM ≈ 1 137 km.
        assertThat(NearbyService.distanceKm(21.0285, 105.8542, 10.7769, 106.7009)).isBetween(1130.0, 1145.0);
        assertThat(NearbyService.distanceKm(10.0, 106.0, 10.0, 106.0)).isZero();
        assertThat(NearbyService.distanceKm(0, 0, 0.01, 0)).isCloseTo(1.11, within(0.01));
    }

    @Test
    void bucketsNeverRevealExactDistance() {
        assertThat(NearbyService.bucket(0)).isEqualTo("< 2 km");
        assertThat(NearbyService.bucket(1.99)).isEqualTo("< 2 km");
        assertThat(NearbyService.bucket(2)).isEqualTo("2–5 km");
        assertThat(NearbyService.bucket(7)).isEqualTo("5–10 km");
        assertThat(NearbyService.bucket(24)).isEqualTo("10–25 km");
        assertThat(NearbyService.bucket(49)).isEqualTo("25–50 km");
    }

    @Test
    void lastSeenIsCoarsenedToFiveMinutes() {
        assertThat(NearbyService.coarse(Instant.parse("2026-10-31T10:07:59Z")))
                .isEqualTo(Instant.parse("2026-10-31T10:05:00Z"));
    }
}
