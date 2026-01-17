document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('startNetScanBtn');
    const targetInput = document.getElementById('targetIp');
    const scanProgress = document.getElementById('scanProgress');
    const scanResults = document.getElementById('scanResults');
    const terminalLog = document.getElementById('terminalLog');
    const progressBar = document.getElementById('progressBar');
    const scanPercentage = document.getElementById('scanPercentage');
    const scanStatusText = document.getElementById('scanStatusText');

    startBtn.addEventListener('click', () => {
        const target = targetInput.value;
        if (!target) {
            alert("Please enter a valid IP or Hostname");
            return;
        }

        // Start Animation
        startMockNetScan(target);
    });

    function startMockNetScan(target) {
        // UI Reset
        scanProgress.classList.remove('hidden');
        scanResults.classList.add('hidden');
        startBtn.disabled = true;
        startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning...';
        terminalLog.innerHTML = '';
        progressBar.style.width = '0%';
        scanPercentage.innerText = '0%';

        const steps = [
            { pct: 5, msg: `Initiating ARP Ping to ${target}...`, delay: 500 },
            { pct: 15, msg: "Host is up. Scanning for open ports...", delay: 1000 },
            { pct: 25, msg: "Discovered open port 80/tcp", delay: 2000 },
            { pct: 30, msg: "Discovered open port 443/tcp", delay: 2500 },
            { pct: 40, msg: "Discovered open port 22/tcp", delay: 3000 },
            { pct: 50, msg: "Performing service version detection...", delay: 4500 },
            { pct: 65, msg: "Identifying Operating System...", delay: 6000 },
            { pct: 80, msg: "Running NSE scripts (vuln, safe)...", delay: 7500 },
            { pct: 90, msg: "Filtering results...", delay: 8500 },
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
            terminalLog.scrollTop = terminalLog.scrollHeight;

            currentStep++;

        }, 1000);
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
        const findingsList = document.getElementById('findingsList');
        findingsList.innerHTML = '';

        const openPorts = [
            { port: 22, proto: 'tcp', service: 'ssh', version: 'OpenSSH 8.2p1 Ubuntu', severity: 'low' },
            { port: 80, proto: 'tcp', service: 'http', version: 'Apache httpd 2.4.41', severity: 'medium' }, // potentially old
            { port: 443, proto: 'tcp', service: 'https', version: 'Apache httpd 2.4.41', severity: 'low' },
            { port: 3306, proto: 'tcp', service: 'mysql', version: 'MySQL 8.0.20', severity: 'medium' } // exposed db
        ];

        let highVulns = 0;
        let medVulns = 2;

        document.getElementById('openPortsCount').innerText = openPorts.length;
        document.getElementById('vulnCount').innerText = medVulns;

        openPorts.forEach(p => {
            const card = document.createElement('div');
            card.className = `finding-card ${p.severity}`; // Reusing existing card styles
            card.innerHTML = `
                <div class="finding-header">
                    <span class="finding-title"><i class="fas fa-ethernet"></i> Port ${p.port}/${p.proto} - ${p.service}</span>
                    <span class="finding-severity" style="color: var(--${p.severity}-color)">${p.severity} risk</span>
                </div>
                <div class="finding-desc">
                    Version: <span style="font-family: monospace; background: #eee; padding: 2px 5px; border-radius: 4px;">${p.version}</span>
                </div>
            `;
            findingsList.appendChild(card);
        });

        // Additional Vuln Info
        const vulnCard = document.createElement('div');
        vulnCard.className = 'finding-card medium';
        vulnCard.innerHTML = `
             <div class="finding-header">
                <span class="finding-title">Exposed Database Service</span>
                <span class="finding-severity" style="color: var(--medium-color)">MEDIUM</span>
            </div>
            <div class="finding-desc">MySQL service (3306) is exposed to the public internet. It is recommended to firewall this port.</div>
        `;
        findingsList.appendChild(vulnCard);

        // Risk Score
        const riskScoreEl = document.getElementById('riskScore');
        riskScoreEl.innerText = "C";
        riskScoreEl.className = "score-value risk-C";
    }
});
