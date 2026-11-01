package com.gamehub.server.nearby;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PresenceRepository extends JpaRepository<Presence, UUID> {

    /** Ứng viên trong khung chữ nhật bao quanh vòng tròn bán kính; lọc khoảng cách chính xác ở Java. */
    @Query("""
            select p from Presence p
            where p.expiresAt > :now and p.userId <> :me
              and p.cellLat between :minLat and :maxLat
              and p.cellLon between :minLon and :maxLon
            order by p.updatedAt desc
            """)
    List<Presence> inBox(@Param("me") UUID me, @Param("now") Instant now,
            @Param("minLat") double minLat, @Param("maxLat") double maxLat,
            @Param("minLon") double minLon, @Param("maxLon") double maxLon, Pageable page);

    @Modifying
    @Query("delete from Presence p where p.expiresAt <= :now")
    int deleteExpired(@Param("now") Instant now);
}
