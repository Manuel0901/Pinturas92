import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER); // Debería imprimir tu_correo@gmail.com
console.log('EMAIL_PASS:', process.env.EMAIL_PASS); // Debería imprimir tu_contraseña_de_aplicación

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.post('/send-email', (req, res) => {
    console.log('Datos recibidos:', req.body);

    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
        console.error('Faltan datos en el formulario.');
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'jose_manuelgarciarevalo@hotmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`,
    };

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

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
