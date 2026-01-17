package com.rapidscan.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

public class Finding implements Serializable {
    private int id;
    private int scanId;
    private String title;
    private String description;
    private String severity;
    private String status;
    private BigDecimal cvssScore;
    private Timestamp createdAt;

    public Finding() {}

    public Finding(int scanId, String title, String severity, String status) {
        this.scanId = scanId;
        this.title = title;
        this.severity = severity;
        this.status = status;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getScanId() { return scanId; }
    public void setScanId(int scanId) { this.scanId = scanId; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getSeverity() { return severity; }
    public void setSeverity(String severity) { this.severity = severity; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public BigDecimal getCvssScore() { return cvssScore; }
    public void setCvssScore(BigDecimal cvssScore) { this.cvssScore = cvssScore; }
    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
}
