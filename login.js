document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = document.getElementById("role").value;
        const message = document.getElementById("message");


        // Check fields
        if (!email || !password || !role) {

            message.style.color = "red";
            message.innerText = "Please fill in all fields.";

            return;
        }


        // Login successful
        message.style.color = "green";
        message.innerText = "Login successful! Redirecting...";


        // Redirect based on role
        setTimeout(function () {

            switch (role) {

                case "student":
                    window.location.href = "student-dashboard.html";
                    break;

                case "faculty":
                    window.location.href = "faculty-dashboard.html";
                    break;

                case "hod":
                    window.location.href = "admin-dashboard.html";
                    break;

                case "hoi":
                    window.location.href = "admin-dashboard.html";
                    break;

                case "admin":
                    window.location.href = "admin-dashboard.html";
                    break;

                case "owner":
                    window.location.href = "admin-dashboard.html";
                    break;

                default:
                    message.style.color = "red";
                    message.innerText = "Please select a valid role.";
            }

        }, 800);

    });

});