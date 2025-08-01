document.addEventListener('DOMContentLoaded', function() {
 
    const form = document.getElementById('registration-form');
     
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    })

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be more than 3 characters long.");      
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Email must contain an '@' and a '.' character.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long");
    }

    if (feedbackDiv) {
        feedbackDiv.style.display = 'block';
    }

    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    }

    if (!isValid) {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
    }

}
)