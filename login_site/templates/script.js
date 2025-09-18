const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

// Store users temporarily in memory
let users = {}; 

// Registration page
if(registerForm){
    registerForm.addEventListener("submit", function(e){
        e.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;

        if(users[username]){
            message.style.color = "red";
            message.textContent = "Username already exists!";
        } else {
            users[username] = password;
            message.style.color = "green";
            message.textContent = "Registration successful! Go to login.";
            registerForm.reset();
        }
    });
}

// Login page
if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if(users[username] && users[username] === password){
            message.style.color = "green";
            message.textContent = "Login successful!";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 500);
        } else {
            message.style.color = "red";
            message.textContent = "Invalid username or password.";
        }
    });
}
