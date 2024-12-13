package com.rena.application.config.security;

import com.rena.application.entity.User;
import com.rena.application.repository.UserRepository;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(@NotBlank String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).
                orElseThrow(() -> new UsernameNotFoundException(String.format("Пользователь с именем %s не найден", username)));
        return org.springframework.security.core.userdetails.User.
                withUsername(username).
                password(user.getPassword()).
                authorities(user.getRole().getName()).build();
    }
}
