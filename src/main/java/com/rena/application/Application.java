package com.rena.application;

import com.rena.application.entity.Role;
import com.rena.application.entity.User;
import com.rena.application.repository.RoleRepository;
import com.rena.application.repository.UserRepository;
import com.vaadin.flow.component.page.AppShellConfigurator;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * The entry point of the Spring Boot application.
 *
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 *
 */
@SpringBootApplication
@RequiredArgsConstructor
public class Application implements AppShellConfigurator {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner CommandLineRunnerBean() {
        return (args) -> {
            /*Role role = new Role();
            role.setName("USER");
            roleRepository.save(role);
            User user = new User();
            user.setCode(1);
            user.setUsername("user");
            user.setPassword("$2y$10$nR9fcW1KfYOyqkJg4NK0r.LjC.xj3SPEgSYGcwiCk0Kp6gF5cZoPi");
            user.setRole(role);
            userRepository.save(user);*/
        };
    }
}
