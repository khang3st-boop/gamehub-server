package com.gamehub.server.match;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

/** Điểm xếp hạng online (Elo) của một người trong một game. */
@Entity
@Table(name = "user_ratings")
@IdClass(UserRating.Key.class)
public class UserRating {

    public static final int INITIAL = 1200;

    public static class Key implements Serializable {
        private static final long serialVersionUID = 1L;
        private UUID userId;
        private String game;

        public Key() {
        }

        public Key(UUID userId, String game) {
            this.userId = userId;
            this.game = game;
        }

        @Override
        public boolean equals(Object o) {
            return o instanceof Key k && Objects.equals(userId, k.userId) && Objects.equals(game, k.game);
        }

        @Override
        public int hashCode() {
            return Objects.hash(userId, game);
        }
    }

    @Id
    @Column(name = "user_id")
    private UUID userId;

    @Id
    @Column(length = 16)
    private String game;

    @Column(nullable = false)
    private int rating;

    @Column(nullable = false)
    private int played;

    @Column(nullable = false)
    private int wins;

    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    protected UserRating() {
    }

    public UserRating(UUID userId, String game, Instant now) {
        this.userId = userId;
        this.game = game;
        this.rating = INITIAL;
        this.updatedAt = now;
    }

    public void record(int newRating, boolean win, Instant now) {
        this.rating = newRating;
        this.played++;
        if (win) {
            this.wins++;
        }
        this.updatedAt = now;
    }

    public UUID getUserId() {
        return userId;
    }

    public String getGame() {
        return game;
    }

    public int getRating() {
        return rating;
    }

    public int getPlayed() {
        return played;
    }

    public int getWins() {
        return wins;
    }
}
