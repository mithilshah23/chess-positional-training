package com.example.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection = "userEndGamePositions")
public class UserEndGamePositions {
    @Id
    private String userId;
    private Map<String, Map<String, Map<String, Boolean>>> startedPositions;
    private Map<String, Map<String, Map<String, Boolean>>> completedPositions;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Map<String, Map<String, Map<String, Boolean>>> getStartedPositions() {
        return startedPositions;
    }

    public void setStartedPositions(Map<String, Map<String, Map<String, Boolean>>> startedPositions) {
        this.startedPositions = startedPositions;
    }

    public Map<String, Map<String, Map<String, Boolean>>> getCompletedPositions() {
        return completedPositions;
    }

    public void setCompletedPositions(Map<String, Map<String, Map<String, Boolean>>> completedPositions) {
        this.completedPositions = completedPositions;
    }
}
