package com.gamehub.server.game.rubik;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

/**
 * Trạng thái Rubik 3×3 mức cubie, bất biến. Bản Java của {@code cubie_cube.dart} ở client
 * (cùng bảng nước xoay Kociemba, thứ tự mặt U, R, F, D, L, B) để server tự phát lại lời giải.
 *
 * <p>{@code cp[i]}/{@code ep[i]}: viên góc/cạnh tại slot {@code i}; {@code co}/{@code eo}: độ xoắn/lật.
 */
public final class CubieCube {

    public static final String FACES = "URFDLB";

    private final byte[] cp;
    private final byte[] co;
    private final byte[] ep;
    private final byte[] eo;

    private CubieCube(byte[] cp, byte[] co, byte[] ep, byte[] eo) {
        this.cp = cp;
        this.co = co;
        this.ep = ep;
        this.eo = eo;
    }

    static CubieCube of(int[] cp, int[] co, int[] ep, int[] eo) {
        return new CubieCube(bytes(cp), bytes(co), bytes(ep), bytes(eo));
    }

    private static byte[] bytes(int[] a) {
        byte[] b = new byte[a.length];
        for (int i = 0; i < a.length; i++) {
            b[i] = (byte) a[i];
        }
        return b;
    }

    public static final CubieCube SOLVED = of(
            new int[] {0, 1, 2, 3, 4, 5, 6, 7}, new int[8],
            new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}, new int[12]);

    /** Sáu nước 90° theo chiều kim đồng hồ (nhìn thẳng vào mặt), thứ tự U, R, F, D, L, B. */
    static final CubieCube[] BASIC = {
        of(new int[] {3, 0, 1, 2, 4, 5, 6, 7}, new int[8],
                new int[] {3, 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11}, new int[12]),
        of(new int[] {4, 1, 2, 0, 7, 5, 6, 3}, new int[] {2, 0, 0, 1, 1, 0, 0, 2},
                new int[] {8, 1, 2, 3, 11, 5, 6, 7, 4, 9, 10, 0}, new int[12]),
        of(new int[] {1, 5, 2, 3, 0, 4, 6, 7}, new int[] {1, 2, 0, 0, 2, 1, 0, 0},
                new int[] {0, 9, 2, 3, 4, 8, 6, 7, 1, 5, 10, 11}, new int[] {0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0}),
        of(new int[] {0, 1, 2, 3, 5, 6, 7, 4}, new int[8],
                new int[] {0, 1, 2, 3, 5, 6, 7, 4, 8, 9, 10, 11}, new int[12]),
        of(new int[] {0, 2, 6, 3, 4, 1, 5, 7}, new int[] {0, 1, 2, 0, 0, 2, 1, 0},
                new int[] {0, 1, 10, 3, 4, 5, 9, 7, 8, 2, 6, 11}, new int[12]),
        of(new int[] {0, 1, 3, 7, 4, 5, 2, 6}, new int[] {0, 0, 1, 2, 0, 0, 2, 1},
                new int[] {0, 1, 2, 11, 4, 5, 6, 10, 8, 9, 3, 7}, new int[] {0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1}),
    };

    /** {@code this * other}: thực hiện {@code this} rồi đến {@code other}. */
    public CubieCube multiply(CubieCube other) {
        byte[] ncp = new byte[8];
        byte[] nco = new byte[8];
        byte[] nep = new byte[12];
        byte[] neo = new byte[12];
        for (int i = 0; i < 8; i++) {
            int src = other.cp[i];
            ncp[i] = cp[src];
            nco[i] = (byte) ((co[src] + other.co[i]) % 3);
        }
        for (int i = 0; i < 12; i++) {
            int src = other.ep[i];
            nep[i] = ep[src];
            neo[i] = (byte) ((eo[src] + other.eo[i]) % 2);
        }
        return new CubieCube(ncp, nco, nep, neo);
    }

    public CubieCube apply(Move move) {
        CubieCube r = this;
        for (int i = 0; i < move.turns(); i++) {
            r = r.multiply(BASIC[move.face()]);
        }
        return r;
    }

    public CubieCube apply(List<Move> moves) {
        CubieCube r = this;
        for (Move m : moves) {
            r = r.apply(m);
        }
        return r;
    }

    public boolean isSolved() {
        return equals(SOLVED);
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof CubieCube c && Arrays.equals(cp, c.cp) && Arrays.equals(co, c.co)
                && Arrays.equals(ep, c.ep) && Arrays.equals(eo, c.eo);
    }

    @Override
    public int hashCode() {
        return Arrays.hashCode(cp) * 31 + Arrays.hashCode(ep);
    }

    /** Nước xoay: {@code face} 0..5 theo {@link #FACES}, {@code turns} 1 (90°), 2 (180°), 3 (ngược chiều). */
    public record Move(int face, int turns) {

        public Move {
            if (face < 0 || face > 5 || turns < 1 || turns > 3) {
                throw new IllegalArgumentException("Nước xoay không hợp lệ");
            }
        }

        public String notation() {
            char f = FACES.charAt(face);
            return switch (turns) {
                case 1 -> String.valueOf(f);
                case 2 -> f + "2";
                default -> f + "'";
            };
        }

        /** Cùng các hậu tố client chấp nhận: {@code R R1 R2 R2' R' Ri R3} (và dấu ’). */
        public static Move parse(String token) {
            String t = token.trim();
            if (t.isEmpty()) {
                throw new IllegalArgumentException("Ký hiệu rỗng");
            }
            int face = FACES.indexOf(t.charAt(0));
            if (face < 0) {
                throw new IllegalArgumentException("Mặt không hợp lệ: " + t);
            }
            int turns = switch (t.substring(1)) {
                case "", "1" -> 1;
                case "2", "2'", "2’" -> 2;
                case "'", "’", "i", "3" -> 3;
                default -> throw new IllegalArgumentException("Hậu tố không hợp lệ: " + t);
            };
            return new Move(face, turns);
        }

        public static List<Move> parseSequence(String text) {
            String s = text == null ? "" : text.trim();
            if (s.isEmpty()) {
                return List.of();
            }
            List<Move> out = new ArrayList<>();
            for (String tok : s.split("\\s+")) {
                out.add(parse(tok));
            }
            return out;
        }

        public static String format(List<Move> moves) {
            StringBuilder sb = new StringBuilder();
            for (Move m : moves) {
                if (!sb.isEmpty()) {
                    sb.append(' ');
                }
                sb.append(m.notation());
            }
            return sb.toString();
        }
    }

    /**
     * Chuỗi xáo trộn kiểu WCA (giống client): không lặp cùng mặt liên tiếp, không có dạng
     * "X Y X" khi Y là mặt đối diện của X.
     */
    public static List<Move> scramble(Random rng, int length) {
        List<Move> moves = new ArrayList<>(length);
        while (moves.size() < length) {
            int face = rng.nextInt(6);
            int n = moves.size();
            if (n > 0) {
                int last = moves.get(n - 1).face();
                if (face == last) {
                    continue;
                }
                if (n >= 2 && face == moves.get(n - 2).face() && (face + 3) % 6 == last) {
                    continue;
                }
            }
            moves.add(new Move(face, rng.nextInt(3) + 1));
        }
        return moves;
    }
}
