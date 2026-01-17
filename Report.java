package com.rapidscan.model;

import java.io.Serializable;
import java.sql.Timestamp;

public class Report implements Serializable {
    private int id;
    private int userId;
    private Integer scanId;
    private String name;
    private String format;
    private String filePath;
    private long sizeBytes;
    private Timestamp generatedAt;

    public Report() {}

    public Report(int userId, String name, String format, String filePath) {
        this.userId = userId;
        this.name = name;
        this.format = format;
        this.filePath = filePath;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }
    public Integer getScanId() { return scanId; }
    public void setScanId(Integer scanId) { this.scanId = scanId; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getFormat() { return format; }
    public void setFormat(String format) { this.format = format; }
    public String getFilePath() { return filePath; }
    public void setFilePath(String filePath) { this.filePath = filePath; }
    public long getSizeBytes() { return sizeBytes; }
    public void setSizeBytes(long sizeBytes) { this.sizeBytes = sizeBytes; }
    public Timestamp getGeneratedAt() { return generatedAt; }
    public void setGeneratedAt(Timestamp generatedAt) { this.generatedAt = generatedAt; }
}
