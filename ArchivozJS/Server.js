// Importaciones necesarias
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Configuración de variables de entorno
dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

// Inicialización del servidor
const app = express();

// Middlewares
app.use(express.json()); // Parsear JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true })); // Parsear datos codificados como formulario
app.use(cors()); // Permitir solicitudes de otros orígenes

// Configuración para servir archivos estáticos desde la raíz del proyecto
const publicPath = __dirname; // Ahora apunta a la raíz del proyecto
app.use(express.static(publicPath));


// Configuración de transporte para nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true para puerto 465
    auth: {
        user: process.env.EMAIL_USER, // Usuario del correo
        pass: process.env.EMAIL_PASS, // Contraseña o app password
    },
});

// Ruta principal para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'Index.html')); // Carga el archivo `Index.html` como página principal
});

// Ruta para manejar el envío de correos
app.post('/send-email', (req, res) => {
    const { name, phone, email, message } = req.body;

    // Validación de los campos del formulario
    if (!name || !phone || !email || !message) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    // Opciones para el correo
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'jose_manuelgarciarevalo@hotmail.com', // Dirección de destino
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el mensaje.');
        }
        res.status(200).send('Correo enviado con éxito.');
    });
});

// Manejador global de errores
app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).send('Ha ocurrido un error en el servidor.');
});

// Puerto dinámico para el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
