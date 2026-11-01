package com.gamehub.server.friends;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FriendshipRepository extends JpaRepository<Friendship, Long> {

    @Query("select f from Friendship f where f.userLow = :low and f.userHigh = :high")
    Optional<Friendship> findPair(@Param("low") UUID low, @Param("high") UUID high);

    default Optional<Friendship> between(UUID a, UUID b) {
        UUID[] p = Friendship.pair(a, b);
        return findPair(p[0], p[1]);
    }

    @Query("select f from Friendship f where (f.userLow = :me or f.userHigh = :me) and f.status = :status "
            + "order by f.createdAt desc")
    List<Friendship> involving(@Param("me") UUID me, @Param("status") String status);

    @Query("select case when f.userLow = :me then f.userHigh else f.userLow end from Friendship f "
            + "where (f.userLow = :me or f.userHigh = :me) and f.status = 'ACCEPTED'")
    List<UUID> friendIds(@Param("me") UUID me);

    @Modifying
    @Query("delete from Friendship f where f.userLow = :low and f.userHigh = :high")
    int deletePair(@Param("low") UUID low, @Param("high") UUID high);

    default int deleteBetween(UUID a, UUID b) {
        UUID[] p = Friendship.pair(a, b);
        return deletePair(p[0], p[1]);
    }

    default boolean areFriends(UUID a, UUID b) {
        return between(a, b).map(Friendship::isAccepted).orElse(false);
    }
}
