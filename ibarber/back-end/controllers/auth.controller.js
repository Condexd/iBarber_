import { bcrypt, crypto, jwt, dotenv, usuarioModel, correoelectronico, enviarCorreo, BarberiaModel } from "../Modulos/barril.js";
dotenv.config();

export const postUsuario = async (req, res) => {
  try {
    const { nombres, apellidos, usuario, password, email } = req.body;

    const usuarioExistente = await usuarioModel.findOne({ usuario: usuario });
    const usuarioExistenteCorreo = await usuarioModel.findOne({ correo: email });

    if (usuarioExistente && usuarioExistenteCorreo )return res.status(400).json({ message: ' Nombre de usuario y correo ya estan registrados' });

    if (usuarioExistente )return res.status(400).json({ message: 'Nombre de usuario ya registrado' });

    if(usuarioExistenteCorreo)return res.status(400).json({ message: 'Correo ya registrado' });

    const contrasenaencriptada = await bcrypt.hash(password, 10);// Encripta la contraseña antes de guardarla

    const data = new usuarioModel({
      nombres: nombres,
      apellidos: apellidos,
      usuario: usuario,
      password: contrasenaencriptada,
      correo: email,
      active:false,
    });

    const result = await data.save();
    res.status(200).json({message:"Registro exítoso"});
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const loginUsuario = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const user = await usuarioModel.findOne({ usuario: usuario});

    if (!user)return res.status(401).json({ message: 'Usuario no encontrado' });

    const contraseñaValida = await bcrypt.compare(password, user.password);// Compara la contraseña ingresada con la contraseña almacenada en la base de datos

    if (!contraseñaValida)return res.status(401).json({ message: 'Contraseña incorrecta' });

    const usuarioTieneBarberia = await BarberiaModel.findOne({ "dueño.usuario": usuario });
    // Genera un token JWT con la información del usuario (puedes personalizar el payload)
    const token = jwt.sign({ usuarioId: user.usuario }, 'tu_secreto_secreto', {
      expiresIn: '2d', // Define la expiración del token (ejemplo: 1 hora)
    });
    const barberia = usuarioTieneBarberia ? true : false;
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        barberia,
        usuario: user.usuario,
      },
    });

  } catch (error) {
    console.error('Error al iniciar sesión:', error, );
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const recuperarUsuario = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await usuarioModel.findOne({ correo: email }); // Verificar si el correo electrónico existe en la base de datos

    if (!user) return res.status(404).json({ message: 'El correo electrónico no existe en nuestra base de datos' }); 
    const newPassword = crypto.randomBytes(12).toString('hex');    // Generar una nueva contraseña segura

    const contrasenaencriptada = await bcrypt.hash(newPassword, 10); // Hashea la nueva contraseña antes de guardarla en la base de datos

    await usuarioModel.updateOne({ correo: email }, { password: contrasenaencriptada });// Almacena la nueva contraseña en la base de datos

    const asunto = 'Recuperación de Cuenta';
    const contenido = correoelectronico(user.usuario, newPassword);
    await enviarCorreo(email, asunto, contenido);

    res.status(200).json({ message: 'Se han enviado tus credenciales a tu correo electrónico' });
  } catch (error) {
    console.error('Error en la solicitud:', error);
    res.status(500).json({ message: 'Hubo un error al procesar tu solicitud' });
  }
}