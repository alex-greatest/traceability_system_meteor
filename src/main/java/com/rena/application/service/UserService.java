package com.rena.application.service;

import com.rena.application.repository.UserRepository;
import com.vaadin.hilla.BrowserCallable;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@BrowserCallable
public class UserService {
    private final UserRepository userRepository;


}
