document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita recargar la página

    // Recoge los valores del formulario
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Inicializa el mensaje de respuesta y lo limpia
    const responseMessageElement = document.getElementById('responseMessage');
    responseMessageElement.textContent = '';  // Limpia cualquier mensaje previo

    // Validaciones simples
    if (!name || !phone || !email || !message) {
        responseMessageElement.textContent = 'Por favor, llena todos los campos.';
        responseMessageElement.style.color = 'red';
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        responseMessageElement.textContent = 'Por favor, ingresa un correo electrónico válido.';
        responseMessageElement.style.color = 'red';
        return;
    }

    // Muestra el indicador de carga
    responseMessageElement.textContent = 'Enviando...';
    responseMessageElement.style.color = 'blue';

    const data = { name, phone, email, message };

    // Llama a la API o backend para enviar el correo
    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            responseMessageElement.textContent = 'Mensaje enviado con éxito. ¡Gracias por contactarnos!';
            responseMessageElement.style.color = 'green';
            document.getElementById('contactForm').reset(); // Limpia el formulario
        } else {
            responseMessageElement.textContent = 'Error al enviar el mensaje. Por favor, intenta más tarde.';
            responseMessageElement.style.color = 'red';
        }
    } catch (error) {
        responseMessageElement.textContent = 'Ocurrió un error. Verifica tu conexión e intenta nuevamente.';
        responseMessageElement.style.color = 'red';
    }
});
