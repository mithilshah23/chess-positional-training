package com.example.backend.api;

import com.example.backend.fens.Chess960;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class FenApi {

    //todo: move all random position fens to backend from frontend

    @GetMapping("/randomFenFromChess960")
    public String getRandomFenChess960() {
        int i = new Random().nextInt(Chess960.FENS.size());
        return Chess960.FENS.get(i);
    }
}
