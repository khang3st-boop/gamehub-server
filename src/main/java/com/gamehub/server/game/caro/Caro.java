package com.gamehub.server.game.caro;

import java.util.ArrayList;
import java.util.List;

/**
 * Luật Caro — sao chép đúng {@code caro_rules.dart}: bàn 15×15, X đi trước, ≥ 5 quân liên tiếp
 * (ngang/dọc/chéo) thắng, bàn đầy chưa ai thắng thì hoà.
 */
public final class Caro {

    private Caro() {
    }

    public static final int SIZE = 15;
    public static final int CELLS = SIZE * SIZE;
    public static final int WIN_LENGTH = 5;
    public static final int X = 1;
    public static final int O = 2;
    private static final int[][] DIRS = {{0, 1}, {1, 0}, {1, 1}, {1, -1}};

    static boolean inside(int r, int c) {
        return r >= 0 && r < SIZE && c >= 0 && c < SIZE;
    }

    /** Nước vừa đi tại {@code move} có tạo chuỗi ≥ 5 không. */
    public static boolean isWinningMove(int[] board, int move) {
        int v = board[move];
        if (v == 0) {
            return false;
        }
        int r0 = move / SIZE;
        int c0 = move % SIZE;
        for (int[] d : DIRS) {
            int len = 1;
            for (int s : new int[] {1, -1}) {
                int r = r0 + d[0] * s;
                int c = c0 + d[1] * s;
                while (inside(r, c) && board[r * SIZE + c] == v) {
                    len++;
                    r += d[0] * s;
                    c += d[1] * s;
                }
            }
            if (len >= WIN_LENGTH) {
                return true;
            }
        }
        return false;
    }

    /** Các ô trống mà {@code player} đặt vào sẽ thắng ngay. */
    public static List<Integer> winningCells(int[] board, int player) {
        List<Integer> out = new ArrayList<>();
        for (int i = 0; i < CELLS; i++) {
            if (board[i] != 0) {
                continue;
            }
            board[i] = player;
            if (isWinningMove(board, i)) {
                out.add(i);
            }
            board[i] = 0;
        }
        return out;
    }

    /** Kết quả phát lại một ván. */
    public record Replay(int winner, boolean full, int moveCount) {
        public boolean over() {
            return winner != 0 || full;
        }
    }

    /**
     * Phát lại danh sách nước (X đi trước). Với AI mức medium/hard ({@code strictAi}), kiểm tra
     * mỗi nước của AI: nếu AI thắng ngay được thì phải thắng, nếu không mà người chơi đang có
     * nước thắng ngay thì AI phải chặn — đúng hành vi của AI ở client.
     *
     * @throws IllegalArgumentException nếu ván không hợp lệ
     */
    public static Replay replay(List<Integer> moves, int aiPlayer, boolean strictAi) {
        int[] board = new int[CELLS];
        int winner = 0;
        for (int k = 0; k < moves.size(); k++) {
            if (winner != 0) {
                throw new IllegalArgumentException("Có nước đi sau khi ván đã kết thúc");
            }
            Integer m = moves.get(k);
            if (m == null || m < 0 || m >= CELLS || board[m] != 0) {
                throw new IllegalArgumentException("Nước đi không hợp lệ ở lượt " + (k + 1));
            }
            int toMove = k % 2 == 0 ? X : O;
            if (strictAi && toMove == aiPlayer) {
                List<Integer> wins = winningCells(board, toMove);
                if (!wins.isEmpty()) {
                    if (!wins.contains(m)) {
                        throw new IllegalArgumentException("Nước của AI không khớp thuật toán (bỏ lỡ nước thắng)");
                    }
                } else {
                    List<Integer> threats = winningCells(board, 3 - toMove);
                    if (!threats.isEmpty() && !threats.contains(m)) {
                        throw new IllegalArgumentException("Nước của AI không khớp thuật toán (không chặn)");
                    }
                }
            }
            board[m] = toMove;
            if (isWinningMove(board, m)) {
                winner = toMove;
            }
        }
        return new Replay(winner, moves.size() == CELLS, moves.size());
    }
}
