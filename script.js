document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const logoutForm = document.getElementById('logout-form');

    registerForm.addEventListener('submit', async (e) => { // Corrected variable name
        e.preventDefault();
        const formData = new FormData(registerForm);
        const username = formData.get('username'); // Fixed string parameter
        const password = formData.get('password'); // Fixed string parameter
        const email = formData.get('email'); // Fixed string parameter
        const full_name = formData.get('full_name'); // Fixed string parameter
        try {
            const response = await fetch('https://acs314flutter.xyz/LMS/register.php', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ username, password, email, full_name }) 
            });
            if (response.ok) { 
                alert('Registration successful.');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error', error);
        }

    });
});
