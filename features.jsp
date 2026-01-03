<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>RapidScan - Features</title>
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
            <a href="tools.jsp" class="nav-item">
                <i class="fas fa-tools"></i> Tools
            </a>
            <a href="features.jsp" class="nav-item active">
                <i class="fas fa-list-ul"></i> Features
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-bug"></i> Findings
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-globe"></i> Attack Surface
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-file-code"></i> Handlers
            </a>
        </nav>

        <div class="nav-footer">
            <div class="config-header">CONFIGURATIONS</div>
            <a href="#" class="nav-item"><i class="fas fa-file-alt"></i> Reports</a>
            <a href="#" class="nav-item"><i class="fas fa-robot"></i> Robots</a>
            <a href="#" class="nav-item"><i class="fas fa-users"></i> Team</a>
            <a href="#" class="nav-item"><i class="fas fa-plug"></i> Integrations</a>
            <a href="#" class="nav-item"><i class="fas fa-cog"></i> Settings <i
                    class="fas fa-chevron-down right-icon"></i></a>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Top Header -->
        <header class="top-header">
            <div class="toggle-menu"><i class="fas fa-bars"></i></div>
            <div class="top-right">
                <button class="unlock-btn"><i class="fas fa-star"></i> Unlock full features</button>
                <button class="demo-btn">Book a demo</button>
                <div class="user-menu">
                    <span>RESOURCES <i class="fas fa-chevron-down"></i></span>
                    <i class="fas fa-user-circle user-icon"></i>
                </div>
            </div>
        </header>

        <div class="content-wrapper">
            <h1 class="page-title">Platform Features</h1>

            <div class="tools-container">
                <div class="features-grid">
                    <!-- Row 1 -->
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-globe orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Attack surface mapping</h3>
                            <p>Get a comprehensive view of your target's exposure with each scan</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-heartbeat red-text"></i></div>
                        <div class="feature-content">
                            <h3>Internal scanning</h3>
                            <p>Find internal network vulnerabilities with the built-in VPN Agent</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-desktop red-text"></i></div>
                        <div class="feature-content">
                            <h3>Vulnerability monitoring</h3>
                            <p>Monitor web, network, and cloud assets continuously</p>
                        </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-file-alt orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Pentest reporting tool</h3>
                            <p>Get accurate reports 50% faster, as editable DOCX & other formats</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-robot grey-text"></i></div>
                        <div class="feature-content">
                            <h3>Pentest robots</h3>
                            <p>Chain multiple tools into custom, automatic testing flows</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-cubes red-text"></i></div>
                        <div class="feature-content">
                            <h3>Machine Learning classifier</h3>
                            <p>Cut false positives by 50% in web scans and fuzzing results</p>
                        </div>
                    </div>

                    <!-- Row 3 -->
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-key orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Authenticated scanning</h3>
                            <p>Uncover hidden flaws behind logins with authenticated web app scans</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-terminal grey-text"></i></div>
                        <div class="feature-content">
                            <h3>REST API access</h3>
                            <p>Manage targets, scans, workspaces, and more with full API control</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-cogs red-text"></i></div>
                        <div class="feature-content">
                            <h3>Integrations</h3>
                            <p>Push findings to your workflows & get actionable notifications</p>
                        </div>
                    </div>

                    <!-- Row 4 -->
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-users orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Collaboration</h3>
                            <p>Coordinate your team's work, insights, results, and reports</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-book orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Branded reports & emails</h3>
                            <p>Deliver professional, customizable reports & emails, consistently</p>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-plus-square orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Wordlists</h3>
                            <p>Boost security audits with noise-free, field-tested wordlists</p>
                        </div>
                    </div>

                    <!-- Row 5 -->
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-layer-group orange-text"></i></div>
                        <div class="feature-content">
                            <h3>Use cases</h3>
                            <p>Practical ways to use Pentest-Tools.com to solve your real-world security challenges</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>

    <!-- Chat Widget Bubble -->
    <div class="chat-bubble">
        <i class="fas fa-comment-alt"></i>
    </div>

    <script src="dashboard.js"></script>
</body>

</html>