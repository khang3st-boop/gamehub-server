package com.gamehub.server.presence;

import java.security.Principal;

import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import com.gamehub.server.realtime.UserPrincipal;

/** Nối sự kiện kết nối / ngắt kết nối STOMP vào {@link PresenceService}. */
@Component
public class PresenceListener {

    private final PresenceService presence;

    public PresenceListener(PresenceService presence) {
        this.presence = presence;
    }

    @EventListener
    public void onConnected(SessionConnectedEvent e) {
        Principal user = e.getUser();
        String session = StompHeaderAccessor.wrap(e.getMessage()).getSessionId();
        if (user != null && session != null) {
            presence.connected(UserPrincipal.id(user), session);
        }
    }

    @EventListener
    public void onDisconnected(SessionDisconnectEvent e) {
        Principal user = e.getUser();
        if (user != null) {
            presence.disconnected(UserPrincipal.id(user), e.getSessionId());
        }
    }
}
