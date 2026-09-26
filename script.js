// Seleccionamos los elementos del menú mediante sus IDs y Clases
const mobileMenuButton = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar');

// Escuchamos el evento 'click' en el botón de hamburguesa
mobileMenuButton.addEventListener('click', () => {
    // Al hacer clic, añade o quita la clase 'active' a la barra de navegación
    navbarMenu.classList.toggle('active');
    
    // Animación visual básica para el botón de hamburguesa
    mobileMenuButton.classList.toggle('is-active');
});

// Cerrar el menú automáticamente cuando se hace clic en cualquier enlace (útil en móviles)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});
