package com.example.backend.service;

import com.example.backend.models.LoginLog;
import com.example.backend.dto.User;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final MongoTemplate mongoTemplate;

    public LoginService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public void authenticate(User user) {
        mongoTemplate.save(new LoginLog(user.getUserId()));
    }
}
