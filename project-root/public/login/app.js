document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'ani' && password === 'ani') {
        window.location.href = '../cuponera/index.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
