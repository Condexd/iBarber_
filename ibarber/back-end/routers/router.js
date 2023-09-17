import { Router } from "express";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import usuarioModel from "../models/usuario.js";
dotenv.config();
const router = Router();

// Ruta para registrar usuarios
router.post('/usuarios', async (req, res) => {
  try {
    const { nombres, apellidos, usuario, password, email } = req.body;

    const usuarioExistente = await usuarioModel.findOne({ usuario: usuario });
    const usuarioExistenteCorreo = await usuarioModel.findOne({ correo: email });

    if (usuarioExistente && usuarioExistenteCorreo ) {
      return res.status(400).json({ message: ' Nombre de usuario y correo ya estan registrados' });
    }

    if (usuarioExistente ) {
      return res.status(400).json({ message: 'Nombre de usuario ya registrado' });
    }
    if(usuarioExistenteCorreo){
      return res.status(400).json({ message: 'Correo ya registrado' });

    }

    // Encripta la contraseña antes de guardarla
    const contrasenaencriptada = await bcrypt.hash(password, 10);

    const data = new usuarioModel({
      nombres: nombres,
      apellidos: apellidos,
      usuario: usuario,
      password: contrasenaencriptada,
      correo: email,
    });

    const result = await data.save();
    res.status(200).json({message:"Registro exítoso"});
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});



// Ruta para el inicio de sesión y generación del token JWT
router.post('/login', async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const user = await usuarioModel.findOne({ usuario: usuario});

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

    res.status(200).json({ message: 'Inicio de sesión exitoso', token, user:{
      _id: user._id,
      nombre: user.nombres,
      apellido: user.apellidos,
      correo:user.correo,
    }, });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});



router.post('/recuperar', async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar si el correo electrónico existe en la base de datos
    const user = await usuarioModel.findOne({ correo: email });

    if (!user) {
      return res.status(404).json({ message: 'El correo electrónico no existe en nuestra base de datos' });
    }

    // Generar una nueva contraseña segura
    const newPassword = crypto.randomBytes(12).toString('hex'); // Aumentar la longitud de la contraseña

    // Hashea la nueva contraseña antes de guardarla en la base de datos
    const contrasenaencriptada = await bcrypt.hash(newPassword, 10);

    // Almacena la nueva contraseña en la base de datos
    await usuarioModel.updateOne({ correo: email }, { password: contrasenaencriptada });

    // Enviar la nueva contraseña al correo electrónico del usuario
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.CORREO, // Reemplaza con tus credenciales de Gmail
        pass: process.env.CONTRASENA,
      },
    });
    
    const mailOptions = {
      from: process.env.CORREO,
      to: email,
      subject: 'Recuperación de contraseña',
      html: `
        <html>
          <body>
            <p>Hola,</p>
            <p>Recibiste este correo electrónico porque solicitaste  recuperar tu cuenta</p>
            <p>Tu usuario es: <strong>${user.usuario}</strong></p>
            <p>Tu nueva contraseña es: <strong>${newPassword}</strong></p>
            <p>Te recomendamos cambiar esta contraseña después de iniciar sesión.</p>
            <p>Gracias,</p>
            <p>Equipo de Soporte de iBarber</p>
          </body>
        </html>
      `,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Se han enviado tus credenciales a tu correo electrónico' });
  } catch (error) {
    console.error('Error en la solicitud:', error);
    res.status(500).json({ message: 'Hubo un error al procesar tu solicitud' });
  }
});

router.put('/usuario/:id', async (req, res) => {
  try {
    const id= req.params.id;
    const updateData = req.body;
    const options = { new: true };
    const result = await usuarioModel.findByIdAndUpdate(id, updateData, options);
    res.json({message:"actualizado"})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;
