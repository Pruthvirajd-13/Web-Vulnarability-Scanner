document.addEventListener('DOMContentLoaded', () => {

    const assetsTable = document.getElementById('assetsTableBody');
    const assetCountBadge = document.getElementById('assetCountBadge');

    // Initial Mock Data
    let assets = [
        { id: 1, name: "example.com", desc: "Main Website", type: "domain", risk: 65, lastScan: "2 hours ago", tags: ["Production", "External"] },
        { id: 2, name: "192.168.1.5", desc: "Database Server", type: "ip", risk: 20, lastScan: "Yesterday", tags: ["Internal", "Database"] },
        { id: 3, name: "dev.example.com", desc: "Staging Environment", type: "subdomain", risk: 0, lastScan: "Never", tags: ["Staging"] }
    ];

    function renderAssets() {
        if (!assetsTable) return;

        assetsTable.innerHTML = '';

        assets.forEach(asset => {
            // Risk Color Logic
            let riskColor = '#3B82F6'; // low
            let riskLabel = 'Low';
            if (asset.risk > 50) { riskColor = '#F59E0B'; riskLabel = 'Medium'; }
            if (asset.risk > 80) { riskColor = '#EF4444'; riskLabel = 'High'; }
            if (asset.risk === 0) { riskColor = '#334155'; riskLabel = 'None'; }

            // Icon Logic
            let iconClass = 'fa-globe';
            if (asset.type === 'ip') iconClass = 'fa-server';
            if (asset.type === 'subdomain') iconClass = 'fa-project-diagram';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div class="asset-icon"><i class="fas ${iconClass}"></i></div>
                        <div>
                            <div style="font-weight: 600; font-size: 15px;">${asset.name}</div>
                            <div style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;">${asset.desc || asset.type}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div style="display: flex; gap: 5px;">
                        ${asset.tags.map(tag => `<span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px; font-size: 11px; border: 1px solid var(--border-color);">${tag}</span>`).join('')}
                    </div>
                </td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="text-align: right;">
                            <div class="risk-score-text" style="color: ${riskColor}">${asset.risk}/100</div>
                        </div>
                        <div class="risk-bar-container">
                            <div class="risk-bar-fill" style="width: ${asset.risk}%; background: ${riskColor};"></div>
                        </div>
                    </div>
                </td>
                <td>${asset.lastScan}</td>
                <td style="text-align: right;">
                    <button class="action-btn scan-asset-btn" title="Scan Now"><i class="fas fa-play"></i></button>
                    <button class="action-btn" title="Settings"><i class="fas fa-cog"></i></button>
                    <button class="action-btn delete-asset-btn" data-id="${asset.id}" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            assetsTable.appendChild(tr);
        });

        // Update badge
        if (assetCountBadge) assetCountBadge.innerText = assets.length;
    }

    renderAssets();

    // Modal Logic
    const addModal = document.getElementById('addAssetModal');
    const addBtn = document.getElementById('addAssetBtn');
    const cancelBtn = document.getElementById('cancelAddBtn');
    const saveBtn = document.getElementById('saveAssetBtn');
    const nameInput = document.getElementById('newAssetName');
    const descInput = document.getElementById('newAssetDesc');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addModal.classList.add('active');
            nameInput.focus();
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            addModal.classList.remove('active');
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const name = nameInput.value;
            if (!name) { alert("Asset name is required"); return; }

            assets.unshift({
                id: Date.now(),
                name: name,
                desc: descInput.value || "Custom Asset",
                type: name.match(/^\d/) ? "ip" : "domain",
                risk: 0,
                lastScan: "Never",
                tags: ["New"]
            });

            renderAssets();
            addModal.classList.remove('active');
            nameInput.value = '';
            descInput.value = '';
        });
    }

    // Event Delegation for Delete/Scan
    assetsTable.addEventListener('click', (e) => {
        if (e.target.closest('.delete-asset-btn')) {
            if (confirm('Are you sure you want to delete this asset?')) {
                const id = e.target.closest('.delete-asset-btn').dataset.id;
                assets = assets.filter(a => a.id != id);
                renderAssets();
            }
        }
        if (e.target.closest('.scan-asset-btn')) {
            window.location.href = 'new_scan.html';
        }
    });

});
