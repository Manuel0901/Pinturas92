// Selecciona las imágenes de la galería y el modal
const images = document.querySelectorAll('.gallery img');
const modal = document.createElement('div');
modal.classList.add('image-modal');
document.body.appendChild(modal);

// Crea el botón de cerrar
const closeButton = document.createElement('button');
closeButton.textContent = 'Cerrar';
closeButton.classList.add('close-btn');
modal.appendChild(closeButton);

// Imagen dentro del modal
const modalImage = document.createElement('img');
modal.appendChild(modalImage);

// Mostrar imagen maximizada al hacer clic
images.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.style.display = 'flex';
    });
});

// Cerrar modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
