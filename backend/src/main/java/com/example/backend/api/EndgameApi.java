package com.example.backend.api;

import com.example.backend.models.*;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/endgame")
public class EndgameApi {

    private final MongoTemplate mongoTemplate;

    public EndgameApi(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/started")
    public AvailablePositions getUserStartedGame(@RequestBody User user) {
        UserEndGamePositions userPositions = mongoTemplate.findById(user.getUserId(), UserEndGamePositions.class);
        if (userPositions == null) {
            return null;
        }
        return userPositions.getStartedPositions();
    }

    @PostMapping("/start")
    public void putUserStartedGame(@RequestBody EndgameStarted request) {
        String[] parts = request.getEndgamePath().split("/");
        if (parts.length != 3) {
            System.out.println("Invalid EndgamePath: " + request.getEndgamePath());
            return;
        }
        String category = parts[0];
        String subcategory = parts[1];
        String gameIndex = parts[2];

        UserEndGamePositions userDoc = mongoTemplate.findById(
                request.getUserId(),
                UserEndGamePositions.class
        );

        if (userDoc == null) {
            userDoc = new UserEndGamePositions();
            userDoc.setUserId(request.getUserId());
            userDoc.setStartedPositions(new AvailablePositions());
            userDoc.getStartedPositions().setPositions(new HashMap<>());
        }

        Map<String, Map<String, Map<String, Boolean>>> positions = userDoc.getStartedPositions().getPositions();
        positions.computeIfAbsent(category, k -> new HashMap<>())
                .computeIfAbsent(subcategory, k -> new HashMap<>())
                .put(gameIndex, true);

        mongoTemplate.save(userDoc);
    }

}
