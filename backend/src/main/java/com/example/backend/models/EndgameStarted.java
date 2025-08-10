package com.example.backend.models;

public class EndgameStarted {
    private String userId;
    private String endgamePath;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEndgamePath() {
        return endgamePath;
    }

    public void setEndgamePath(String endgamePath) {
        this.endgamePath = endgamePath;
    }
}
