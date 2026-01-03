<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RapidScan - Web Security Testing</title>
    <link rel="stylesheet" href="style.css">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>

    <!-- Scanning Background -->
    <div class="bg-scanning">
        <div class="scan-line"></div>
        <div class="bg-grid"></div>
        <div class="bg-glow"></div>
    </div>

    <div class="container">
        <!-- Navigation -->
        <nav class="navbar">
            <a href="#" class="logo">
                <div class="logo-icon">
                    <i class="fas fa-shield-alt" style="color: #000; font-size: 18px;"></i>
                </div>
                <span class="logo-text">Rapid<span style="color: var(--primary-color);">Scan</span></span>
            </a>

            <ul class="nav-links">
                <li class="nav-item-dropdown">
                    <a href="javascript:void(0)" id="tools-toggle">Tools <i class="fas fa-chevron-down"></i></a>

                    <!-- Mega Menu -->
                    <div class="megamenu" id="tools-megamenu">
                        <div class="tools-box">
                            <aside class="tools-sidebar">
                                <div class="sidebar-item active">Frequently used</div>
                                <div class="sidebar-item">Recon tools</div>
                                <div class="sidebar-item">Vulnerability scanners</div>
                                <div class="sidebar-item">Exploit tools</div>
                            </aside>
                            <div class="tools-content">
                                <div class="tools-grid">
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper orange-bg">
                                            <i class="fas fa-spider"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">Website Scanner</div>
                                    </div>
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper orange-bg">
                                            <i class="fas fa-network-wired"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">Network Scanner</div>
                                    </div>
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper blue-bg">
                                            <i class="fas fa-crosshairs"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">Subdomain Finder</div>
                                    </div>
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper blue-bg">
                                            <i class="fas fa-eye"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">Port Scanner</div>
                                    </div>
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper blue-bg">
                                            <i class="fas fa-globe-americas"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">URL Fuzzer</div>
                                    </div>
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper orange-bg">
                                            <i class="fab fa-wordpress"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">WordPress Scanner</div>
                                    </div>
                                    <div class="tool-card">
                                        <div class="tool-icon-wrapper red-bg">
                                            <i class="fas fa-bullseye"></i>
                                            <span class="status-dot"></span>
                                        </div>
                                        <div class="tool-name">Sniper: Auto-Exploiter</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item-dropdown">
                    <a href="javascript:void(0)" id="features-toggle">Features <i class="fas fa-chevron-down"></i></a>

                    <!-- Features Mega Menu -->
                    <div class="megamenu" id="features-megamenu">
                        <div class="features-box">
                            <div class="features-grid">
                                <div class="feature-item">
                                    <div class="feature-icon red-bg">
                                        <i class="fas fa-key"></i>
                                    </div>
                                    <div class="feature-text">
                                        <div class="feature-title">Authenticated scanning</div>
                                        <div class="feature-desc">Uncover hidden flaws behind logins with authenticated
                                            web app scans</div>
                                    </div>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon blue-bg">
                                        <i class="fas fa-wave-square"></i>
                                    </div>
                                    <div class="feature-text">
                                        <div class="feature-title">Internal scanning</div>
                                        <div class="feature-desc">Find internal network vulnerabilities with the
                                            built-in VPN Agent</div>
                                    </div>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon orange-bg">
                                        <i class="fas fa-shield-alt"></i>
                                    </div>
                                    <div class="feature-text">
                                        <div class="feature-title">Vulnerability scanning</div>
                                        <div class="feature-desc">Monitor web, network, and cloud assets continuously
                                            for flaws</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item-dropdown">
                    <a href="javascript:void(0)" id="services-toggle">Services <i class="fas fa-chevron-down"></i></a>

                    <!-- Services Mega Menu -->
                    <div class="megamenu" id="services-megamenu">
                        <div class="features-box"> <!-- Reuse features-box for consistent styling -->
                            <div class="features-grid"> <!-- Reuse grid, will show single item -->
                                <div class="feature-item">
                                    <div class="feature-icon red-bg">
                                        <i class="fas fa-edit"></i>
                                    </div>
                                    <div class="feature-text">
                                        <div class="feature-title">Web Scanning</div>
                                        <div class="feature-desc">Remote penetration testing services for your web
                                            application: realistic attacks and remediation advice</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item-dropdown">
                    <a href="javascript:void(0)" id="resources-toggle">Resources <i class="fas fa-chevron-down"></i></a>

                    <!-- Resources Mega Menu -->
                    <div class="megamenu" id="resources-megamenu">
                        <div class="features-box">
                            <div class="features-grid">
                                <div class="feature-item">
                                    <div class="feature-icon red-bg">
                                        <i class="fas fa-shield-virus"></i>
                                    </div>
                                    <div class="feature-text">
                                        <div class="feature-title">Vulnerabilities & Exploits</div>
                                        <div class="feature-desc">A database of vulnerabilities you can detect and
                                            exploit with our product.</div>
                                    </div>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon orange-bg">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <div class="feature-text">
                                        <div class="feature-title">Security Research</div>
                                        <div class="feature-desc">Write-ups and PoC's for complex vulnerabilities and
                                            security testing tactics.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="nav-auth">
                <a href="../Login/login.jsp" class="btn-secondary">Log in</a>
                <a href="../Login/login.jsp" class="btn-primary">Free sign up</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Get a hacker's perspective on your web apps, network, and cloud</h1>
                <p>Pentest-Tools.com helps security teams run the key steps of a penetration test, easily and without
                    expert hacking skills.</p>

                <ul style="list-style: none; margin-bottom: 30px; color: var(--secondary-text);">
                    <li style="margin-bottom: 10px;">✓ Automatically map the attack surface</li>
                    <li style="margin-bottom: 10px;">✓ Scan for the latest critical vulnerabilities</li>
                    <li style="margin-bottom: 10px;">✓ Exploit to assess the business risk</li>
                    <li>✓ Write pentest reports 50% faster</li>
                </ul>

                <!-- <div class="hero-buttons">
                    <a href="#" class="btn-large primary">Try the Free Edition</a>
                    <a href="#" class="btn-large secondary">Book a live demo</a>
                </div> -->
            </div>
        </section>
    </div>

    <script>
        const dropdowns = document.querySelectorAll('.nav-item-dropdown');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('a');
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();

                // Close others
                dropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('megamenu-open');
                });

                dropdown.classList.toggle('megamenu-open');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            dropdowns.forEach(d => {
                if (!d.contains(e.target)) {
                    d.classList.remove('megamenu-open');
                }
            });
        });
    </script>
</body>

</html>