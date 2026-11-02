#!/usr/bin/env sh
# Build Flutter Web và chép vào backend/web để server phục vụ cùng tên miền với API/WebSocket.
# Dùng:  sh scripts/update-web.sh "C:/Users/MY PC/StudioProjects/nguyenduongnhutkhang_4game"
# Sau đó commit thư mục backend/web → Cloud tự build lại image và triển khai bản web mới.
set -eu
APP_DIR="${1:?Truyền đường dẫn project Flutter}"
BACKEND_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$APP_DIR"
# Bản JS (không WASM) để tương thích Safari; không tải CanvasKit từ CDN (chạy được khi CDN bị chặn).
# Không truyền GAMEHUB_API_URL: bản web gọi API cùng origin với trang.
# Build both existing compute and Rubik image-processing workers before bundling.
bash tool/build_web.sh
rm -rf "$BACKEND_DIR/web"
mkdir -p "$BACKEND_DIR/web"
cp -R build/web/. "$BACKEND_DIR/web/"
echo "Đã chép Flutter Web vào $BACKEND_DIR/web ($(du -sh "$BACKEND_DIR/web" | cut -f1))"
