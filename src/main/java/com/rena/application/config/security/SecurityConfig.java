package com.rena.application.config.security;

import com.rena.application.repository.UserRepository;
import com.vaadin.flow.spring.security.VaadinWebSecurity;
import com.vaadin.hilla.route.RouteUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends VaadinWebSecurity {

    private final RouteUtil routeUtil;
    private final UserRepository userRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(registry -> registry.requestMatchers(
                routeUtil::isRouteAllowed).permitAll());
        super.configure(http);
        setLoginView(http, "/login", "/");
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
