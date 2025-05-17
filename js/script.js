document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");
    const inicioSesion = document.querySelector(".login-button");

    inicioSesion.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'pages/login.html';
    })




    // Verificar si el usuario ya ha seleccionado un tema
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('.service-item, .portfolio-item').forEach(item => {
            item.classList.add('dark-mode');
        });
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('.service-item, .portfolio-item').forEach(item => {
            item.classList.toggle('dark-mode');
        });

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    // Menú hamburguesa: Mostrar/Ocultar
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});
