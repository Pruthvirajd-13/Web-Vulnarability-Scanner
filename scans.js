document.addEventListener('DOMContentLoaded', () => {

    const scansTable = document.getElementById('scansTableBody');

    // Initial Mock Data
    let scans = [
        { id: 101, target: "example.com", tool: "Website Vulnerability Scan", started: "Today, 10:23 AM", duration: "12m 30s", status: "Finished", findings: { high: 2, med: 5, low: 8 } },
        { id: 102, target: "192.168.1.1", tool: "Network Scan", started: "Yesterday, 2:15 PM", duration: "45s", status: "Finished", findings: { high: 0, med: 1, low: 3 } },
        { id: 103, target: "test-site.org", tool: "Port Scanner", started: "Jan 8, 2026", duration: "2m 10s", status: "Finished", findings: { high: 1, med: 0, low: 0 } },
        { id: 104, target: "dev.example.com", tool: "Subdomain Finder", started: "Jan 7, 2026", duration: "5m 00s", status: "Finished", findings: { high: 0, med: 0, low: 12 } },
        { id: 105, target: "10.0.0.55", tool: "Network Scan", started: "Just now", duration: "-", status: "Running", findings: null },
    ];

    function renderScans() {
        if (!scansTable) return;

        scansTable.innerHTML = '';

        scans.forEach(scan => {
            // Icon Logic
            let iconClass = 'fa-globe';
            if (scan.tool.includes('Network')) iconClass = 'fa-network-wired';
            if (scan.tool.includes('Port')) iconClass = 'fa-eye';
            if (scan.tool.includes('Subdomain')) iconClass = 'fa-crosshairs';

            // Status Logic
            let statusBadge = `<span class="status-badge finished">Finished</span>`;
            if (scan.status === 'Running') statusBadge = `<span class="status-badge" style="background: rgba(59, 130, 246, 0.1); color: var(--info-color);"><i class="fas fa-spinner fa-spin"></i> Running</span>`;
            if (scan.status === 'Failed') statusBadge = `<span class="status-badge" style="background: rgba(239, 68, 68, 0.1); color: var(--danger-color);">Failed</span>`;

            // Findings Logic
            let findingsHtml = '<span class="duration-text">-</span>';
            if (scan.findings) {
                findingsHtml = `
                    <div style="display: flex; gap: 8px;">
                        ${scan.findings.high > 0 ? `<span class="risk-badge high">${scan.findings.high} High</span>` : ''}
                        ${scan.findings.med > 0 ? `<span class="risk-badge med">${scan.findings.med} Med</span>` : ''}
                        ${scan.findings.low > 0 ? `<span class="risk-badge low">${scan.findings.low} Low</span>` : ''}
                        ${(scan.findings.high === 0 && scan.findings.med === 0 && scan.findings.low === 0) ? '<span class="risk-badge" style="background: rgba(16, 185, 129, 0.1); color: var(--success-color);">Clean</span>' : ''}
                    </div>
                `;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div class="target-col"><i class="fas ${iconClass}"></i> ${scan.target}</div>
                </td>
                <td>${scan.tool}</td>
                <td>${scan.started}</td>
                <td><span class="duration-text">${scan.duration}</span></td>
                <td>${statusBadge}</td>
                <td>${findingsHtml}</td>
                <td style="text-align: right;">
                    <button class="action-btn" title="View Report"><i class="fas fa-file-alt"></i></button>
                    <button class="action-btn" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            scansTable.appendChild(tr);
        });
    }

    renderScans();

    // Refresh Button Mock
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.classList.add('fa-spin'); // This won't work directly on btn, need to target icon
            const icon = refreshBtn.querySelector('i');
            icon.classList.add('fa-spin');
            setTimeout(() => {
                icon.classList.remove('fa-spin');
                renderScans(); // Re-render
            }, 800);
        });
    }
});
