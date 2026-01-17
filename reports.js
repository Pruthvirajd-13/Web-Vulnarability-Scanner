
document.addEventListener('DOMContentLoaded', function () {
    loadReports();
});

function loadReports() {
    const tableBody = document.getElementById('reportsTableBody');
    if (!tableBody) return;

    // Mock data for reports
    const reports = [
        {
            id: 1,
            name: 'Full Scan Report - example.com',
            target: 'example.com',
            scanType: 'Website Scanner',
            date: '2023-10-27 14:30',
            format: 'PDF',
            size: '2.4 MB'
        },
        {
            id: 2,
            name: 'Network Audit - 192.168.1.1',
            target: '192.168.1.1',
            scanType: 'Network Scanner',
            date: '2023-10-26 09:15',
            format: 'HTML',
            size: '1.1 MB'
        },
        {
            id: 3,
            name: 'Port Scan Results - test-env',
            target: 'test.example.com',
            scanType: 'Port Scanner',
            date: '2023-10-25 11:20',
            format: 'CSV',
            size: '45 KB'
        },
        {
            id: 4,
            name: 'Vulnerability Assessment - main-app',
            target: 'app.example.com',
            scanType: 'Website Scanner',
            date: '2023-10-24 16:45',
            format: 'PDF',
            size: '3.8 MB'
        }
    ];

    let html = '';

    reports.forEach(report => {
        let iconClass = 'fa-file-pdf';
        let colorClass = '#ff6b6b'; // red for pdf

        if (report.format === 'HTML') {
            iconClass = 'fa-file-code';
            colorClass = '#4dacff'; // blue
        } else if (report.format === 'CSV') {
            iconClass = 'fa-file-csv';
            colorClass = '#51cf66'; // green
        }

        html += `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas ${iconClass}" style="color: ${colorClass}; font-size: 18px;"></i>
                        <span style="font-weight: 500; color: white;">${report.name}</span>
                    </div>
                </td>
                <td>
                    <div style="color: var(--text-primary);">${report.target}</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">${report.scanType}</div>
                </td>
                <td>${report.date}</td>
                <td>
                    <span class="status-badge" style="background: rgba(255,255,255,0.1); color: var(--text-secondary); border: 1px solid var(--border-color);">
                        ${report.format}
                    </span>
                    <span style="margin-left: 8px; font-size: 12px; color: var(--text-secondary);">${report.size}</span>
                </td>
                <td style="text-align: right;">
                    <div class="action-buttons" style="justify-content: flex-end;">
                        <button class="action-btn btn-download" title="Download" data-id="${report.id}">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="action-btn" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn delete-btn" title="Delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;

    // Attach event listeners
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', function () {
            const reportId = this.getAttribute('data-id');
            const report = reports.find(r => r.id == reportId);
            if (report) {
                downloadReport(report);
            }
        });
    });
}

function downloadReport(report) {
    // Create dummy content
    const content = `Report: ${report.name}\nTarget: ${report.target}\nDate: ${report.date}\n\nThis is a mock report generated for demonstration purposes.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // Set filename
    const extension = report.format.toLowerCase();
    a.download = `${report.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}.txt`; // appending .txt so it opens easily

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
