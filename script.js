/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        const emailInput = document.getElementById('email');
        const errorMessage = document.querySelector('.error-message');

        
        // Check if the input is empty or invalid
        if (!emailInput.value || !emailInput.checkValidity()) {
            event.preventDefault(); // Prevent form submission
            emailInput.classList.add('error'); // Add error class
            errorMessage.style.display = 'block'; // Show error message
        }

        // Listener for input event to reset error state
        emailInput.addEventListener('input', function() {
        // Remove error state when user starts typing
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
    });
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        const emailInput = document.getElementById('email');
        const errorMessage = document.querySelector('.error-message');

        function isValidEmail(email) {
        // Regular expression to check for '@' and '.' in the email
            const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            return regex.test(email);
        }
        
        // Check if email is correct or input exists, if not provide an error
        if (!isValidEmail(emailInput.value) || !emailInput.value) {
            event.preventDefault(); // Prevent form submission
            emailInput.classList.add('error'); // Add error class
            errorMessage.style.display = 'block'; // Show error message
        } 
        
        // Listener for input event to reset error state
        emailInput.addEventListener('input', function() {
        // Remove error state when user starts typing
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
    });
    });
});
