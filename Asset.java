package com.rapidscan.model;

import java.io.Serializable;
import java.sql.Timestamp;

public class Asset implements Serializable {
    private int id;
    private int userId;
    private String name;
    private String type;
    private String status;
    private Timestamp createdAt;

    public Asset() {}

    public Asset(int userId, String name, String type, String status) {
        this.userId = userId;
        this.name = name;
        this.type = type;
        this.status = status;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
}
