document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('startPortScanBtn');
    const targetInput = document.getElementById('targetHost');
    const scanProgress = document.getElementById('scanProgress');
    const scanResults = document.getElementById('scanResults');
    const terminalLog = document.getElementById('terminalLog');
    const progressBar = document.getElementById('progressBar');
    const scanPercentage = document.getElementById('scanPercentage');
    const scanStatusText = document.getElementById('scanStatusText');
    const nmapResultsBody = document.getElementById('nmapResultsBody');
    const displayTarget = document.getElementById('displayTarget');
    const reportTarget = document.getElementById('reportTarget');
    const scanTime = document.getElementById('scanTime');

    startBtn.addEventListener('click', () => {
        const target = targetInput.value;
        if (!target) {
            alert("Please enter a valid IP or Hostname");
            return;
        }

        // Start Animation
        startMockPortScan(target);
    });

    function startMockPortScan(target) {
        // UI Reset
        scanProgress.classList.remove('hidden');
        scanResults.classList.add('hidden');
        startBtn.disabled = true;
        startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning...';
        terminalLog.innerHTML = '';
        progressBar.style.width = '0%';
        scanPercentage.innerText = '0%';

        const steps = [
            { pct: 5, msg: `Starting Nmap 7.92 ( https://nmap.org ) at ${new Date().toLocaleTimeString()}`, delay: 500 },
            { pct: 10, msg: `Initiating Ping Scan against ${target}`, delay: 1000 },
            { pct: 20, msg: "Completed Ping Scan at 0.04s, 1 host up.", delay: 2000 },
            { pct: 30, msg: `Initiating Connect Scan against ${target}`, delay: 2500 },
            { pct: 50, msg: "Discovered open port 80/tcp on 192.168.1.1", delay: 3500 },
            { pct: 55, msg: "Discovered open port 443/tcp on 192.168.1.1", delay: 4000 },
            { pct: 60, msg: "Completed Connect Scan at 2.45s", delay: 5000 },
            { pct: 70, msg: "Initiating Service scan", delay: 6000 },
            { pct: 90, msg: "Scanning 2 services on " + target, delay: 8000 },
            { pct: 100, msg: "Nmap done: 1 IP address (1 host up) scanned.", delay: 9500 }
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
            logEntry.innerText = step.msg;
            terminalLog.appendChild(logEntry);
            terminalLog.scrollTop = terminalLog.scrollHeight;

            currentStep++;

        }, 1000);
    }

    function finishScan(target) {
        startBtn.disabled = false;
        startBtn.innerText = "Scan Ports";

        // Show Results
        scanResults.classList.remove('hidden');
        displayTarget.innerText = target;
        reportTarget.innerText = target;
        scanTime.innerText = new Date().toUTCString();

        // Mock Nmap output content
        generateNmapOutput();
    }

    function generateNmapOutput() {
        const ports = [
            { p: "21/tcp", s: "open", svc: "ftp", v: "vsftpd 3.0.3" },
            { p: "22/tcp", s: "open", svc: "ssh", v: "OpenSSH 8.2p1 Ubuntu" },
            { p: "80/tcp", s: "open", svc: "http", v: "Apache httpd 2.4.41 ((Ubuntu))" },
            { p: "443/tcp", s: "open", svc: "https", v: "Apache httpd 2.4.41" }
        ];

        let html = "";
        ports.forEach(row => {
            let color = "#fff";
            if (row.svc === "http" || row.svc === "https") color = "#4ec9b0";
            if (row.svc === "ssh") color = "#ce9178";

            // Pad strings to align columns (simple manual padding)
            const p = row.p.padEnd(9, ' ');
            const s = row.s.padEnd(6, ' ');
            const svc = row.svc.padEnd(14, ' ');

            html += `<div style="color: ${color}">${p}${s}${svc}${row.v}</div>`;
        });

        nmapResultsBody.innerHTML = html;
    }
});
