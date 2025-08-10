package com.example.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userEndGamePositions")
public class UserEndGamePositions {
    @Id
    private String userId;
    private AvailablePositions startedPositions;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public AvailablePositions getStartedPositions() {
        return startedPositions;
    }

    public void setStartedPositions(AvailablePositions startedPositions) {
        this.startedPositions = startedPositions;
    }
}
