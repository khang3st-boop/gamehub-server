package com.gamehub.server.nearby;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Vị trí gần đúng của người chơi đã CHỦ ĐỘNG bật "Người chơi gần đây". Chỉ lưu ô lưới, không lưu toạ độ gốc. */
@Entity
@Table(name = "presence")
public class Presence {

    @Id
    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "cell_lat", nullable = false)
    private double cellLat;

    @Column(name = "cell_lon", nullable = false)
    private double cellLon;

    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    protected Presence() {
    }

    public Presence(UUID userId) {
        this.userId = userId;
    }

    public void update(double cellLat, double cellLon, Instant now, Instant expiresAt) {
        this.cellLat = cellLat;
        this.cellLon = cellLon;
        this.updatedAt = now;
        this.expiresAt = expiresAt;
    }

    public UUID getUserId() {
        return userId;
    }

    public double getCellLat() {
        return cellLat;
    }

    public double getCellLon() {
        return cellLon;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }
}
