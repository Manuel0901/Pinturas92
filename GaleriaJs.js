// Abre el modal y muestra la imagen seleccionada
function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = image.src; // Establece la imagen seleccionada
    captionText.innerHTML = image.alt; // Muestra el texto alternativo como descripción
}

// Cierra el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
