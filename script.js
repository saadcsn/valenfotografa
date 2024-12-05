let currentImageIndex = 0;
let images = [];


// Función para activar/desactivar el menú en pantallas pequeñas
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show"); // Agrega o elimina la clase "active"
}
// Función para abrir el lightbox con la imagen seleccionada
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex'; // Muestra el lightbox
    lightboxImg.src = imgElement.src; // Cambia la imagen al tamaño completo

    // Guardar las imágenes de la galería
    images = document.querySelectorAll('.gallery-container img');
    currentImageIndex = Array.from(images).indexOf(imgElement);
}

// Función para cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Oculta el lightbox
}

// Función para cambiar la imagen (prev/next)
function changeImage(direction) {
    currentImageIndex += direction;

    // Si estamos al principio o al final, hacer un ciclo
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex].src;
}

// Función para manejar el cambio de imagen con las flechas del teclado
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') { // Solo permite el cambio si el lightbox está abierto
        if (event.key === 'ArrowLeft') {
            // Si se presiona la flecha izquierda, cambia a la imagen anterior
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            // Si se presiona la flecha derecha, cambia a la imagen siguiente
            changeImage(1);
        } else if (event.key === 'Escape') {
            // Si se presiona la tecla Escape, cierra el lightbox
            closeLightbox();
        }
    }
})
function scrollGallery(direction) {
    const galleryGrid = document.getElementById('galleryGrid');
    const scrollAmount = 250; // Ajusta la cantidad de desplazamiento
    galleryGrid.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

;
