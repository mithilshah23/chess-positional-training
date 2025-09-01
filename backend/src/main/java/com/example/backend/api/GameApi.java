package com.example.backend.api;

import com.example.backend.dto.GameEndedStats;
import com.example.backend.service.GameService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameApi {
    private final GameService gameService;

    public GameApi(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/ended")
    public void gameEnded(@RequestBody GameEndedStats gameEndedStats) {
        gameService.gameEnded(gameEndedStats);
    }
}
