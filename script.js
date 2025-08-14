document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let nameError = name.nextElementSibling;
    let emailError = email.nextElementSibling;
    let messageError = message.nextElementSibling;
    let successMessage = document.getElementById("success-message");

    let isValid = true;

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    // Success message
    if (isValid) {
        successMessage.textContent = "✅ Your message has been submitted successfully!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});
