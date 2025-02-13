document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = sessionStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {
        showContent();
    } else {
        showLogin();
    }
});

function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "mechi" && password === "what") {
        sessionStorage.setItem("loggedIn", "true"); // Store login state in sessionStorage
        showContent();
    } else {
        document.getElementById("error-msg").innerText = "Incorrect Username or Password";
    }
}

function showContent() {
    document.getElementById("loginid").style.display = "none";
    document.getElementById("indexfile").style.display = "block";
    
}

function showLogin() {
    document.getElementById("indexfile").style.display = "none";
    document.getElementById("loginid").style.display = "flex";
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    showLogin();
}
