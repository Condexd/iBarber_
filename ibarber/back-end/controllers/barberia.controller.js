import {
  BarberiaModel,
  usuarioModel,
  verificarTokenYObtenerUsuario,
  fsPromises,path,fileURLToPath,dirname
} from "../Modulos/barril.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const registroBarberia = async (req, res) => {
  try {
    const token = req.headers.authorization;
    await verificarTokenYObtenerUsuario(token);
    const {
      nombre_barberia,
      direccion_barberia,
      nombre_ciudad,
      usuario,
      descripcion_barberia,
      email,
      telefono,
    } = req.body;

    if (!nombre_barberia || !direccion_barberia || !nombre_ciudad) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const newBarberia = new BarberiaModel({
      nombre_barberia,
      direccion_barberia,
      descripcion_barberia,
      nombre_ciudad,
      email,
      telefono,
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
};

export const getBarberias = async (req, res) => {
  try {
    const barberias = await BarberiaModel.find();
    if (barberias) {
      res.status(200).json(barberias);
    } else {
      res.status(404).json({ message: "No se encontraron barberías" });
    }
  } catch (error) {
    console.error("Error al obtener las barberías:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getBarberia = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { usuario: id } = await verificarTokenYObtenerUsuario(token);
    const barberia = await BarberiaModel.findOne({ "dueño.usuario": id });
    if (barberia) {
      res.status(200).json(barberia);
    } else {
      res.status(404).json({ message: "Barbería no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener la barbería:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getBarberos = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { usuario: id } = await verificarTokenYObtenerUsuario(token);
    const barberia = await BarberiaModel.findOne({ "dueño.usuario": id });
    if (barberia) {
      const barberos = barberia.barberos;
      res.status(200).json(barberos);
    } else {
      res.status(404).json({ message: "Barbería no encontrada" });
    }
  } catch (error) {
    console.error(
      "Error al obtener la lista de barberos de la barbería:",
      error
    );
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const obtenerBarberosPorNombreBarberia = async (req, res) => {
  try {
    const { id } = req.params;
console.log(id)
    const barberia = await BarberiaModel.findOne({ _id: id });

    if (!barberia) {
      return res.status(404).json({ id });
    }

    const barberos = barberia.barberos;

    res.status(200).json({ barberos });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los barberos", error: error.message });
  }
};


export const updateBarberia = async (req, res) => {
  const { nombre, ciudad, descripcion, email, telefono, direccion, fotoPerfil } = req.body;

  try {
    const token = req.headers.authorization;
    const { usuario: id } = await verificarTokenYObtenerUsuario(token);
    const nombreUsuario = id;

    const propiedadesActualizar = {
      nombre_barberia: nombre,
      nombre_ciudad: ciudad,
      descripcion_barberia: descripcion,
      email: email,
      telefono: telefono,
      direccion_barberia: direccion,
    };

    if (fotoPerfil && fotoPerfil.length > 100) {
      const base64Data = fotoPerfil.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const fileName = `imagen_barber${nombreUsuario}.jpg`;
      const uploadsFolderPath = path.join(__dirname, "..", "uploads");
      const filePath = path.join(uploadsFolderPath, fileName);
      await fsPromises.writeFile(filePath, buffer);
      propiedadesActualizar.fotoPerfil = `/uploads/${fileName}`;
    }

    const options = { new: true };
    const updatedBarberia = await BarberiaModel.findOneAndUpdate(
      { "dueño.usuario": nombreUsuario },
      propiedadesActualizar,
      options
    );

    if (!updatedBarberia)
      return res.status(404).json({ message: "Barbería no encontrada" });

    res.status(200).json(updatedBarberia);
  } catch (error) {
    console.error("Error al actualizar la barbería:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteBarberia = async (req, res) => {
  const barberiaId = req.params.id;

  try {
    const deletedBarberia = await BarberiaModel.findByIdAndRemove(barberiaId);

    if (!deletedBarberia) {
      return res.status(404).json({ message: "Barbería no encontrada" });
    }

    res.status(200).json({ message: "Barbería eliminada con éxito" });
  } catch (error) {
    console.error("Error al eliminar la barbería:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const deleteBarber = async (req, res) => {
  const barberoId = req.params.id;

  try {
    const updatedBarberia = await BarberiaModel.findOneAndUpdate(
      // Buscar la barbería que tiene un barbero con el ID dado
      { "barberos._id": barberoId },
      // Utilizar $pull para eliminar el barbero con el ID dado del array 'barberos'
      { $pull: { barberos: { _id: barberoId } } },
      // Opciones: 'new: true' devuelve el documento actualizado
      { new: true }
    );
    if (updatedBarberia) {
      res.status(200).json({ message: "Barbero eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Barbero no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el barbero:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const postBarber = async (req, res) => {
  const { usuario, numero, biografia, especialidad, experiencia } = req.body;

  try {
    const token = req.headers.authorization;
    const { usuario: id } = await verificarTokenYObtenerUsuario(token);
    // Verificar si el barbero existe
    const barbero = await usuarioModel.findOne({ usuario: usuario });

    if (!barbero) {
      return res.status(400).json({ message: "Barbero no tiene cuenta" });
    }

    // Verificar si el barbero ya está registrado en alguna barbería
    const barberiaExistente = await BarberiaModel.findOne({
      "barberos.usuario": usuario,
    });

    if (barberiaExistente) {
      return res
        .status(400)
        .json({ message: "El barbero ya está registrado en otra barbería" });
    }

    // Actualizar la barbería del dueño con el ID proporcionado
    const updatedBarberia = await BarberiaModel.findOneAndUpdate(
      { "dueño.usuario": id },
      {
        $push: {
          barberos: {
            usuario: barbero.usuario,
            num_barbero: numero,
            biografia_barbero: biografia,
            especialidad,
            experiencia,
          },
        },
      },
      { new: true }
    );

    if (!updatedBarberia) {
      return res
        .status(404)
        .json({ message: "No se encontró la barbería para el dueño dado" });
    }
    await usuarioModel.updateOne(
      { usuario: barbero.usuario },
      { $push: { roles: "barbero" } }
    );
    // Si todo está bien, devolver la barbería actualizada
    res.status(200).json(updatedBarberia);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Ruta para obtener todos los barberos de todas las barberías
export const getBarberosall = async (req, res) => {
  try {
    const barberos = await BarberiaModel.find({}, "barberos");
    res.json(barberos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los barberos" });
  }
};

export const actualizarBarbero = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      barbero,
      num_barbero,
      biografia_barbero,
      especialidad,
      experiencia,
    } = req.body;

    const barberia = await BarberiaModel.findOne({ "dueño.usuario": id });

    if (!barberia) {
      return res.status(404).json({ mensaje: "Barbería no encontrada" });
    }

    const barberoEncontrado = barberia.barberos.find(
      (b) => b.usuario === barbero
    );

    if (!barberoEncontrado) {
      return res.status(404).json({ mensaje: "Barbero no encontrado" });
    }

    // Actualiza las propiedades del barbero encontrado
    Object.assign(barberoEncontrado, {
      num_barbero,
      biografia_barbero,
      especialidad,
      experiencia,
    });

    await barberia.save();

    res.status(200).json(barberoEncontrado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
