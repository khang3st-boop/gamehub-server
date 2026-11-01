package com.gamehub.server.user;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BlockRepository extends JpaRepository<Block, Long> {

    boolean existsByBlockerIdAndBlockedId(UUID blockerId, UUID blockedId);

    @Modifying
    @Query("delete from Block b where b.blockerId = :blocker and b.blockedId = :blocked")
    int deletePair(@Param("blocker") UUID blocker, @Param("blocked") UUID blocked);

    /** Mọi người dùng có quan hệ chặn với {@code me} (theo cả hai chiều). */
    @Query("""
            select case when b.blockerId = :me then b.blockedId else b.blockerId end
            from Block b where b.blockerId = :me or b.blockedId = :me
            """)
    List<UUID> relatedTo(@Param("me") UUID me);

    @Query("select b.blockedId from Block b where b.blockerId = :me")
    List<UUID> blockedBy(@Param("me") UUID me);
}
