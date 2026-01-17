-- Create Database
CREATE DATABASE IF NOT EXISTS rapidscan_db;
USE rapidscan_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'USER', -- USER, ADMIN
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assets (Targets) Table
CREATE TABLE IF NOT EXISTS assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL, -- The domain or IP
    type VARCHAR(50) NOT NULL, -- DOMAIN, IP, URL
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Scans Table
CREATE TABLE IF NOT EXISTS scans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    asset_id INT, -- Optional, scan might be ad-hoc or linked to an asset
    tool_name VARCHAR(100) NOT NULL, -- Website Scanner, Network Scanner, etc.
    status VARCHAR(50) NOT NULL, -- RUNNING, FINISHED, FAILED
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE SET NULL
);

-- Findings (Vulnerabilities) Table
CREATE TABLE IF NOT EXISTS findings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scan_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    severity VARCHAR(20) NOT NULL, -- LOW, MEDIUM, HIGH, CRITICAL
    status VARCHAR(50) DEFAULT 'OPEN', -- OPEN, CLOSED, FALSE_POSITIVE
    cvss_score DECIMAL(3,1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (scan_id) REFERENCES scans(id) ON DELETE CASCADE
);

-- Reports Table
CREATE TABLE IF NOT EXISTS reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    scan_id INT, -- Optional link to a specific scan source
    name VARCHAR(255) NOT NULL,
    format VARCHAR(10) NOT NULL, -- PDF, HTML, CSV
    file_path VARCHAR(500), -- Path to the stored file on disk
    size_bytes BIGINT,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (scan_id) REFERENCES scans(id) ON DELETE SET NULL
);

-- Insert Dummy Data for Testing
INSERT INTO users (first_name, last_name, email, password_hash, role) VALUES 
('John', 'Doe', 'admin@rapidscan.local', 'hashed_secret_123', 'ADMIN');

INSERT INTO assets (user_id, name, type) VALUES 
(1, 'example.com', 'DOMAIN'),
(1, '192.168.1.1', 'IP');

INSERT INTO scans (user_id, asset_id, tool_name, status, end_time) VALUES 
(1, 1, 'Website Scanner', 'FINISHED', NOW());

INSERT INTO findings (scan_id, title, description, severity, cvss_score) VALUES 
(1, 'SQL Injection', 'Vulnerability in login form', 'CRITICAL', 9.0),
(1, 'XSS Reflected', 'Reflected XSS in search parameter', 'MEDIUM', 5.5);

INSERT INTO reports (user_id, scan_id, name, format, generated_at) VALUES 
(1, 1, 'Full Scan Report - example.com', 'PDF', NOW());
