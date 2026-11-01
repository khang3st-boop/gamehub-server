package com.gamehub.server.realtime;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketTransportRegistration;

import com.gamehub.server.config.AppProperties;

/**
 * WebSocket + STOMP tại {@code /ws} (WebSocket thuần, không SockJS; Flutter web và Android đều
 * hỗ trợ). Production chạy sau reverse proxy HTTPS nên client dùng {@code wss://<domain>/ws}.
 * Nhịp tim 10 giây hai chiều: kết nối chết (mất mạng, tắt app) bị đóng sau khoảng 2 nhịp và
 * phát {@code SessionDisconnectEvent}, presence chuyển offline.
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private final StompAuthInterceptor auth;
    private final AppProperties props;
    private final ThreadPoolTaskScheduler heartbeat;

    public WebSocketConfig(StompAuthInterceptor auth, AppProperties props) {
        this.auth = auth;
        this.props = props;
        this.heartbeat = new ThreadPoolTaskScheduler();
        heartbeat.setPoolSize(1);
        heartbeat.setThreadNamePrefix("stomp-heartbeat-");
        heartbeat.setDaemon(true);
        heartbeat.initialize();
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOriginPatterns(props.cors().allowedOrigins().toArray(String[]::new));
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic", "/queue")
                .setHeartbeatValue(new long[] {10_000, 10_000})
                .setTaskScheduler(heartbeat);
        registry.setApplicationDestinationPrefixes("/app");
        registry.setUserDestinationPrefix("/user");
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(auth);
    }

    @Override
    public void configureWebSocketTransport(WebSocketTransportRegistration registration) {
        // Khung lớn nhất là lời giải Rubik hoặc log thả mảnh: 64 KB là dư.
        registration.setMessageSizeLimit(64 * 1024).setSendTimeLimit(10_000).setSendBufferSizeLimit(512 * 1024);
    }
}
