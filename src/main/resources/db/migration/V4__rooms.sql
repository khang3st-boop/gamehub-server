-- Phòng đấu 2/4 người, giải Caro 4 người (2 bán kết + chung kết), khoá trợ giúp.
-- CHỈ THÊM cột / nới ràng buộc: không xoá hay sửa dữ liệu cũ. Trận cũ có capacity = 2.

ALTER TABLE matches ALTER COLUMN player_b DROP NOT NULL;   -- phòng chờ: ghế trống cho tới khi có người vào

ALTER TABLE matches ADD COLUMN capacity INTEGER NOT NULL DEFAULT 2;
ALTER TABLE matches ADD COLUMN player_c UUID REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE matches ADD COLUMN player_d UUID REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE matches ADD COLUMN c_ready BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE matches ADD COLUMN d_ready BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE matches ADD COLUMN c_time_ms BIGINT;
ALTER TABLE matches ADD COLUMN d_time_ms BIGINT;
ALTER TABLE matches ADD COLUMN c_assisted BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE matches ADD COLUMN d_assisted BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE matches ADD COLUMN c_progress INTEGER NOT NULL DEFAULT 0;
ALTER TABLE matches ADD COLUMN d_progress INTEGER NOT NULL DEFAULT 0;
-- Bit theo ghế A=1, B=2, C=4, D=8: đã rời / rớt mạng / bị loại (không còn thi đấu).
ALTER TABLE matches ADD COLUMN out_mask INTEGER NOT NULL DEFAULT 0;
-- Hạng cuối theo ghế, vd "1,3,2,3" (giải Caro 4 người); trận đua tính từ thời gian.
ALTER TABLE matches ADD COLUMN ranks VARCHAR(16);
-- Mã phòng 6 ký tự để bạn bè vào phòng (chỉ phòng tạo tay).
ALTER TABLE matches ADD COLUMN room_code VARCHAR(8);
-- Trận con của giải Caro 4 người.
ALTER TABLE matches ADD COLUMN parent_id UUID REFERENCES matches (id) ON DELETE CASCADE;
ALTER TABLE matches ADD COLUMN stage VARCHAR(8);              -- SEMI1 | SEMI2 | FINAL

CREATE INDEX ix_matches_c ON matches (player_c, created_at);
CREATE INDEX ix_matches_d ON matches (player_d, created_at);
CREATE INDEX ix_matches_room_code ON matches (room_code);
CREATE INDEX ix_matches_parent ON matches (parent_id);
