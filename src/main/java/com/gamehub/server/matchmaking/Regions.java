package com.gamehub.server.matchmaking;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Vùng thô dùng để ghép trận "gần bạn". Mỗi vùng gồm nhiều tỉnh/thành, rộng hàng trăm km.
 * Thiết bị tự chọn vùng (thủ công hoặc từ vị trí thô đã làm tròn NGAY TRÊN MÁY bằng tâm vùng gần nhất);
 * server chỉ nhận MÃ VÙNG, không bao giờ nhận toạ độ, địa chỉ hay khoảng cách.
 */
public final class Regions {

    public record Region(String code, String name, double lat, double lon, List<String> neighbours) {
    }

    public static final String ANY = "ANY";

    public static final List<Region> ALL = List.of(
            new Region("VN-TB", "Tây Bắc & Đông Bắc", 21.8, 104.8, List.of("VN-HN", "VN-BTB")),
            new Region("VN-HN", "Hà Nội & Đồng bằng sông Hồng", 21.0, 105.8, List.of("VN-TB", "VN-BTB")),
            new Region("VN-BTB", "Bắc Trung Bộ", 18.7, 105.7, List.of("VN-HN", "VN-TB", "VN-DN")),
            new Region("VN-DN", "Đà Nẵng & Trung Trung Bộ", 16.0, 108.2, List.of("VN-BTB", "VN-NTB", "VN-TN")),
            new Region("VN-NTB", "Nam Trung Bộ", 12.7, 109.0, List.of("VN-DN", "VN-TN", "VN-HCM")),
            new Region("VN-TN", "Tây Nguyên", 12.7, 108.0, List.of("VN-DN", "VN-NTB", "VN-HCM")),
            new Region("VN-HCM", "TP.HCM & Đông Nam Bộ", 10.8, 106.7, List.of("VN-NTB", "VN-TN", "VN-CT")),
            new Region("VN-CT", "Cần Thơ & Đồng bằng sông Cửu Long", 10.0, 105.8, List.of("VN-HCM")),
            new Region("OTHER", "Ngoài Việt Nam", 0, 0, List.of()));

    private static final Map<String, Region> BY_CODE =
            ALL.stream().collect(Collectors.toMap(Region::code, Function.identity()));

    private Regions() {
    }

    public static boolean valid(String code) {
        return ANY.equals(code) || BY_CODE.containsKey(code);
    }

    public static Set<String> neighbours(String code) {
        Region r = BY_CODE.get(code);
        return r == null ? Set.of() : Set.copyOf(r.neighbours());
    }

    /**
     * Mức độ gần giữa hai vùng: 0 = cùng vùng, 1 = vùng kề, 2 = xa hơn / một bên chọn "Bất kỳ".
     * Chỉ là bậc thô, không phải khoảng cách.
     */
    public static int tier(String a, String b) {
        if (ANY.equals(a) || ANY.equals(b)) {
            return 2;
        }
        if (a.equals(b)) {
            return 0;
        }
        return neighbours(a).contains(b) ? 1 : 2;
    }
}
