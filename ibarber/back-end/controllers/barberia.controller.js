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
    const token = req.headers.authorization;
    await verificarTokenYObtenerUsuario(token);
    const barberias = await BarberiaModel.find();
    if (barberias) {
      res.status(200).json(barberias);
    } else {
      res.status(404).json({ message: "No se encontraron barberías" });
    }
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }

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
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }

    res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const getBarberos = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { usuario: id } = await verificarTokenYObtenerUsuario(token);
    const barberia = await BarberiaModel.findOne({ "dueño.usuario": id }).populate('barberos');

    if (barberia) {
      const barberos = barberia.barberos;
      const barberosConInfo = [];
      for (const barbero of barberos) {
        const infoBarbero = await usuarioModel.findOne({ usuario: barbero.usuario }).lean();
        const barberoCompleto = {
          usuario: infoBarbero.usuario,
          nombres: infoBarbero.nombres,
          telefono:infoBarbero.telefono,
          apellidos: infoBarbero.apellidos,
          correo: infoBarbero.correo,
          biografia:infoBarbero.biografia,
          fotoPerfil: infoBarbero.fotoPerfil,
          especialidad: barbero.especialidad,
          experiencia: barbero.experiencia,
          _id:barbero._id
        };
        barberosConInfo.push(barberoCompleto);
      }

      res.status(200).json(barberosConInfo);
    } else {
      res.status(404).json({ message: "Barbería no encontrada" });
    }
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }
    res.status(500).json({ message: "Error interno del servidor" });
  }
};



export const obtenerBarberosPorNombreBarberia = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { usuario } = await verificarTokenYObtenerUsuario(token);
    const { id } = req.params;
    const barberia = await BarberiaModel.findOne({ _id: id });

    if (!barberia) {
      return res.status(404).json({ id });
    }

    const barberos = barberia;

    res.status(200).json({ barberos });
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }
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
  const token = req.headers.authorization;
  const { usuario } = await verificarTokenYObtenerUsuario(token);
  
  try {
    // Buscar y eliminar la barbería
    const deletedBarberia = await BarberiaModel.findOneAndRemove({"dueño.usuario": usuario});
    
    if (!deletedBarberia) {
      return res.status(404).json({ message: "Barbería no encontrada" });
    }

    // Buscar todos los barberos asociados a la barbería eliminada
    const barberos = deletedBarberia.barberos.map(barbero => barbero.usuario);

    // Actualizar el rol de barbero a vacío y el estado 'active' a false para cada barbero encontrado
    await usuarioModel.updateMany(
      { usuario: { $in: barberos } }, // Buscar por los usuarios de los barberos
      { $set: { roles: [], active: false } } // Dejar el campo roles vacío y establecer 'active' a false
    );

    res.status(200).json({ message: "Barbería eliminada con éxito. Roles y estado de barberos actualizados." });
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
      { "barberos.usuario": barberoId },
      // Utilizar $pull para eliminar el barbero con el ID dado del array 'barberos'
      { $pull: { barberos: { usuario: barberoId } } },
      // Opciones: 'new: true' devuelve el documento actualizado
      { new: true }
    );

    // Verificar si se actualizó correctamente la barbería
    if (updatedBarberia) {
      // Eliminar el rol del usuario al eliminarlo como barbero
      await usuarioModel.findOneAndUpdate(
        { usuario: barberoId },
        { $set: { roles: [] } }, // Dejar el campo roles vacío
        { new: true }
      );

      res.status(200).json({ message: "Barbero eliminado con éxito. Rol eliminado." });
    } else {
      res.status(404).json({ message: "Barbero no encontrado." });
    }
  } catch (error) {
    console.error("Error al eliminar el barbero:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};


export const postBarber = async (req, res) => {
  const { usuario, especialidad, experiencia } = req.body;

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

    // Obtener el ID del barbero recién agregado
    const idBarbero = updatedBarberia.barberos.find(barbero => barbero.usuario === usuario)._id;

    // Actualizar la información del usuario para reflejar el nuevo rol de barbero
    await usuarioModel.findOneAndUpdate(
      { usuario: usuario },
      { $push: { roles: "barbero" } } // Agregar el rol de barbero
    );

    // Obtener información adicional del barbero
    const infoBarbero = await usuarioModel.findOne({ usuario: usuario }).lean();

    const barberoCompleto = {
      usuario: infoBarbero.usuario,
      nombres: infoBarbero.nombres,
      apellidos: infoBarbero.apellidos,
      telefono: infoBarbero.telefono,
      correo: infoBarbero.correo,
      especialidad: especialidad,
      experiencia: experiencia,
      _id: idBarbero
    };

    res.status(200).json(barberoCompleto);
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }
    res.status(500).json({ message: "Error interno del servidor" });
  }
};



export const getBarberosall = async (req, res) => {
  
  try {
    const token = req.headers.authorization;
    await verificarTokenYObtenerUsuario(token);

    // Consultar solo las propiedades 'usuario' y 'fotoPerfil' de los barberos
    const barberos = await usuarioModel.find({ roles: 'barbero' }).select('usuario fotoPerfil');

    // Obtener los IDs de los usuarios barberos
    const idsBarberos = barberos.map(barbero => barbero.usuario);

    // Consultar las barberías que contienen los barberos encontrados
    const barberias = await BarberiaModel.find({ "barberos.usuario": { $in: idsBarberos } });

    // Construir la respuesta final
    const barberosConIdBarberia = barberos.map(barbero => {
      const barberia = barberias.find(b => b.barberos.some(b => b.usuario === barbero.usuario));
      return {
        usuario: barbero.usuario,
        fotoPerfil: barbero.fotoPerfil,
        barberia: barberia ? barberia._id : null
      };
    });

    res.json(barberosConIdBarberia);
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }

    res.status(500).json({ error: "Error al obtener los barberos" });
  }
};


export const actualizarBarbero = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      barbero,
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



export const filtrarBarberia = async (req, res) => {
  try {
    let { termino } = req.body;
    const token = req.headers.authorization;
    const { usuario } = await verificarTokenYObtenerUsuario(token); 

    // Utilizar una expresión regular para buscar tanto con acentos como sin acentos
    const barberiasFiltradas = await BarberiaModel.find({ 
      $or: [
        { nombre_barberia: { $regex: new RegExp(termino, 'i') } },
        { 'barberos.usuario': { $regex: new RegExp(termino, 'i') } },
        { 'barberos.especialidad': { $regex: new RegExp(termino, 'i') } },
        { nombre_ciudad: { $regex: new RegExp(termino, 'i') } },
        { direccion_barberia: { $regex: new RegExp(termino, 'i') } },
        { descripcion_barberia: { $regex: new RegExp(termino, 'i') } },
        { 'dueño.nombre_dueño': { $regex: new RegExp(termino, 'i') } },
      ]
    });

    // Devolver las barberías filtradas como respuesta
    res.json(barberiasFiltradas);
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token expirado" });
    }
    res.status(500).json({ message: 'Hubo un error al procesar tu solicitud' });
  }
};

