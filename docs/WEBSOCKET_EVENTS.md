# Sự kiện realtime (STOMP / WebSocket)

Kết nối: `wss://<host>/ws` (STOMP 1.2), header `Authorization: Bearer <accessToken>` trong khung `CONNECT`.

| Kênh | Ai nhận | Ghi chú |
|---|---|---|
| `/user/queue/events` | riêng từng người | lời mời, presence, sảnh, kết quả trận |
| `/topic/match.<matchId>` | chỉ người chơi trong phòng (2–4) | trạng thái phòng / trận, tiến độ, chat |
| `/user/queue/errors` | riêng | lỗi của thao tác gửi qua `/app/match.*` |

Mỗi khung là `{"type": "<tên sự kiện>", "data": {...}}`. Sự kiện chỉ được phát **sau khi giao dịch CSDL commit**,
nên client nhận sự kiện là dữ liệu đã chắc chắn. Server là nguồn sự thật: client luôn có thể gọi lại REST
(`GET /api/v1/matches/active`, `GET /api/v1/challenges/invites`) sau khi kết nối lại để khôi phục trạng thái.

## Bảng đối chiếu tên sự kiện

Tên trong cột "Tên đề xuất" là tên logic trong đặc tả; server giữ tên có dấu chấm đang dùng để không phá
client cũ.

| Tên đề xuất | Tên thật trên dây | Kênh | Payload |
|---|---|---|---|
| PLAYER_PRESENCE_UPDATED | `presence` (bạn bè), `presence.self` (chính mình) | queue | `PresenceDto {userId, status ONLINE/READY/IN_MATCH/OFFLINE}` |
| AVAILABLE_PLAYERS_UPDATED | `lobby.updated` | queue | `{count}` — chỉ là tín hiệu, client gọi lại `GET /api/v1/lobby` |
| CHALLENGE_INVITED | `invite.received` | queue (người nhận) | `InviteDto` |
| CHALLENGE_ACCEPTED | `invite.accepted` | queue (người mời) | `InviteDto` có `matchId` |
| CHALLENGE_DECLINED | `invite.declined` | queue (người mời) | `InviteDto` |
| CHALLENGE_EXPIRED | `invite.expired` | queue (cả hai) | `InviteDto` |
| (huỷ) | `invite.cancelled` | queue | người mời huỷ, phòng đã đủ người, hoặc một người vừa vào trận khác |
| ROOM_JOINED | `match.created` (người vừa vào) + `match.state` (cả phòng) | queue + topic | `MatchDto` |
| (rời phòng chờ) | `match.left` | queue (người rời) | `MatchDto` |
| PLAYER_READY | `match.state` | topic | `MatchDto` (`players[].ready`) |
| MATCH_STARTED | `match.state` với `status = COUNTDOWN` rồi `PLAYING` | topic | `MatchDto` có `startAt` (giờ server) và `serverTime` |
| MATCH_PROGRESS | `match.progress` | topic | `{userId, progress 0–100}` (tối đa ~2 lần/giây/người) |
| (Caro) | `match.caro.move` | topic | `{userId, cell, index}` |
| (vi phạm trợ giúp) | `match.assist` | topic | `{userId}` |
| (kết nối) | `match.connection` | topic | `{userId, connected}` |
| (chat trong phòng) | `match.chat` | topic | `MatchMessageDto` |
| MATCH_FINISHED | `match.ended` | queue (mọi người chơi) | `MatchDto` có `winnerId`, `endReason`, `players[].rank`, `rated` |
| (ghép nhanh) | `matchmaking.found` / `matchmaking.expired` | queue | `MatchDto` / `{}` |

## Thao tác gửi lên (`/app/...`)

`match.ready`, `match.progress`, `match.move` (Caro), `match.finish`, `match.assist`, `match.chat` — payload luôn có
`matchId`. Mọi thao tác này cũng có bản REST tương ứng dưới `/api/v1/matches/{id}/...` (Swagger: `/swagger-ui.html`).

## Quy tắc lời mời

- Mỗi lời mời có `id` UUID riêng, sống 60 giây (`invite.expired` khi hết hạn).
- Chỉ mời được **bạn bè đang online** hoặc người **tự bật "Cho phép mời đấu"** cho đúng game và số người (`PUT /api/v1/lobby`).
- Không tự mời mình (`INVALID_TARGET`), không mời người đã chặn / bị chặn (`FRIENDS_ONLY`), người đang offline
  (`TARGET_OFFLINE`), người đang trong trận (`PLAYER_BUSY`).
- Chống spam: tối đa 3 lời mời đang chờ (`TOO_MANY_INVITES`), 20 lời mời / 10 phút (`RATE_LIMITED`), bị từ chối thì
  2 phút sau mới mời lại cùng người (`INVITE_COOLDOWN`), không mời trùng (`INVITE_EXISTS`).
- Hai người mời chéo nhau: người mời sau nhận `INCOMING_INVITE_EXISTS` và được nhắc mở lời mời đã có → chỉ một phòng.
- Lời mời bị xoá dưới khoá trước khi tạo phòng: bấm Chấp nhận hai lần hoặc hai thiết bị cùng bấm không tạo hai phòng
  (lần sau nhận `INVITE_GONE`).
- Lời mời kèm `roomId`: nhận lời → vào ghế trống của phòng chờ 2/4 người đó (không tạo phòng mới).

## Phòng chờ 2/4 người và giải Caro

- `POST /api/v1/rooms {game, mode, capacity}` tạo phòng có mã 6 ký tự; `POST /api/v1/rooms/join {code}` để vào.
- Đề (scramble / lưới / seed) được sinh **khi đủ người và tất cả Sẵn sàng** → mọi người nhận cùng một đề.
- Khách rời phòng chờ hoặc rớt mạng quá 45 giây: nhả ghế, phòng vẫn mở. Chủ phòng rời: đóng phòng.
- Rubik / Sudoku / Xếp hình 4 người: đua, server đo thời gian; xếp hạng theo thời gian về đích, người chưa xong rồi người
  bị loại xếp cuối.
- Caro 4 người: phòng mẹ bốc thăm 2 bán kết (`stage` SEMI1/SEMI2, `source` BRACKET), hai người thắng vào chung kết
  (FINAL) sau 5 giây; hạng 1 / 2 / 3 / 3. Hoà trong giải: người cầm O (đi sau) đi tiếp.

## Khoá trợ giúp

Mọi trận online (mời, ghép, phòng) có `config.assistLocked = true` và `MatchDto.assistLocked = true`. Gọi
`/assist` hoặc nộp kết quả có `assisted = true` / gợi ý Xếp hình trong trận đang chơi → **server xử thua**
(`endReason = DISQUALIFIED`; 1v1 đối thủ thắng, 4 người thì người vi phạm bị loại). Client cũng ẩn nút gợi ý,
nhưng quyết định nằm ở server.

## Quyền riêng tư

Sảnh và ghép trận chỉ dùng **mã vùng thô do người dùng tự chọn** (`VN-HN`, `VN-HCM`, …) hoặc không chia sẻ.
Server không nhận, lưu hay trả toạ độ GPS, địa chỉ, vị trí theo thời gian thực hay khoảng cách.
