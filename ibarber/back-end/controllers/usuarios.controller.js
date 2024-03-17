import { usuarioModel,bcrypt,fileURLToPath,dirname,fsPromises,path,verificarTokenYObtenerUsuario, BarberiaModel} from "../Modulos/barril.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const putUsuario = async (req, res) => {
  try {

    const token = req.headers.authorization;

    const {usuario} = await verificarTokenYObtenerUsuario(token);
    const usuarioId=usuario;
    const datosActualizar = req.body;

    const propiedadesActualizar = {
      nombres: datosActualizar.nombres,
      telefono: datosActualizar.telefono,
      nombre_ciudad: datosActualizar.nombre_ciudad,
      correo: datosActualizar.correo,
      apellidos: datosActualizar.apellidos,
      active: datosActualizar.active,
      biografia:datosActualizar.biografia
    };
    if (datosActualizar.fotoPerfil.length > 100) {
      const base64Data = datosActualizar.fotoPerfil.replace(
        /^data:image\/\w+;base64,/,
        ""
      );
      const buffer = Buffer.from(base64Data, "base64");
      const fileName = `imagen_${usuarioId}.jpg`;
      const uploadsFolderPath = path.join(__dirname, "..", "uploads");
      const filePath = path.join(uploadsFolderPath, fileName);
      await fsPromises.writeFile(filePath, buffer);
      propiedadesActualizar.fotoPerfil = `/uploads/${fileName}`;
    }
    const options = { new: true };
    const resultado = await usuarioModel.findOneAndUpdate(
      { usuario: usuarioId },
      propiedadesActualizar,
      options
    );

    if (resultado) {
      res.json({
        message: "Actualizado exitosamente",
        urlImagen: resultado.fotoPerfil,
      });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }
    res.status(400).json({ message: "No se pudo actualizar" });
  }
};

export const cambioContrasena = async (req, res) => {

  const { contrasenaActual, nuevaContrasena } = req.body;

  try {
    const token = req.headers.authorization;
    const {usuario:id} = await verificarTokenYObtenerUsuario(token);
    const usuario = await usuarioModel.findOne({ usuario: id });

    if (!usuario) {
      return res.status(404).json({ message: `Usuario no encontrado: ${id}` });
    }

    const passwordMatch = await bcrypt.compare(
      contrasenaActual,
      usuario.password
    );

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "La contraseña actual es incorrecta" });
    }

    const nuevaContrasenaEncriptada = await bcrypt.hash(nuevaContrasena, 10);
    usuario.password = nuevaContrasenaEncriptada;

    await usuario.save();

    res.status(200).json({ message: "Contraseña actualizada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const obtenerUsuario = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const usuario = await verificarTokenYObtenerUsuario(token);

    res.status(200).json({ usuario });
  } catch (error) {
    console.error(error);
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }

    res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const deleteAccount = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const {usuario:id} = await verificarTokenYObtenerUsuario(token);
    const result = await usuarioModel.deleteOne({ usuario: id });
    if (result.deletedCount === 1) {
      return res.status(200).json({ message: "Cuenta eliminada exitosamente" });
    } else {
      return res
        .status(404)
        .json({ message: "No se encontró la cuenta para eliminar" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar la cuenta" });
  }
};


export const trabajoEnMiBarberia = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { usuario } = await verificarTokenYObtenerUsuario(token);
    console.log(usuario)
    const result = await BarberiaModel.findOne({ "barberos.usuario": usuario });
    console.log(result)
    if (result) {
      const datosSencillos = {
        nombre_barberia: result.nombre_barberia,
        direccion_barberia: result.direccion_barberia,
        nombre_ciudad: result.nombre_ciudad,
        descripcion_barberia: result.direccion_barberia,
        nombre_ciudad:result.nombre_ciudad,
        email:result.email,
        telefono:result.telefono,
        fotoPerfil:result.fotoPerfil
      };
      console.log(datosSencillos)
      res.status(200).json(datosSencillos);
    } else {
      res.status(404).json({ message: "El usuario no trabaja en ninguna barbería" });
    }
  } catch (error) {
    console.error(error);
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
