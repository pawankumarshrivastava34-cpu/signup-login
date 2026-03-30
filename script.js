// ===================== TOGGLE PANEL =====================
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});


// ===================== FORMS =====================
const signUpForm = document.querySelector(".sign-up-container form");
const signInForm = document.querySelector(".sign-in-container form");


// ===================== SIGN UP =====================
signUpForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let inputs = signUpForm.querySelectorAll("input");

    let name = inputs[0].value.trim();
    let email = inputs[1].value.trim();
    let password = inputs[2].value.trim();
    let confirmPassword = inputs[3].value.trim();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("⚠️ Please fill all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
    }

    // Save data in LocalStorage
    let userData = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("✅ Signup Successful! Now Login");
    signUpForm.reset();

    // Auto switch to login
    container.classList.remove("right-panel-active");
});


// ===================== LOGIN =====================
signInForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let inputs = signInForm.querySelectorAll("input");

    let email = inputs[0].value.trim();
    let password = inputs[1].value.trim();

    if (email === "" || password === "") {
        alert("⚠️ Please fill all fields!");
        return;
    }

    // Get stored data
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("❌ No account found! Please signup first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
    alert("✅ Login Successful!");

    // Redirect to dashboard
    window.location.href = "index2.html";
    } else {
        alert("❌ Invalid Email or Password!");
    }
});


// Mobile toggle links
const goToSignup = document.getElementById("goToSignup");
const goToLogin = document.getElementById("goToLogin");

if(goToSignup){
    goToSignup.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });
}

if(goToLogin){
    goToLogin.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });
}
