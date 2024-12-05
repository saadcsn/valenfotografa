document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('show');
    }
    window.toggleMenu = toggleMenu; // Hacer la función accesible globalmente
});
function scrollGallery(direction) {
    const galleryGrid = document.getElementById('galleryGrid');
    const scrollAmount = 250; // Ajusta la cantidad de desplazamiento
    galleryGrid.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
;
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Mostrar/ocultar menú al hacer clic en el botón de hamburguesa
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // Cambia entre mostrar y ocultar el menú
    });

    // Cerrar menú al seleccionar una opción
    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("show"); // Oculta el menú al hacer clic en un enlace
        }
    });
});