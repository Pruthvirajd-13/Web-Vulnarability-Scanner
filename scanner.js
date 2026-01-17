document.addEventListener('DOMContentLoaded', () => {

    // Check Auth (reuse logic or improve)
    // const currentUser = localStorage.getItem('currentUser');
    // if (!currentUser) window.location.href = "login.html";

    const startBtn = document.getElementById('startScanBtn');
    const targetUrlInput = document.getElementById('targetUrl');
    const scanProgress = document.getElementById('scanProgress');
    const scanResults = document.getElementById('scanResults');
    const terminalLog = document.getElementById('terminalLog');
    const progressBar = document.getElementById('progressBar');
    const scanPercentage = document.getElementById('scanPercentage');
    const scanStatusText = document.getElementById('scanStatusText');

    startBtn.addEventListener('click', () => {
        const url = targetUrlInput.value;
        if (!url || url === 'https://') {
            alert("Please enter a valid URL");
            return;
        }

        // Start Animation
        startMockScan(url);
    });

    function startMockScan(url) {
        // UI Reset
        scanProgress.classList.remove('hidden');
        scanResults.classList.add('hidden');
        startBtn.disabled = true;
        startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning...';
        terminalLog.innerHTML = '';
        progressBar.style.width = '0%';
        scanPercentage.innerText = '0%';

        const steps = [
            { pct: 10, msg: `Resolving hostname ${url}...`, delay: 500 },
            { pct: 20, msg: "Checking server reachability...", delay: 1000 },
            { pct: 30, msg: "Detecting WAF presence...", delay: 1500 },
            { pct: 45, msg: "Crawling for hidden directories...", delay: 2500 },
            { pct: 60, msg: "Testing for SQL Injection points...", delay: 4000 },
            { pct: 75, msg: "Analyzing HTTP headers for security...", delay: 5500 },
            { pct: 85, msg: "Checking for outdated software versions...", delay: 7000 },
            { pct: 95, msg: "Finalizing report generation...", delay: 8500 },
            { pct: 100, msg: "Scan Complete.", delay: 9500 }
        ];

        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep >= steps.length) {
                clearInterval(interval);
                finishScan();
                return;
            }

            const step = steps[currentStep];

            // Update UI
            scanStatusText.innerText = step.msg;
            scanPercentage.innerText = step.pct + '%';
            progressBar.style.width = step.pct + '%';

            // Log entry
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            logEntry.innerText = `[${new Date().toLocaleTimeString()}] ${step.msg}`;
            terminalLog.appendChild(logEntry);
            terminalLog.scrollTop = terminalLog.scrollHeight; // Auto scroll

            currentStep++;

        }, 1000); // Simple interval for demo purposes, unrelated to exact delays
    }

    function finishScan() {
        startBtn.disabled = false;
        startBtn.innerText = "Start Scan";

        // Show Results
        scanResults.classList.remove('hidden');

        // Populate Mock Data
        generateMockResults();
    }

    function generateMockResults() {
        // Randomize findings
        const findingsDB = [
            { title: "Missing X-Frame-Options Header", severity: "low", desc: "The website does not set X-Frame-Options, allowing clickjacking attacks." },
            { title: "Server Information Leak", severity: "low", desc: "Server header reveals exact version: Apache/2.4.41." },
            { title: "Cross-Site Scripting (Reflected)", severity: "high", desc: "Reflected XSS found in search parameter 'q'." },
            { title: "SQL Injection (Time-based)", severity: "high", desc: "Database appears vulnerable to blind SQL injection." },
            { title: "Outdated jQuery Version", severity: "medium", desc: "jQuery 1.12.4 has known vulnerabilities." },
            { title: "Directory Listing Enabled", severity: "medium", desc: "Directory /images/ is indexable." }
        ];

        // Pick 3 random findings
        const findings = findingsDB.sort(() => 0.5 - Math.random()).slice(0, 3 + Math.floor(Math.random() * 2));

        const counts = { high: 0, medium: 0, low: 0 };
        const findingsList = document.getElementById('findingsList');
        findingsList.innerHTML = '';

        findings.forEach(f => {
            counts[f.severity]++;

            const card = document.createElement('div');
            card.className = `finding-card ${f.severity}`;
            card.innerHTML = `
                <div class="finding-header">
                    <span class="finding-title">${f.title}</span>
                    <span class="finding-severity" style="color: var(--${f.severity}-color)">${f.severity}</span>
                </div>
                <div class="finding-desc">${f.desc}</div>
            `;
            findingsList.appendChild(card);
        });

        // Update counts
        document.getElementById('highCount').innerText = counts.high;
        document.getElementById('mediumCount').innerText = counts.medium;
        document.getElementById('lowCount').innerText = counts.low;

        // Calculate Risk Score
        const riskScoreEl = document.getElementById('riskScore');
        if (counts.high > 0) {
            riskScoreEl.innerText = "D";
            riskScoreEl.className = "score-value risk-D";
        } else if (counts.medium > 1) {
            riskScoreEl.innerText = "C";
            riskScoreEl.className = "score-value risk-C";
        } else {
            riskScoreEl.innerText = "B";
            riskScoreEl.className = "score-value risk-B";
        }
    }
});
