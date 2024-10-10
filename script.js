
document.addEventListener('DOMContentLoaded', function() {
        const emailInput = document.getElementById('email');
        const errorMessage = document.querySelector('.error-message');
        const clearBtn = document.getElementById('clearBtn');
        const submitBtn = document.getElementById('submitBtn');
        const mainContainer = document.getElementById('container');
        const successContainer = document.getElementById('success-container');

        function isValidEmail(email) {
            // Regular expression to check for '@' and '.' in the email
                const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                return regex.test(email);
            }

        // Listener for the submit button
        submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        // Check if email is correct or input exists, if not provide an error
        if (!isValidEmail(emailInput.value) || !emailInput.value) {
            event.preventDefault(); // Prevent form submission
            emailInput.classList.add('error'); // Add error class
            errorMessage.style.display = 'block'; // Show error message
        } else {
            mainContainer.style.display = 'none';
            successContainer.style.display = 'flex';

        }
        
        // Listener for input event to reset error state
        emailInput.addEventListener('input', function() {
        // Remove error state when user starts typing
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
        
        // Show the clear button when the user types something
        if (emailInput.value.length > 0) {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
        });

    });

        // Listener for dismiss button
        dismissBtn.addEventListener('click', function(event){
        mainContainer.style.display = 'flex';
        successContainer.style.display = 'none';
        clearBtn.style.display = 'none';
        emailInput.value = '';
    })


        // Listener
        emailInput.addEventListener('input', function() {
        
        // Show the clear button when the user types something
        if (emailInput.value.length > 0) {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
        });


        // Listener for the claer button
        clearBtn.addEventListener('click', function() {
        emailInput.value = ''; // Clear the input field
        emailInput.classList.remove('error'); // Remove the error state if present
        errorMessage.style.display = 'none'; // Hide the error message
        clearBtn.style.display = 'none'; // Hide the clear button again
        });
});
