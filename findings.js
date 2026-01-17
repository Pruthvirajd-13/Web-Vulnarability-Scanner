document.addEventListener('DOMContentLoaded', () => {

    const findingsTable = document.getElementById('findingsTableBody');
    const severityFilter = document.getElementById('severityFilter');
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchInput');

    // Initial Mock Data
    let findings = [
        { id: 1, name: "SQL Injection (Union Based)", severity: "High", target: "example.com", cvss: 8.5, status: "Open", foundDate: "2026-01-09" },
        { id: 2, name: "Reflected Cross-Site Scripting (XSS)", severity: "Medium", target: "example.com", cvss: 6.1, status: "Open", foundDate: "2026-01-09" },
        { id: 3, name: "Sensitive Data Exposure", severity: "High", target: "192.168.1.1", cvss: 7.8, status: "Open", foundDate: "Yesterday" },
        { id: 4, name: "Open Port 21 (FTP)", severity: "Low", target: "test-site.org", cvss: 3.5, status: "Fixed", foundDate: "Jan 8, 2026" },
        { id: 5, name: "Missing HTTP Security Headers", severity: "Low", target: "example.com", cvss: 2.0, status: "Open", foundDate: "2026-01-09" },
        { id: 6, name: "Outdated Server Version", severity: "Medium", target: "192.168.1.5", cvss: 5.3, status: "False Positive", foundDate: "Jan 5, 2026" }
    ];

    function renderFindings(data) {
        if (!findingsTable) return;

        findingsTable.innerHTML = '';

        if (data.length === 0) {
            findingsTable.innerHTML = '<tr><td colspan="7" style="text-align:center; color: var(--text-secondary); padding: 30px;">No findings match your filters.</td></tr>';
            return;
        }

        data.forEach(finding => {
            // Severity Logic
            let riskClass = 'low';
            if (finding.severity === 'High') riskClass = 'high';
            if (finding.severity === 'Medium') riskClass = 'med';

            // Status Badge Logic
            let statusStyle = 'background: rgba(59, 130, 246, 0.1); color: var(--info-color);'; // Open
            if (finding.status === 'Fixed') statusStyle = 'background: rgba(16, 185, 129, 0.1); color: var(--success-color);';
            if (finding.status === 'False Positive') statusStyle = 'background: rgba(100, 116, 139, 0.1); color: var(--text-secondary);';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="risk-badge ${riskClass}">${finding.severity}</span></td>
                <td>
                    <div style="font-weight: 500; color: var(--text-primary);">${finding.name}</div>
                </td>
                <td><span style="color: var(--accent-color);">${finding.target}</span></td>
                <td><span class="cvss-score" style="color: ${riskClass === 'high' ? 'var(--danger-color)' : (riskClass === 'med' ? 'var(--warning-color)' : 'var(--info-color)')}">${finding.cvss}</span></td>
                <td><span class="status-badge" style="${statusStyle}">${finding.status}</span></td>
                <td style="color: var(--text-secondary); font-size: 13px;">${finding.foundDate}</td>
                <td style="text-align: right;">
                    <button class="action-btn" title="Mark as Fixed"><i class="fas fa-check"></i></button>
                    <button class="action-btn" title="Details"><i class="fas fa-chevron-right"></i></button>
                </td>
            `;
            findingsTable.appendChild(tr);
        });
    }

    function filterFindings() {
        const severity = severityFilter.value.toLowerCase();
        const status = statusFilter.value.toLowerCase();
        const search = searchInput.value.toLowerCase();

        const filtered = findings.filter(f => {
            const matchSeverity = severity === 'all' || f.severity.toLowerCase() === severity;
            const matchStatus = status === 'all' || f.status.replace(' ', '-').toLowerCase() === status;
            const matchSearch = f.name.toLowerCase().includes(search) || f.target.toLowerCase().includes(search);
            return matchSeverity && matchStatus && matchSearch;
        });

        renderFindings(filtered);
    }

    renderFindings(findings);

    // Event Listeners
    severityFilter.addEventListener('change', filterFindings);
    statusFilter.addEventListener('change', filterFindings);
    searchInput.addEventListener('input', filterFindings);

});
