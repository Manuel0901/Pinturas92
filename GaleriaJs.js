const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Actualizar el enfoque de la imagen central
function updateCarousel() {
    images.forEach((image, index) => {
        image.classList.remove('active');
        if (index === currentIndex) {
            image.classList.add('active');
        }
    });

    const offset = -currentIndex * (images[0].offsetWidth + 20); // Ajustar el desplazamiento
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Navegar a la izquierda
function moveLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Navegar a la derecha
function moveRight() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Mostrar el lightbox
function showLightbox(index) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');
    lightbox.style.display = 'flex';
    lightboxImage.src = images[index].src;
    currentIndex = index;
}

// Cerrar el lightbox
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}

// Navegar dentro del lightbox
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const lightboxImage = document.querySelector('.lightbox img');
    lightboxImage.src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const lightboxImage = document.querySelector('.lightbox img');
    lightboxImage.src = images[currentIndex].src;
}

// Inicializar eventos
document.querySelector('.left-button').addEventListener('click', moveLeft);
document.querySelector('.right-button').addEventListener('click', moveRight);
images.forEach((image, index) => {const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    
    // Actualizar el enfoque de la imagen central
    function updateCarousel() {
        images.forEach((image, index) => {
            image.classList.remove('active');
            if (index === currentIndex) {
                image.classList.add('active');
            }
        });
    
        const offset = -currentIndex * (images[0].offsetWidth + 10); // Ajustar el desplazamiento
        document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
    }
    
    // Navegar a la izquierda
    function moveLeft() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }
    
    // Navegar a la derecha
    function moveRight() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }
    
    // Mostrar el lightbox
    function showLightbox(index) {
        const lightbox = document.querySelector('.lightbox');
        const lightboxImage = lightbox.querySelector('img');
        lightbox.style.display = 'flex';
        lightboxImage.src = images[index].src;
        currentIndex = index;
    }
    
    // Cerrar el lightbox
    function closeLightbox() {
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'none';
    }
    
    // Navegar dentro del lightbox
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const lightboxImage = document.querySelector('.lightbox img');
        lightboxImage.src = images[currentIndex].src;
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        const lightboxImage = document.querySelector('.lightbox img');
        lightboxImage.src = images[currentIndex].src;
    }
    
    // Inicializar eventos
    document.querySelector('.left-button').addEventListener('click', moveLeft);
    document.querySelector('.right-button').addEventListener('click', moveRight);
    images.forEach((image, index) => {
        image.addEventListener('click', () => showLightbox(index));
    });
    document.querySelector('.lightbox .close-button').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox .right-button').addEventListener('click', nextImage);
    document.querySelector('.lightbox .left-button').addEventListener('click', prevImage);
    
    // Actualizar el carrusel inicialmente
    updateCarousel();
    
    image.addEventListener('click', () => showLightbox(index));
});
document.querySelector('.lightbox .close-button').addEventListener('click', closeLightbox);
document.querySelector('.lightbox .right-button').addEventListener('click', nextImage);
document.querySelector('.lightbox .left-button').addEventListener('click', prevImage);

// Actualizar el carrusel inicialmente
updateCarousel();
