<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>RapidScan - Tools</title>
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
            <a href="dashboard.jsp" class="nav-item">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-bullseye"></i> Assets <span class="badge">0</span>
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-heartbeat"></i> Scans
            </a>
            <a href="#" class="nav-item active">
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

    <!-- Main Content -->
    <main class="main-content">
        <!-- Top Header -->
        <!-- <header class="top-header">
            <div class="toggle-menu"><i class="fas fa-bars"></i></div>
            <div class="top-right">
                <button class="unlock-btn"><i class="fas fa-star"></i> Unlock full features</button>
                <button class="demo-btn">Book a demo</button>
                <div class="user-menu">
                    <span>RESOURCES <i class="fas fa-chevron-down"></i></span>
                    <i class="fas fa-user-circle user-icon"></i>
                </div>
            </div>
        </header> -->

        <div class="content-wrapper">
            <div class="tools-header-area">
                <h1 class="page-title">Tools</h1>
                <div class="tools-search">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search tools...">
                </div>
            </div>


            <!-- Tabs -->
            <div class="dashboard-tabs">
                <button class="tab-link active">Frequently used</button>
            </div>

            <div class="tools-container">
                <!-- Recon tools -->
                <div class="tool-category-row">
                    <div class="category-label">Recon tools</div>
                    <div class="tools-grid">
                        <div class="tool-card">
                            <div class="tool-icon-wrapper orange-bg">
                                <i class="fas fa-spider"></i>
                                <span class="status-dot green"></span>
                            </div>
                            <div class="tool-name">Website Scanner</div>
                        </div>
                        <div class="tool-card">
                            <div class="tool-icon-wrapper orange-bg">
                                <i class="fas fa-network-wired"></i>
                                <span class="status-dot green"></span>
                            </div>
                            <div class="tool-name">Network Scanner</div>
                        </div>
                        <div class="tool-card">
                            <div class="tool-icon-wrapper blue-bg">
                                <i class="fas fa-crosshairs"></i>
                                <span class="status-dot green"></span>
                            </div>
                            <div class="tool-name">Subdomain Finder</div>
                        </div>
                        <div class="tool-card">
                            <div class="tool-icon-wrapper blue-bg">
                                <i class="fas fa-eye"></i>
                                <span class="status-dot green"></span>
                            </div>
                            <div class="tool-name">Port Scanner</div>
                        </div>
                    </div>
                </div>

                <!-- Vulnerability scanners -->
                <!-- <div class="tool-category-row">
                    <div class="category-label">Vulnerability scanners</div>
                    <div class="tools-grid">
                        <div class="tool-card">
                            <div class="tool-icon-wrapper blue-bg">
                                <i class="fas fa-globe-americas"></i>
                                <span class="status-dot green"></span> -->
                <!-- </div>
                            <div class="tool-name">URL Fuzzer</div>
                        </div> -->
                <!-- <div class="tool-card">
                                    <div class="tool-icon-wrapper orange-bg">
                                        <i class="fab fa-wordpress"></i>
                                        <span class="status-dot green"></span>
                                    </div>
                                    <div class="tool-name">WordPress Scanner</div>
                                </div>
                            </div>
                        </div> -->

                <!-- Exploit tools -->
                <!-- <div class="tool-category-row">
                                    <div class="category-label">Exploit tools</div>
                                    <div class="tools-grid">
                                        <div class="tool-card">
                                            <div class="tool-icon-wrapper red-bg">
                                                <i class="fas fa-bomb"></i>
                                            </div>
                                            <div class="tool-name">Sniper: Auto-Exploiter</div>
                                        </div>
                                    </div>
                                </div>

                            </div> -->


            </div>
    </main>

    <!-- Chat Widget Bubble -->
    <!-- <div class="chat-bubble">
        <i class="fas fa-comment-alt"></i>
    </div> -->
    <!-- 
    <script src="dashboard.js"></script> -->
</body>

</html>