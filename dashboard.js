// // Basic Dashboard Logic

// const API_BASE_URL = "http://localhost:8080/api";

// document.addEventListener('DOMContentLoaded', () => {
//     console.log("Dashboard loaded");

//     // Check for Authentication
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     const authToken = localStorage.getItem('authToken');

//     if (!currentUser) {
//         // Redirect to login if no user is found
//         window.location.href = "../Login/login.jsp";
//         return;
//     }

//     // Optional: Display user name
//     // const userNameDisplay = document.getElementById('userNameDisplay');
//     // if (userNameDisplay && currentUser.firstName) {
//     //     userNameDisplay.textContent = `${currentUser.firstName} ${currentUser.lastName}`;
//     // }

//     // Fetch Dashboard Data
//     fetchDashboardStats();

//     // Tab switching logic (Visual only for now)
//     const tabs = document.querySelectorAll('.tab-link');
//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             tabs.forEach(t => t.classList.remove('active'));
//             tab.classList.add('active');
//         });
//     });

//     // Mobile sidebar toggle (optional)
//     const toggleBtn = document.querySelector('.toggle-menu');
//     const sidebar = document.querySelector('.sidebar');

//     if (toggleBtn) {
//         toggleBtn.addEventListener('click', () => {
//             sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
//         });
//     }

//     // Logout Functionality
//     const logoutBtn = document.getElementById('logoutBtn'); // Assuming you might have one
//     if (logoutBtn) {
//         logoutBtn.addEventListener('click', () => {
//             localStorage.removeItem('currentUser');
//             localStorage.removeItem('authToken');
//             window.location.href = "../Login/login.jsp";
//         });
//     }
// });

// async function fetchDashboardStats() {
//     try {
//         const authToken = localStorage.getItem('authToken');
//         const headers = {
//             "Content-Type": "application/json"
//         };

//         if (authToken) {
//             headers["Authorization"] = `Bearer ${authToken}`;
//         }

//         const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
//             method: "GET",
//             headers: headers
//         });

//         if (response.ok) {
//             const data = await response.json();
//             updateDashboardUI(data);
//         } else {
//             console.error("Failed to fetch dashboard stats", response.status);
//             if (response.status === 401 || response.status === 403) {
//                 // Token invalid/expired
//                 localStorage.removeItem('currentUser');
//                 localStorage.removeItem('authToken');
//                 window.location.href = "../Login/login.jsp";
//             }
//         }
//     } catch (error) {
//         console.error("Error fetching dashboard stats:", error);
//     }
// }

// function updateDashboardUI(data) {
//     // Example: Update elements by ID. Adjust IDs based on your actual HTML structure.

//     // Example mapping based on previous server.js mock data:
//     // scannedAssets: { current: 0, total: 5 }
//     // runningScans: { current: 0, total: 2 }
//     // waitingScans: { current: 0, total: 25 }
//     // addedAssets: { current: 0, total: 100 }

//     // You likely need to add IDs to the `dashboard.html` elements to make this work.
//     // For now, I'll log the data so you can see it's working, and try to find generic elements.
//     console.log("Dashboard Data:", data);

//     const updateElement = (id, value) => {
//         const el = document.getElementById(id);
//         if (el) el.innerText = value;
//     };

//     if (data.scannedAssets) updateElement('scanned-assets-count', data.scannedAssets.total);
//     if (data.runningScans) updateElement('running-scans-count', data.runningScans.total);
//     if (data.waitingScans) updateElement('waiting-scans-count', data.waitingScans.total);
//     if (data.addedAssets) updateElement('added-assets-count', data.addedAssets.total);
// }
