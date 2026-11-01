package com.gamehub.server.challenge;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

import org.junit.jupiter.api.Test;

class ChallengeTest {

    final UUID a = UUID.randomUUID();
    final UUID b = UUID.randomUUID();
    final Instant t0 = Instant.parse("2026-10-31T00:00:00Z");

    Challenge accepted() {
        Challenge c = new Challenge(a, b, "R U", false, null, t0, t0.plus(Duration.ofHours(72)));
        c.accept(b, t0.plusSeconds(10));
        return c;
    }

    @Test
    void unassistedBeatsAssistedThenTimeThenMoves() {
        var fastAssisted = new Challenge.Entry(10_000, 20, true);
        var slowSelf = new Challenge.Entry(90_000, 60, false);
        assertThat(Challenge.compare(slowSelf, fastAssisted)).isNegative();
        assertThat(Challenge.compare(new Challenge.Entry(5, 9, false), new Challenge.Entry(6, 1, false))).isNegative();
        assertThat(Challenge.compare(new Challenge.Entry(5, 9, false), new Challenge.Entry(5, 8, false))).isPositive();
        assertThat(Challenge.compare(new Challenge.Entry(5, 9, false), new Challenge.Entry(5, 9, false))).isZero();
    }

    @Test
    void bothSubmittedCompletesWithWinner() {
        Challenge c = accepted();
        c.submit(a, "x1", 50_000, 30, false, "", t0.plusSeconds(60));
        assertThat(c.getStatus()).isEqualTo(Challenge.Status.ACCEPTED);
        c.submit(b, "x2", 40_000, 30, false, "", t0.plusSeconds(70));
        assertThat(c.getStatus()).isEqualTo(Challenge.Status.COMPLETED);
        assertThat(c.getWinnerId()).isEqualTo(b);
    }

    @Test
    void fullTieHasNoWinner() {
        Challenge c = accepted();
        c.submit(a, "x1", 50_000, 30, false, "", t0.plusSeconds(60));
        c.submit(b, "x2", 50_000, 30, false, "", t0.plusSeconds(70));
        assertThat(c.getStatus()).isEqualTo(Challenge.Status.COMPLETED);
        assertThat(c.getWinnerId()).isNull();
    }

    @Test
    void expiryWithOneSubmissionAwardsThatPlayer() {
        Challenge c = accepted();
        c.submit(a, "x1", 50_000, 30, false, "", t0.plusSeconds(60));
        assertThat(c.expireIfDue(t0.plus(Duration.ofHours(71)))).isFalse();
        assertThat(c.expireIfDue(t0.plus(Duration.ofHours(72)))).isTrue();
        assertThat(c.getStatus()).isEqualTo(Challenge.Status.COMPLETED);
        assertThat(c.getWinnerId()).isEqualTo(a);
    }

    @Test
    void expiryWithoutSubmissionsExpires() {
        Challenge c = new Challenge(a, null, "R U", false, null, t0, t0.plus(Duration.ofHours(72)));
        assertThat(c.expireIfDue(t0.plus(Duration.ofDays(4)))).isTrue();
        assertThat(c.getStatus()).isEqualTo(Challenge.Status.EXPIRED);
        assertThat(c.getWinnerId()).isNull();
        assertThat(c.expireIfDue(t0.plus(Duration.ofDays(5)))).isFalse();
    }
}
