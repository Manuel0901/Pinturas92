// Seleccionar el formulario y el div de respuesta
const contactForm = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

// Escuchar el evento 'submit' del formulario
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado (recargar la página)

    // Capturar los datos del formulario
    const formData = new FormData(contactForm);

    try {
        // Enviar los datos al archivo PHP
        const response = await fetch('ArchivosPhp/enviar.php', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json(); // Suponiendo que enviar.php retorna JSON

        if (response.ok && result.success) {
            alert('¡Mensaje enviado con éxito!');
            contactForm.reset(); // Limpiar los campos del formulario
        } else {
            alert('Hubo un error al enviar el mensaje: ' + result.error);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error inesperado. Inténtalo nuevamente.');
    }
});
