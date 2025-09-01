package com.example.backend.api;

import com.example.backend.dto.EndgameStarted;
import com.example.backend.dto.User;
import com.example.backend.dto.UserEndGamePositions;
import com.example.backend.service.EndgameService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/endgame")
public class EndgameApi {

    private final EndgameService endgameService;

    public EndgameApi(EndgameService endgameService) {
        this.endgameService = endgameService;
    }

    @PostMapping("/stats")
    public UserEndGamePositions getUserStartedGame(@RequestBody User user) {
        return endgameService.getUserStartedGame(user);
    }

    @PostMapping("/start")
    public void putUserStartedGame(@RequestBody EndgameStarted request) {
        endgameService.putUserStartedGame(request);
    }

}
