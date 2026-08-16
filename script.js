const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const message = document.getElementById("message");

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";

    let valid = true;

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must contain at least 6 characters";
        valid = false;
    }

    // Login success
    if (valid) {
        message.textContent = "Login successful!";
        message.style.color = "green";

        console.log("Email:", email);
        console.log("Password:", password);

        // You can connect your backend API here later.
    }
});