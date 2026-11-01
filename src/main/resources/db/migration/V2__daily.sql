-- Thử thách hằng ngày: ngày (UTC+7, yyyy-MM-dd) mà kết quả được xếp hạng. NULL = không phải
-- kết quả hằng ngày đã xác thực (ván thường, chơi offline/gửi muộn, luyện lại đề ngày cũ).
ALTER TABLE game_results ADD COLUMN daily_date VARCHAR(10);
CREATE INDEX ix_results_daily ON game_results (daily_date, game);
