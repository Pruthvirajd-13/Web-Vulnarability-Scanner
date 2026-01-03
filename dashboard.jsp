<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>RapidScan Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dashboard.css">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>



    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="logo-area" style="display: flex; align-items: center; padding: 25px 20px;">
            <div
                style="background: #ffcc00; width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                <i class="fas fa-shield-alt" style="color: #000; font-size: 16px;"></i>
            </div>
            <span style="font-weight: 800; font-size: 20px; color: white;">Rapid<span
                    style="color: #ffcc00;">Scan</span></span>
        </div>

        <button class="new-scan-btn">
            <i class="fas fa-bolt"></i> New scan
        </button>

        <div class="workspace-selector">
            <span>My Workspace</span>
            <i class="fas fa-chevron-down"></i>
        </div>

        <nav class="nav-menu">
            <a href="#" class="nav-item active">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-bullseye"></i> Assets <span class="badge">0</span>
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-heartbeat"></i> Scans
            </a>
            <a href="tools.jsp" class="nav-item">
                <i class="fas fa-tools"></i> Tools
            </a>
            <!-- <a href="features.jsp" class="nav-item">
                <i class="fas fa-list-ul"></i> Features
            </a> -->
            <a href="#" class="nav-item">
                <i class="fas fa-bug"></i> Findings
            </a>
            <!-- <a href="#" class="nav-item">
                <i class="fas fa-globe"></i> Attack Surface
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-file-code"></i> Handlers
            </a> -->
        </nav>

    </aside>

    <div class="content-wrapper">
        <h1 class="page-title">Dashboard</h1>

        <!-- Tabs -->
        <div class="dashboard-tabs">
            <button class="tab-link active">Overview</button>
            <button class="tab-link">What's new <span class="dot"></span></button>
            <button class="tab-link">Help</button>
        </div>

        <!-- Top Cards -->
        <div class="grid-row">
            <div class="card">
                <div class="card-header">
                    <h3><i class="fas fa-chart-pie orange"></i> Attack surface summary</h3>
                    <span class="link-text">Workspace overview</span>
                </div>
                <div class="empty-state">
                    <p>You don't have any scans yet.</p>
                    <button class="start-scan-btn">Start a scan</button>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3><i class="fas fa-chart-bar red"></i> Vulnerability summary</h3>
                    <span class="link-text">Workspace overview - last 14 days</span>
                </div>
                <div class="empty-state">
                    <p>You don't have any scans yet.</p>
                    <button class="start-scan-btn">Start a scan</button>
                </div>
            </div>
        </div>

        <!-- Scan Activity -->
        <div class="section-header">
            <h3><i class="fas fa-bolt red"></i> Scan activity</h3>
            <span class="link-text">Account overview</span>
        </div>

        <div class="grid-row four-col">
            <div class="card stat-card">
                <h4><i class="fas fa-bolt grey"></i> Scanned assets</h4>
                <div class="circle-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div class="percentage">
                        <span class="large" id="scanned-assets-count">0</span><span class="small">/5</span>
                    </div>
                </div>
            </div>

            <div class="card stat-card">
                <h4>Running scans</h4>
                <div class="circle-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div class="percentage">
                        <span class="large" id="running-scans-count">0</span><span class="small">/2</span>
                    </div>
                </div>
            </div>

            <div class="card stat-card">
                <h4>Waiting scans</h4>
                <div class="circle-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div class="percentage">
                        <span class="large" id="waiting-scans-count">0</span><span class="small">/25</span>
                    </div>
                </div>
            </div>

            <div class="card stat-card">
                <h4>Added assets</h4>
                <div class="circle-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div class="percentage">
                        <span class="large" id="added-assets-count">0</span><span class="small">/100</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest Scans -->
        <div class="section-header">
            <h3><i class="far fa-clock red"></i> Latest scans</h3>
            <span class="link-text" style="margin-left: auto;">View Scans</span>
        </div>

        <div class="card full-width">
            <div class="empty-state">
                <p>You don't have any scans yet.</p>
                <button class="start-scan-btn">Start a scan</button>
            </div>
        </div>

    </div>
    </main>

    <!-- Chat Widget Bubble -->
    <!-- <div class="chat-bubble">
        <i class="fas fa-comment-alt"></i>
    </div> -->

    <!-- <script src="dashboard.js"></script> -->
</body>

</html>