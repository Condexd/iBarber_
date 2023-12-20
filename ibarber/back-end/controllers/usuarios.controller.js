import { usuarioModel } from "../Modulos/barril.js";
import bcrypt from 'bcrypt';

export const putUsuario = async (req, res) => {
  try {
    const usuario = req.params.id; 
    const updateData = req.body;
    const options = { new: true };
    const result = await usuarioModel.findOneAndUpdate({ usuario }, updateData, options);

    if (result) {
      res.json({ message: "Actualizado Éxitosamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ message: "No se pudo Actualizar" });
  }
}

export const cambioContrasena = async (req, res) => {
  const { id } = req.params;
  const { contrasenaActual, nuevaContrasena } = req.body;

  try {
    const usuario = await usuarioModel.findOne({ "usuario": id });

    if (!usuario) {
      return res.status(404).json({ message: `Usuario no encontrado: ${id}`});
    }

    const passwordMatch = await bcrypt.compare(contrasenaActual, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'La contraseña actual es incorrecta' });
    }

    const nuevaContrasenaEncriptada = await bcrypt.hash(nuevaContrasena, 10);
    usuario.password = nuevaContrasenaEncriptada;

    await usuario.save();

    res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

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