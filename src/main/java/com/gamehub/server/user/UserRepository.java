package com.gamehub.server.user;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, UUID> {

    Optional<User> findByUsernameKey(String usernameKey);

    boolean existsByUsernameKey(String usernameKey);

    /**
     * Tìm theo tiền tố tên đăng nhập hoặc một phần tên hiển thị (không phân biệt hoa/thường).
     * {@code q} phải đã được escape ký tự {@code \ % _} (xem UserService).
     */
    @Query("""
            select u from User u
            where u.id <> :me
              and (u.usernameKey like concat(:q, '%') escape '\\'
                   or lower(u.displayName) like concat('%', :q, '%') escape '\\')
            order by u.usernameKey
            """)
    List<User> search(@Param("me") UUID me, @Param("q") String q, Pageable page);
}
