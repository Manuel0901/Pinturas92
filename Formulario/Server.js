import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Middleware para parsear el cuerpo de la solicitud en formato JSON
app.use(express.json());
app.use(cors());

// Ruta GET básica para verificar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // O el servicio de correo que estés usando
    auth: {
        user: 'manuelgarciajm85@gmail.com', // Tu correo de Gmail
        pass: 'zhtu pauz jwrb hpci'         // Clave de aplicación generada en Gmail
    }
});

// Ruta POST para manejar el envío del correo
app.post('/send-email', (req, res) => {
    console.log('Datos recibidos:', req.body); // Log para verificar los datos recibidos

    const { name, phone, email, message } = req.body;

    // Validación de los campos
    if (!name || !phone || !email || !message) {
        console.error('Faltan datos en el formulario.');
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    const mailOptions = {
        from: 'manuelgarciajm85@gmail.com', // Tu correo de Gmail
        to: 'jose_manuelgarciarevalo@hotmail.com', // Correo donde se enviará el mensaje
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).send('Error al enviar el mensaje.');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo enviado con éxito.');
        }
    });
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
