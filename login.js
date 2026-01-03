/*




// Toggle password visibility (Login)
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

// Toggle password visibility (Signup)
const toggleSignupPassword = document.querySelector(".toggleSignupPassword");
const signupPassword = document.getElementById("signupPassword");

if (toggleSignupPassword) {
    toggleSignupPassword.addEventListener("click", () => {
        const isPassword = signupPassword.type === "password";
        signupPassword.type = isPassword ? "text" : "password";
        toggleSignupPassword.classList.toggle("fa-eye");
        toggleSignupPassword.classList.toggle("fa-eye-slash");
    });
}


// Tabs (UI only)
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const footerText = document.getElementById("footerText");
const googleBtnText = document.querySelector("#googleBtn span");
const microsoftBtnText = document.querySelector("#microsoftBtn span");


loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    footerText.classList.add("hidden");

    // Update social text
    googleBtnText.textContent = "Log in with Google";
    microsoftBtnText.textContent = "Log in with Microsoft";
});

signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    footerText.classList.remove("hidden");

    // Update social text
    googleBtnText.textContent = "Sign up with Google";
    microsoftBtnText.textContent = "Sign up with Microsoft";
});

// --- SOCIAL LOGIN HANDLERS ---
const googleBtn = document.getElementById("googleBtn");
const microsoftBtn = document.getElementById("microsoftBtn");

googleBtn.addEventListener("click", () => {
    window.location.href = `${API_BASE_URL.replace('/api', '')}/oauth2/authorization/google`;
});

microsoftBtn.addEventListener("click", () => {
    window.location.href = `${API_BASE_URL.replace('/api', '')}/oauth2/authorization/microsoft`;
});

// Check for token in URL (Social Callback)
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
        localStorage.setItem('authToken', token);
        showStatus("Social login successful! Redirecting...", "success");

        // Optionally fetch user info if needed
        setTimeout(() => {
            window.location.href = "../Dashboard/dashboard.jsp";
        }, 1500);
    }
});

// Ctrl + Enter submit
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
        if (!loginForm.classList.contains("hidden")) {
            loginForm.dispatchEvent(new Event('submit'));
        } else {
            signupForm.dispatchEvent(new Event('submit'));
        }
    }
});

// --- BACKEND API INTEGRATION ---

/* const API_BASE_URL = "http://localhost:8080/api";

async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, data };
        } else {
            return { success: false, message: data.message || "Login failed" };
        }
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, message: "Could not connect to server. Please ensure the backend is running on port 8080." };
    }
}

async function signupUser(firstName, lastName, email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, message: "User registered successfully" };
        } else {
            return { success: false, message: data.message || "Signup failed" };
        }
    } catch (error) {
        console.error("Signup Error:", error);
        return { success: false, message: "Could not connect to server. Please ensure the backend is running on port 8080." };
    }
}



// -----------------------------------

const statusMessage = document.getElementById("statusMessage");

function showStatus(message, type = 'error') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message status-${type}`;
    statusMessage.classList.remove("hidden");

    // Auto-hide after 5 seconds if it's a success message
    if (type === 'success') {
        setTimeout(() => {
            statusMessage.classList.add("hidden");
        }, 5000);
    }
}

// Handle Login Submit
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = document.getElementById('password').value;
    const submitBtn = loginForm.querySelector('button[type="submit"]');

    statusMessage.classList.add("hidden"); // Clear previous messages

    // Disable button to prevent multiple clicks
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerText = "Logging in...";

    const result = await loginUser(email, password);

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;

    if (result.success) {
        localStorage.setItem('currentUser', JSON.stringify(result.data.user || result.data));
        if (result.data.token) {
            localStorage.setItem('authToken', result.data.token);
        }
        showStatus("Login successful! Redirecting...", "success");
        setTimeout(() => {
            window.location.href = "../Dashboard/dashboard.jsp";
        }, 1000);
    } else {
        showStatus(result.message, "error");
    }
});

// Handle Signup Submit
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const firstName = signupForm.querySelector('input[placeholder="John"]').value;
    const lastName = signupForm.querySelector('input[placeholder="Doe"]').value;
    const email = signupForm.querySelector('input[placeholder="outlook@gmail.com"]').value;
    const password = document.getElementById('signupPassword').value;
    const submitBtn = signupForm.querySelector('button[type="submit"]');

    statusMessage.classList.add("hidden"); // Clear previous messages

    // Disable button
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerText = "Signing up...";

    const result = await signupUser(firstName, lastName, email, password);

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;

    if (result.success) {
        showStatus("Account created! You can now log in.", "success");
        signupForm.reset();
        setTimeout(() => {
            loginTab.click();
        }, 2000);
    } else {
        showStatus(result.message, "error");
    }
});


*/
