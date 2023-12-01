
import { usuarioModel } from "../Modulos/barril.js";
import multer from 'multer';

// Función para establecer la carpeta de destino para los archivos cargados
const destination = function (req, file, cb) {
  cb(null, 'uploads/');
};

// Función para establecer el nombre de archivo para evitar conflictos
const filename = function (req, file, cb) {
  cb(null, Date.now() + '-' + file.originalname);
};

// Configuración de Multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: destination,
  filename: filename
});

const upload = multer({ storage: storage }).single('fotoPerfil');

export const putUsuario = async (req, res) => {
  try {
    // Manejar la carga de archivos
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: "Error al cargar el archivo" });
      } else if (err) {
        return res.status(500).json({ message: "Error interno del servidor" });
      }

      // Carga de archivo exitosa, ahora actualizar los datos del usuario
      const usuarioId = req.params.id;
      const datosActualizar = req.body;
      const urlImagen = req.body.fotoPerfil ? `../uploads/${req.body.fotoPerfil.filename}` : undefined;

      // Si hay una nueva imagen, actualiza la URL de la foto de perfil
      if (urlImagen) {
        datosActualizar.fotoPerfil = urlImagen;
      }

      const opciones = { new: true };
      const resultado = await usuarioModel.findOneAndUpdate({ _id: usuarioId }, datosActualizar, opciones);

      if (resultado) {
        res.json({ message: "Actualizado exitosamente", urlImagen });
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    });
  } catch (error) {
    res.status(400).json({ message: "No se pudo actualizar" });
  }
}





export const obtenerUsuario = async (req, res) => {
  const {id}=req.params
  try {
    const usuario = await usuarioModel.findOne({"usuario":id});

    if (!usuario) {
      return res.status(404).json({ message: `usuario no encontrado${usuario}` });
    }

    res.status(200).json({ usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};