const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Función para cambiar entre formularios de registro e inicio de sesión
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para registrar un nuevo usuario
document.querySelector('.sign-up form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Validaciones
    if (!name || !email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Guardar los datos del usuario en localStorage
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
    alert('Registro exitoso');

    // Redirigir al formulario de inicio de sesión
    container.classList.remove("active");
    this.reset();
});

// Función para iniciar sesión
document.querySelector('.sign-in form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Validaciones
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Obtener los datos del usuario desde localStorage
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');

        // Redirigir a la página "pagina.html"
        window.location.href = 'cliente.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
    this.reset();
});
