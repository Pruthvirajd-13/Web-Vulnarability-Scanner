document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('startSubdomainScanBtn');
    const targetInput = document.getElementById('targetDomain');
    const scanProgress = document.getElementById('scanProgress');
    const scanResults = document.getElementById('scanResults');
    const terminalLog = document.getElementById('terminalLog');
    const progressBar = document.getElementById('progressBar');
    const scanPercentage = document.getElementById('scanPercentage');
    const scanStatusText = document.getElementById('scanStatusText');

    startBtn.addEventListener('click', () => {
        const target = targetInput.value;
        if (!target) {
            alert("Please enter a valid Domain");
            return;
        }

        // Start Animation
        startMockSubdomainScan(target);
    });

    function startMockSubdomainScan(target) {
        // UI Reset
        scanProgress.classList.remove('hidden');
        scanResults.classList.add('hidden');
        startBtn.disabled = true;
        startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        terminalLog.innerHTML = '';
        progressBar.style.width = '0%';
        scanPercentage.innerText = '0%';

        const steps = [
            { pct: 10, msg: `Querying Certificate Transparency logs for ${target}...`, delay: 500 },
            { pct: 30, msg: "Fetching DNS records from public resolvers...", delay: 1500 },
            { pct: 50, msg: "Searching search engine indices...", delay: 3000 },
            { pct: 60, msg: "Checking threat intelligence feeds...", delay: 4000 },
            { pct: 75, msg: "Resolving IP addresses for found subdomains...", delay: 5500 },
            { pct: 90, msg: "Analyzing results and removing duplicates...", delay: 7000 },
            { pct: 100, msg: "Search Complete.", delay: 8500 }
        ];

        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep >= steps.length) {
                clearInterval(interval);
                finishScan(target);
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
            terminalLog.scrollTop = terminalLog.scrollHeight;

            currentStep++;

        }, 1000);
    }

    function finishScan(target) {
        startBtn.disabled = false;
        startBtn.innerText = "Find Subdomains";

        // Show Results
        scanResults.classList.remove('hidden');

        // Mock Data
        generateSubdomainResults(target);
    }

    function generateSubdomainResults(domain) {
        const subdomains = [
            { sub: `www.${domain}`, ip: "192.168.1.5", title: "Main Website", status: "200 OK" },
            { sub: `mail.${domain}`, ip: "192.168.1.6", title: "Webmail Login", status: "200 OK" },
            { sub: `dev.${domain}`, ip: "192.168.1.10", title: "Development Staging", status: "403 Forbidden" },
            { sub: `api.${domain}`, ip: "192.168.1.5", title: "API Gateway", status: "200 OK" },
            { sub: `admin.${domain}`, ip: "10.0.0.5", title: "Admin Panel", status: "200 OK" },
            { sub: `test.${domain}`, ip: "192.168.1.12", title: "Test Page", status: "404 Not Found" },
            { sub: `vpn.${domain}`, ip: "192.168.1.50", title: "VPN Portal", status: "200 OK" }
        ];

        const listContainer = document.getElementById('subdomainList');
        listContainer.innerHTML = '';

        // Update Stats
        document.getElementById('subdomainCount').innerText = subdomains.length;
        document.getElementById('uniqueIPs').innerText = new Set(subdomains.map(s => s.ip)).size;

        subdomains.forEach(item => {
            const row = document.createElement('div');
            row.className = 'finding-card low'; // Reuse styles
            row.style.borderLeftColor = "#3498db";

            row.innerHTML = `
                <div class="finding-header" style="align-items: center;">
                    <span class="finding-title" style="color: #3498db; font-family: monospace; font-size: 16px;">
                        <a href="#" style="text-decoration: none; color: inherit;">${item.sub}</a>
                    </span>
                    <span class="finding-severity" style="background: #eef; color: #55a; padding: 2px 8px; border-radius: 4px; font-weight: 500;">${item.status}</span>
                </div>
                <div class="finding-desc" style="display: flex; gap: 20px; margin-top: 8px;">
                    <span><i class="fas fa-network-wired"></i> ${item.ip}</span>
                    <span><i class="fas fa-heading"></i> ${item.title}</span>
                </div>
            `;
            listContainer.appendChild(row);
        });
    }
});
