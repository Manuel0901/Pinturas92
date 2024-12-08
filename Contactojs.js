document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita recargar la página

    // Recoge los valores del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = { name, phone, email, message };

    // Llama a la API o backend para enviar el correo
    try {
        const response = await fetch('https://tu-api-o-servidor.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            document.getElementById('responseMessage').textContent = 'Mensaje enviado con éxito. ¡Gracias por contactarnos!';
        } else {
            document.getElementById('responseMessage').textContent = 'Error al enviar el mensaje. Por favor, intenta más tarde.';
        }
    } catch (error) {
        document.getElementById('responseMessage').textContent = 'Ocurrió un error. Verifica tu conexión e intenta nuevamente.';
    }
});
