import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

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
        to: 'jose_manuelgarciarevalo@hotmail.com', // Cambia esto al correo de la empresa
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

// Ruta para probar el envío de correo
app.get('/send-email', async (req, res) => {
    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'manuelgarcia85@gmail.com', // Correo de prueba
            subject: 'Correo de prueba',
            text: 'Este es un correo de prueba para verificar la configuración de Nodemailer.',
        });
        console.log('Correo de prueba enviado: ' + info.response);
        res.status(200).send('Correo de prueba enviado con éxito.');
    } catch (error) {
        console.error('Error al enviar el correo de prueba:', error);
        res.status(500).send('Error al enviar el correo de prueba.');
    }
});

app.listen