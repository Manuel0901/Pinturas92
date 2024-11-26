const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselImages = document.querySelectorAll('.carousel-3d-inner img');

let currentImageIndex = 0;

// Abrir lightbox
carouselImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        lightboxImg.src = img.src;
        lightbox.classList.add('visible');
        lightbox.classList.remove('hidden');
    });
});

// Cerrar lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('visible');
});

// Navegar imágenes en el lightbox
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    lightboxImg.src = carouselImages[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    lightboxImg.src = carouselImages[currentImageIndex].src;
});

// Cerrar lightbox con tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('visible');
    }
});
