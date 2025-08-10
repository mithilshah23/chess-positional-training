package com.example.backend.models;

import java.util.Map;

public class AvailablePositions {
    private Map<String, Map<String, Map<String, Boolean>>> positions;

    public Map<String, Map<String, Map<String, Boolean>>> getPositions() {
        return positions;
    }

    public void setPositions(Map<String, Map<String, Map<String, Boolean>>> positions) {
        this.positions = positions;
    }
}
