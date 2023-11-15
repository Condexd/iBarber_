import { BarberiaModel, usuarioModel } from "../Modulos/barril.js";

export const registroBarberia = async (req, res) => {
  try {
    const { nombre_barberia, direccion_barberia, nombre_ciudad ,usuario} = req.body;

    if (!nombre_barberia || !direccion_barberia || !nombre_ciudad) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    const newBarberia = new BarberiaModel({
      nombre_barberia,
      direccion_barberia,
     nombre_ciudad,
      dueño: {
        usuario: usuario,
      },
    });

    const result = await newBarberia.save();
    res.status(201).json({ message: "Registro exitoso", data: result });
  } catch (error) {
    console.error("Error al registrar la barbería:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const getBarberias = async (req, res) => {
  try {
    const barberias = await BarberiaModel.find();
    if (barberias) {
      res.status(200).json(barberias);
    } else {
      res.status(404).json({ message: 'No se encontraron barberías' });
    }
  } catch (error) {
    console.error('Error al obtener las barberías:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const getBarberia = async (req, res) => {
  const barberiaId = req.params.id;

  try {
    const barberia = await BarberiaModel.findOne({"dueño.usuario":barberiaId});
    if (barberia) {
      res.status(200).json(barberia);
    } else {
      res.status(404).json({ message: 'Barbería no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener la barbería:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const getBarberos = async (req, res) => {
  const barberiaId = req.params.id;

  try {
    const barberia = await BarberiaModel.findOne({ "dueño.usuario": barberiaId });
    if (barberia) {
      const barberos = barberia.barberos;
      res.status(200).json(barberos);
    } else {
      res.status(404).json({ message: 'Barbería no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener la lista de barberos de la barbería:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const updateBarberia = async (req, res) => {
  const nombreUsuario = req.params.id;
  const { nombre, ciudad ,descripcion, email, telefono } = req.body;

  try {
    const updatedBarberia = await BarberiaModel.findOneAndUpdate(
      { "dueño.usuario": nombreUsuario },
      {
        nombre_barberia: nombre,
        nombre_ciudad: ciudad,
        descripcion_barberia:descripcion,
        email: email,
        telefono : telefono
      },
      { new: true }
    );

    if (!updatedBarberia) return res.status(404).json({ message: 'Barbería no encontrada' });

    res.status(200).json(updatedBarberia);
  } catch (error) {
    console.error('Error al actualizar la barbería:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const deleteBarberia = async (req, res) => {
  const barberiaId = req.params.id;

  try {
    const deletedBarberia = await BarberiaModel.findByIdAndRemove(barberiaId);

    if (!deletedBarberia) {
      return res.status(404).json({ message: 'Barbería no encontrada' });
    }

    res.status(200).json({ message: 'Barbería eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la barbería:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const deleteBarber = async (req, res) => {
  const barberoId = req.params.id;

  try {
    const updatedBarberia = await BarberiaModel.findOneAndUpdate(
      { 'barberos.usuario': barberoId },
      { $pull: { barberos: { usuario: barberoId } } },
      { new: true }
    );
    res.status(200).json({ message: 'Barbero eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el barbero:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}






export const postBarber = async (req, res) => {
  const { id } = req.params;
  const { usuario, ciudad, experiencia } = req.body;

  try {
    // Verificar si el barbero existe
    const barbero = await usuarioModel.findOne({ "usuario": usuario });

    if (!barbero) {
      return res.status(400).json({ message: "Barbero no tiene cuenta" });
    }

    // Verificar si el barbero ya está registrado en alguna barbería
    const barberiaExistente = await BarberiaModel.findOne({
      'barberos.usuario': usuario,
    });

    if (barberiaExistente) {
      return res.status(400).json({ message: "El barbero ya está registrado en otra barbería" });
    }

    // Actualizar la barbería del dueño con el ID proporcionado
    const updatedBarberia = await BarberiaModel.findOneAndUpdate(
      { "dueño.usuario": id },
      {
        $push: {
          'barberos': {
            usuario: barbero.usuario,
            experiencia,
          },
        },
      },
      { new: true }
    );

    if (!updatedBarberia) {
      return res.status(404).json({ message: "No se encontró la barbería para el dueño dado" });
    }

    // Si todo está bien, devolver la barbería actualizada
    res.status(200).json(updatedBarberia);
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Ruta para obtener todos los barberos de todas las barberías
export const getBarberosall=async(req, res) => {
  try {
    const barberos = await BarberiaModel.find({}, 'barberos');
    res.json(barberos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los barberos' });
  }
};
