// Función para mostrar opciones
function mostrarOpciones(id) {
    // Oculta todas las opciones primero
    document.querySelectorAll('.opciones').forEach(opcion => {
        opcion.style.display = 'none';
    });

    // Muestra solo la opción seleccionada
    const opcionSeleccionada = document.getElementById(id);
    if (opcionSeleccionada) {
        opcionSeleccionada.style.display = 'block';
    }
}

// Función para alternar entre el modo claro y el modo oscuro
function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const items = document.querySelectorAll('.service-item, .portfolio-item');
    const icon = document.querySelector('#theme-toggle i');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    items.forEach(item => item.classList.toggle('dark-mode'));

    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'light');
    }
}

// Función para manejar el inicio de sesión
function handleSignIn(event) {
    event.preventDefault();

    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedInUser', email);
        window.location.href = 'pagina.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }

    event.target.reset();
}

// Función para manejar el cierre de sesión
function handleLogout(event) {
    event.preventDefault();

    const email = localStorage.getItem('loggedInUser');
    if (email) {
        localStorage.removeItem(email);
        localStorage.removeItem('loggedInUser');
    }

    window.location.href = 'login.html';
}

// Función para manejar el menú hamburguesa
function toggleMenu() {
    document.querySelector(".nav-list").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById("menu-toggle");
    const logoutButton = document.getElementById('logout-button');
    const signInForm = document.querySelector('.sign-in form');

    // Asignar eventos
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
});


