package com.rapidscan.model;

import java.io.Serializable;
import java.sql.Timestamp;

public class Scan implements Serializable {
    private int id;
    private int userId;
    private Integer assetId; // Can be null
    private String toolName;
    private String status;
    private Timestamp startTime;
    private Timestamp endTime;

    public Scan() {}

    public Scan(int userId, Integer assetId, String toolName, String status) {
        this.userId = userId;
        this.assetId = assetId;
        this.toolName = toolName;
        this.status = status;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }
    public Integer getAssetId() { return assetId; }
    public void setAssetId(Integer assetId) { this.assetId = assetId; }
    public String getToolName() { return toolName; }
    public void setToolName(String toolName) { this.toolName = toolName; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Timestamp getStartTime() { return startTime; }
    public void setStartTime(Timestamp startTime) { this.startTime = startTime; }
    public Timestamp getEndTime() { return endTime; }
    public void setEndTime(Timestamp endTime) { this.endTime = endTime; }
}
