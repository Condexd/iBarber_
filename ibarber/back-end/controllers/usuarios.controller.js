import { usuarioModel } from "../Modulos/barril.js";
import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { promises as fsPromises } from "fs";
import path from "path";
import Usuario from "../models/usuario.js";
import { verificarTokenYObtenerUsuario } from "../Modulos/barril.js";

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
    const resultado = await Usuario.findOneAndUpdate(
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
    res.status(400).json({ message: "No se pudo actualizar" });
  }
};

export const cambioContrasena = async (req, res) => {
  const token = req.headers.authorization;
  const {usuario:id} = await verificarTokenYObtenerUsuario(token);
  const { contrasenaActual, nuevaContrasena } = req.body;

  try {
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

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Token inválido" });
    }

    res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const deleteAccount = async (req, res) => {
  const token = req.headers.authorization;
  const {usuario:id} = await verificarTokenYObtenerUsuario(token);

  try {
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
