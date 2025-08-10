package com.example.backend.api;

import com.example.backend.models.User;
import com.example.backend.models.LoginLog;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginApi {

    private final MongoTemplate mongoTemplate;

    public LoginApi(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }
    @PostMapping("/authenticate")
    public void authenticate(@RequestBody User user){
        mongoTemplate.save(new LoginLog(user.getUserId()));
    }
}