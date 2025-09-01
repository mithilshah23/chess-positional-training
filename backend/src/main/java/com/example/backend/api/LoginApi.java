package com.example.backend.api;

import com.example.backend.dto.User;
import com.example.backend.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginApi {

    private final LoginService loginService;

    public LoginApi(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/authenticate")
    public void authenticate(@RequestBody User user) {
        loginService.authenticate(user);
    }
}
