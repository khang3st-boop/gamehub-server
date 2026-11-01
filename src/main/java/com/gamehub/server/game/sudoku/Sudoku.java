package com.gamehub.server.game.sudoku;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Hàm thuần trên lưới Sudoku 81 ô (0 = trống). Bản Java của {@code sudoku_engine.dart}:
 * đếm lời giải và chấm độ khó bằng cùng các kỹ thuật logic để server kiểm tra nhãn độ khó.
 */
public final class Sudoku {

    private Sudoku() {
    }

    private static final int ALL = 0x3FE;
    static final int[][] PEERS = new int[81][];
    static final int[][] UNITS = new int[27][9];

    static {
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                UNITS[r][c] = r * 9 + c;
                UNITS[9 + c][r] = r * 9 + c;
            }
        }
        for (int b = 0; b < 9; b++) {
            for (int k = 0; k < 9; k++) {
                UNITS[18 + b][k] = ((b / 3) * 3 + k / 3) * 9 + (b % 3) * 3 + k % 3;
            }
        }
        for (int i = 0; i < 81; i++) {
            List<Integer> p = new ArrayList<>();
            for (int j = 0; j < 81; j++) {
                if (j != i && (row(j) == row(i) || col(j) == col(i) || box(j) == box(i))) {
                    p.add(j);
                }
            }
            PEERS[i] = p.stream().mapToInt(Integer::intValue).toArray();
        }
    }

    static int row(int i) {
        return i / 9;
    }

    static int col(int i) {
        return i % 9;
    }

    static int box(int i) {
        return (i / 27) * 3 + (i % 9) / 3;
    }

    private static int bit(int d) {
        return 1 << d;
    }

    /** Chuỗi 81 chữ số → mảng; null nếu sai định dạng. */
    public static int[] parse(String s) {
        if (s == null || s.length() != 81) {
            return null;
        }
        int[] g = new int[81];
        for (int i = 0; i < 81; i++) {
            char ch = s.charAt(i);
            if (ch < '0' || ch > '9') {
                return null;
            }
            g[i] = ch - '0';
        }
        return g;
    }

    public static boolean isValidGrid(int[] g) {
        if (g == null || g.length != 81) {
            return false;
        }
        for (int i = 0; i < 81; i++) {
            int v = g[i];
            if (v < 0 || v > 9) {
                return false;
            }
            if (v == 0) {
                continue;
            }
            for (int p : PEERS[i]) {
                if (g[p] == v) {
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean isSolved(int[] g) {
        for (int v : g) {
            if (v == 0) {
                return false;
            }
        }
        return isValidGrid(g);
    }

    static int candidates(int[] g, int i) {
        int m = ALL;
        for (int p : PEERS[i]) {
            if (g[p] != 0) {
                m &= ~bit(g[p]);
            }
        }
        return m;
    }

    /** Đếm lời giải, dừng khi đạt {@code limit}. */
    public static int countSolutions(int[] grid, int limit) {
        if (!isValidGrid(grid)) {
            return 0;
        }
        int[] g = grid.clone();
        int[] count = {0};
        countRec(g, count, limit);
        return count[0];
    }

    private static boolean countRec(int[] g, int[] count, int limit) {
        int best = -1;
        int bestMask = 0;
        int bestCount = 10;
        for (int i = 0; i < 81; i++) {
            if (g[i] != 0) {
                continue;
            }
            int m = candidates(g, i);
            int c = Integer.bitCount(m);
            if (c == 0) {
                return false;
            }
            if (c < bestCount) {
                best = i;
                bestMask = m;
                bestCount = c;
                if (c == 1) {
                    break;
                }
            }
        }
        if (best < 0) {
            count[0]++;
            return count[0] >= limit;
        }
        for (int d = 1; d <= 9; d++) {
            if ((bestMask & bit(d)) == 0) {
                continue;
            }
            g[best] = d;
            if (countRec(g, count, limit)) {
                return true;
            }
        }
        g[best] = 0;
        return false;
    }

    /**
     * Mức kỹ thuật khó nhất cần dùng: 1 naked single, 2 hidden single, 3 locked candidates /
     * naked pair, 4 không đủ (cần thử-sai). 0 nếu lưới đã đầy.
     */
    public static int rate(int[] grid) {
        int[] g = grid.clone();
        int[] cand = new int[81];
        for (int i = 0; i < 81; i++) {
            cand[i] = g[i] == 0 ? candidates(g, i) : 0;
        }
        int hardest = 0;
        while (hasEmpty(g)) {
            boolean progressed = false;
            for (int i = 0; i < 81; i++) {
                if (g[i] == 0 && Integer.bitCount(cand[i]) == 1) {
                    place(g, cand, i, Integer.numberOfTrailingZeros(cand[i]));
                    progressed = true;
                }
            }
            if (progressed) {
                hardest = Math.max(hardest, 1);
                continue;
            }
            for (int i = 0; i < 81; i++) {
                if (g[i] == 0 && cand[i] == 0) {
                    return 4;
                }
            }
            outer:
            for (int[] u : UNITS) {
                for (int d = 1; d <= 9; d++) {
                    int where = -1;
                    int n = 0;
                    for (int i : u) {
                        if (g[i] == 0 && (cand[i] & bit(d)) != 0) {
                            where = i;
                            n++;
                        }
                    }
                    if (n == 1) {
                        place(g, cand, where, d);
                        progressed = true;
                        break outer;
                    }
                }
            }
            if (progressed) {
                hardest = Math.max(hardest, 2);
                continue;
            }
            if (lockedCandidates(g, cand) || nakedPairs(g, cand)) {
                hardest = Math.max(hardest, 3);
                continue;
            }
            return 4;
        }
        return hardest;
    }

    private static boolean hasEmpty(int[] g) {
        for (int v : g) {
            if (v == 0) {
                return true;
            }
        }
        return false;
    }

    private static void place(int[] g, int[] cand, int i, int d) {
        g[i] = d;
        cand[i] = 0;
        for (int p : PEERS[i]) {
            cand[p] &= ~bit(d);
        }
    }

    private static boolean lockedCandidates(int[] g, int[] cand) {
        boolean changed = false;
        for (int b = 0; b < 9; b++) {
            int[] boxCells = UNITS[18 + b];
            for (int d = 1; d <= 9; d++) {
                Set<Integer> rows = new HashSet<>();
                Set<Integer> cols = new HashSet<>();
                int n = 0;
                for (int i : boxCells) {
                    if (g[i] == 0 && (cand[i] & bit(d)) != 0) {
                        rows.add(row(i));
                        cols.add(col(i));
                        n++;
                    }
                }
                if (n < 2) {
                    continue;
                }
                if (rows.size() == 1) {
                    for (int i : UNITS[rows.iterator().next()]) {
                        if (box(i) != b && g[i] == 0 && (cand[i] & bit(d)) != 0) {
                            cand[i] &= ~bit(d);
                            changed = true;
                        }
                    }
                }
                if (cols.size() == 1) {
                    for (int i : UNITS[9 + cols.iterator().next()]) {
                        if (box(i) != b && g[i] == 0 && (cand[i] & bit(d)) != 0) {
                            cand[i] &= ~bit(d);
                            changed = true;
                        }
                    }
                }
            }
        }
        for (int u = 0; u < 18; u++) {
            for (int d = 1; d <= 9; d++) {
                Set<Integer> boxes = new HashSet<>();
                int n = 0;
                for (int i : UNITS[u]) {
                    if (g[i] == 0 && (cand[i] & bit(d)) != 0) {
                        boxes.add(box(i));
                        n++;
                    }
                }
                if (n < 2 || boxes.size() != 1) {
                    continue;
                }
                int bx = boxes.iterator().next();
                for (int i : UNITS[18 + bx]) {
                    if (!contains(UNITS[u], i) && g[i] == 0 && (cand[i] & bit(d)) != 0) {
                        cand[i] &= ~bit(d);
                        changed = true;
                    }
                }
            }
        }
        return changed;
    }

    private static boolean nakedPairs(int[] g, int[] cand) {
        boolean changed = false;
        for (int[] u : UNITS) {
            List<Integer> pairs = new ArrayList<>();
            for (int i : u) {
                if (g[i] == 0 && Integer.bitCount(cand[i]) == 2) {
                    pairs.add(i);
                }
            }
            for (int a = 0; a < pairs.size(); a++) {
                for (int b = a + 1; b < pairs.size(); b++) {
                    int m = cand[pairs.get(a)];
                    if (m != cand[pairs.get(b)]) {
                        continue;
                    }
                    for (int i : u) {
                        if (i == pairs.get(a) || i == pairs.get(b) || g[i] != 0) {
                            continue;
                        }
                        if ((cand[i] & m) != 0) {
                            cand[i] &= ~m;
                            changed = true;
                        }
                    }
                }
            }
        }
        return changed;
    }

    private static boolean contains(int[] a, int v) {
        for (int x : a) {
            if (x == v) {
                return true;
            }
        }
        return false;
    }
}
