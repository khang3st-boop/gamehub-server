package com.gamehub.server.challenge;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChallengeRepository extends JpaRepository<Challenge, UUID> {

    @Query("""
            select c from Challenge c
            where c.creatorId = :user or c.opponentId = :user
            order by c.createdAt desc
            """)
    List<Challenge> mine(@Param("user") UUID user, Pageable page);

    /** Thử thách công khai đang chờ người nhận (không chỉ định đối thủ). */
    @Query("""
            select c from Challenge c
            where c.status = com.gamehub.server.challenge.Challenge.Status.OPEN
              and c.opponentId is null and c.creatorId <> :user and c.expiresAt > :now
            order by c.createdAt desc
            """)
    List<Challenge> open(@Param("user") UUID user, @Param("now") Instant now, Pageable page);

    @Query("""
            select c from Challenge c
            where c.status in (com.gamehub.server.challenge.Challenge.Status.OPEN,
                               com.gamehub.server.challenge.Challenge.Status.ACCEPTED)
              and c.expiresAt <= :now
            """)
    List<Challenge> due(@Param("now") Instant now, Pageable page);

    @Query("""
            select count(c) from Challenge c
            where c.creatorId = :user and c.status = com.gamehub.server.challenge.Challenge.Status.OPEN
            """)
    long countOpenBy(@Param("user") UUID user);
}
