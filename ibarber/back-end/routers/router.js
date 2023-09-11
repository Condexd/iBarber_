import { Router } from "express";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jwt from "jsonwebtoken";
import usuarioModel from "../models/usuario.js";

const router = Router();

// Ruta para registrar usuarios
router.post('/usuarios', async (req, res) => {
  try {
    const { nombres, apellidos, numeroDocumento, password ,email} = req.body;

    // Encripta la contraseña antes de guardarla
    const contrasenaencriptada = await bcrypt.hash(password, 10);

    const data = new usuarioModel({
      nombres: nombres,
      apellidos: apellidos,
      documento: numeroDocumento,
      password: contrasenaencriptada,
      correo:email,
    });

    const result = await data.save();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


// Ruta para el inicio de sesión y generación del token JWT
router.post('/login', async (req, res) => {
  try {
    const { numeroDocumento, password } = req.body;

    // Busca al usuario por número de documento en la base de datos
    const user = await usuarioModel.findOne({ documento: numeroDocumento });

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
    const contraseñaValida = await bcrypt.compare(password, user.password);

    if (!contraseñaValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera un token JWT con la información del usuario (puedes personalizar el payload)
    const token = jwt.sign({ usuarioId: user._id }, 'tu_secreto_secreto', {
      expiresIn: '1h', // Define la expiración del token (ejemplo: 1 hora)
    });

    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});



router.post('/recuperar', async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar si el correo electrónico existe en la base de datos
    const user = await usuarioModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'El correo electrónico no existe en nuestra base de datos.' });
    }

    // Generar una nueva contraseña segura
    const newPassword = crypto.randomBytes(8).toString('hex'); // Puedes ajustar la longitud de la contraseña según tus necesidades

    // Hashea la nueva contraseña antes de guardarla en la base de datos
    const contrasenaencriptada = await bcrypt.hash(newPassword, 10);

    // Almacena la nueva contraseña en la base de datos
    user.password = contrasenaencriptada;
    await user.save();
    // Enviar la nueva contraseña al correo electrónico del usuario
    const transporter = nodemailer.createTransport({
      service: 'Email',
      auth: {
        user: '', // Reemplaza con tus credenciales de Gmail
        pass: '',
      },
    });

    const mailOptions = {
      from: 'correo',
      to: email,
      subject: 'Recuperación de contraseña',
      text: `Tu nueva contraseña es: ${newPassword}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Se ha enviado una nueva contraseña a tu correo electrónico.' });
  } catch (error) {
    console.error('Error en la solicitud:', error);
    res.status(500).json({ message: 'Hubo un error al procesar tu solicitud.' });
  }
});



export default router;
