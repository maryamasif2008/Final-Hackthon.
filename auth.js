// auth.js

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

// 🔐 Save users in localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ✅ Signup
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const users = getUsers();

    // Check if email already exists
    if (users.find(user => user.email === email)) {
      alert("Email already registered. Please login.");
      return;
    }

    users.push({ name, email, password });
    saveUsers(users);
    alert("Signup successful. Please login.");
    window.location.href = "login.html";
  });
}

// ✅ Login
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = getUsers();
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}
