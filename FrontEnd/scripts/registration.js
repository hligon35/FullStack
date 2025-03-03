document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("#registrationForm");
    const registrationBtn = document.querySelector("#registrationBtn");

    registrationBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const email = document.querySelector("#email").value;

        const userId = 'user_' + new Date().getTime();

        const userData = {
            id: userId,
            username: username,
            password: password,
            email: email
        };

        // Get existing users from local storage
        let users = JSON.parse(localStorage.getItem('userLoginData')) || [];

        // Add new user to the array
        users.push(userData);

        // Save updated users array to local storage
        localStorage.setItem('userLoginData', JSON.stringify(users));

        alert('Registration successful!');
        form.reset();
    });
});