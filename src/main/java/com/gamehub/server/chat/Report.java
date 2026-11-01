package com.gamehub.server.chat;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Báo cáo vi phạm; trạng thái NEW chờ quản trị viên xem xét (ngoài phạm vi ứng dụng). */
@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reporter_id", nullable = false)
    private UUID reporterId;

    @Column(name = "reported_id", nullable = false)
    private UUID reportedId;

    @Column(name = "message_id")
    private Long messageId;

    @Column(name = "match_message_id")
    private Long matchMessageId;

    @Column(nullable = false, length = 500)
    private String reason;

    @Column(nullable = false, length = 12)
    private String status;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    protected Report() {
    }

    public Report(UUID reporterId, UUID reportedId, Long messageId, String reason, Instant createdAt) {
        this.reporterId = reporterId;
        this.reportedId = reportedId;
        this.messageId = messageId;
        this.reason = reason;
        this.status = "NEW";
        this.createdAt = createdAt;
    }

    /** Báo cáo một tin nhắn trong phòng đấu (bảng match_messages). */
    public static Report forMatchMessage(UUID reporterId, UUID reportedId, Long matchMessageId, String reason,
            Instant createdAt) {
        Report r = new Report(reporterId, reportedId, null, reason, createdAt);
        r.matchMessageId = matchMessageId;
        return r;
    }

    public Long getId() {
        return id;
    }

    public UUID getReportedId() {
        return reportedId;
    }

    public Long getMessageId() {
        return messageId;
    }
}
