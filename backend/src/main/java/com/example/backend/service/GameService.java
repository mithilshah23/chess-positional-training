package com.example.backend.service;

import com.example.backend.models.EndgameDetails;
import com.example.backend.models.GameEndedStats;
import com.example.backend.models.UserEndGamePositions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class GameService {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public GameService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public void gameEnded(GameEndedStats gameEndedStats) {
        String userId = gameEndedStats.getUserId();
        String gameStatus = gameEndedStats.getGameStatus();
        String winner = gameEndedStats.getWinner();
        String pov = gameEndedStats.getPov();
        String initialFen = gameEndedStats.getInitialFen();

        Query query = new Query();
        query.addCriteria(Criteria.where("fen").is(initialFen));

        EndgameDetails endgameDetails = mongoTemplate.findOne(query, EndgameDetails.class);
        if(endgameDetails == null) return;

        UserEndGamePositions userEndGamePositions = mongoTemplate.findById(userId, UserEndGamePositions.class);
        if(userEndGamePositions == null) return;

        if ("checkmate".equals(endgameDetails.getTarget())) {
            if("mate".equals(gameStatus) && pov.equals(winner)){
                updateUserEndgamePositions(endgameDetails, userEndGamePositions);
            }
        }
        else if("draw".equals(endgameDetails.getTarget())){
            if(("mate".equals(gameStatus) && pov.equals(winner)) || "draw".equals(gameStatus)){
                updateUserEndgamePositions(endgameDetails, userEndGamePositions);
            }
        }
    }

    private void updateUserEndgamePositions(EndgameDetails endgameDetails, UserEndGamePositions userEndGamePositions){
        Map<String, Map<String, Map<String, Boolean>>> positions = userEndGamePositions.getCompletedPositions();
        if (positions == null) positions = new HashMap<>();
        positions.computeIfAbsent(String.valueOf(endgameDetails.getCategoryIndex()), k -> new HashMap<>())
                .computeIfAbsent(String.valueOf(endgameDetails.getSubcategoryIndex()), k -> new HashMap<>())
                .put(String.valueOf(endgameDetails.getGameIndex()), true);
        userEndGamePositions.setCompletedPositions(positions);
        mongoTemplate.save(userEndGamePositions);
    }
}
