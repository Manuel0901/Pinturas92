document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('src');
            const alt = item.getAttribute('alt');
            openModal(src, alt);
        });
    });

    function openModal(src, alt) {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-image');
        const caption = document.getElementById('caption');

        modal.style.display = 'flex';
        modalImg.src = src;
        modalImg.alt = alt;
        caption.innerText = alt;
    }

    window.closeModal = function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    };
});
