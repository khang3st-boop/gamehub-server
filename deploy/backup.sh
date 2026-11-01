#!/usr/bin/env sh
# Sao lưu PostgreSQL (định dạng custom, nén) vào deploy/backups/, giữ 14 bản gần nhất.
# Dùng cron trên VPS, ví dụ 3 giờ sáng hằng ngày:
#   0 3 * * * cd /opt/gamehub/backend/deploy && ./backup.sh >> backups/backup.log 2>&1
set -eu
cd "$(dirname "$0")"
mkdir -p backups
stamp=$(date +%Y%m%d_%H%M%S)
docker compose exec -T db sh -c 'pg_dump -U "$POSTGRES_USER" -d gamehub -Fc' > "backups/gamehub_$stamp.dump"
ls -1t backups/gamehub_*.dump | tail -n +15 | xargs -r rm --
echo "OK backups/gamehub_$stamp.dump"
