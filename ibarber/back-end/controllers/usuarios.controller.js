import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { promises as fsPromises } from 'fs';
import path from 'path';
import Usuario from '../models/usuario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const putUsuario = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const datosActualizar = req.body;

    const propiedadesActualizar = {
      nombres: datosActualizar.nombres,
      telefono: datosActualizar.telefono,
      nombre_ciudad: datosActualizar.nombre_ciudad,
      correo: datosActualizar.correo,
      apellidos: datosActualizar.apellidos,
      active: datosActualizar.active,
    };
      if (datosActualizar.fotoPerfil.length>100) {
        const base64Data = datosActualizar.fotoPerfil.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const fileName = `imagen_${usuarioId}.jpg`;
        const uploadsFolderPath = path.join(__dirname, '..', 'uploads');
        const filePath = path.join(uploadsFolderPath, fileName);
        await fsPromises.writeFile(filePath, buffer);
        propiedadesActualizar.fotoPerfil = `/uploads/${fileName}`;
      }
    const options = { new: true };
    const resultado = await Usuario.findOneAndUpdate({ usuario: usuarioId }, propiedadesActualizar, options);

    if (resultado) {
      res.json({ message: "Actualizado exitosamente", urlImagen: resultado.fotoPerfil });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "No se pudo actualizar" });
  }
};



export const obtenerUsuario = async (req, res) => {
  const {id}=req.params
  try {
    const usuario = await Usuario.findOne({"usuario":id});

    if (!usuario) {
      return res.status(404).json({ message: `usuario no encontrado${usuario}` });
    }

    res.status(200).json({ usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};