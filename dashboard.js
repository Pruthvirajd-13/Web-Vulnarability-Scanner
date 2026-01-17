
document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard loaded");

    // Check for Authentication (Mock logic if running locally without backend)
    // In a real scenario, you'd check a session cookie or token.
    const currentUser = localStorage.getItem('currentUser');

    // Simple redirect protection (optional, remove if testing without login)
    // if (!currentUser) {
    //     window.location.href = "login.html";
    // }

    // Logout Functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            localStorage.removeItem('authToken');
            window.location.href = "login.html";
        });
    }

    // --- Sidebar Navigation ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent default anchor behavior unless it's a real link
            const href = item.getAttribute('href');
            if (href === '#' || href === '') {
                e.preventDefault();
            }

            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active to clicked
            item.classList.add('active');
        });
    });

    // --- Tab Switching ---
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Here you would also toggle content visibility
            // For now, we just visually switch tabs
        });
    });

    // --- Buttons ---

    // "New Scan" Button
    const newScanBtn = document.querySelector('.new-scan-btn');
    if (newScanBtn) {
        newScanBtn.addEventListener('click', () => {
            window.location.href = 'new_scan.html';
        });
    }

    // "Start a scan" Buttons (Empty State)
    const startScanBtns = document.querySelectorAll('.start-scan-btn');
    startScanBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Starting New Scan Wizard...\n(Feature implementation coming soon)");
        });
    });

    // "View Scans" Link
    const viewScansLink = document.querySelector('.section-header .link-text');
    if (viewScansLink) {
        viewScansLink.style.cursor = "pointer"; // Make it look clickable
        viewScansLink.addEventListener('click', () => {
            // Simulate navigation to 'Scans' tab
            // Find the 'Scans' nav item and click it
            const scansNav = Array.from(navItems).find(i => i.innerText.includes('Scans'));
            if (scansNav) scansNav.click();
            alert("Navigating to Scan History...");
        });
    }

    // Workspace Selector
    const workspaceSelector = document.querySelector('.workspace-selector');
    if (workspaceSelector) {
        workspaceSelector.addEventListener('click', () => {
            alert("Workspace switching menu would open here.");
        });
    }

    // Mock Data Loading (Visual update)
    updateDashboardCounts();
});

function updateDashboardCounts() {
    // Simulate fetching data
    setTimeout(() => {
        const counts = {
            assets: 3,
            running: 1,
            waiting: 5,
            added: 12
        };

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };

        setVal('scanned-assets-count', counts.assets);
        setVal('running-scans-count', counts.running);
        setVal('waiting-scans-count', counts.waiting);
        setVal('added-assets-count', counts.added);
    }, 500);
}
