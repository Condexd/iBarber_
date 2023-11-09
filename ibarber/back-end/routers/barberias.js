import { Router, BarberiaModel,usuarioModel } from "../Modulos/barril.js";
const router = Router();
//registro de barberia
router.post("/barberia", async (req, res) => {
  try {
    const { nombre_barberia, direccion_barberia, nombre_ciudad ,usuario} = req.body;

    if (!nombre_barberia || !direccion_barberia || !nombre_ciudad) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    const newBarberia = new BarberiaModel({
      nombre_barberia,
      direccion_barberia,
      ciudad: {
        nombre_ciudad:nombre_ciudad,
      },
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
});


router.get('/barberias', async (req, res) => {
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
});

router.get('/barberia/:id', async (req, res) => {
  const barberiaId = req.params.id;

  try {
    const barberia = await BarberiaModel.findById(barberiaId);
    if (barberia) {
      res.status(200).json(barberia);
    } else {
      res.status(404).json({ message: 'Barbería no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener la barbería:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


router.get('/barberia/:id/barberos', async (req, res) => {
  const barberiaId = req.params.id;

  try {
    const barberia = await BarberiaModel.findById(barberiaId);
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
});




router.put('/barberia/:id', async (req, res) => {
  const barberiaId = req.params.id;
  const { nombre_barberia, direccion_barberia,ciudad} = req.body;

  try {
    const updatedBarberia = await BarberiaModel.findByIdAndUpdate(
      barberiaId,
      {
        nombre_barberia: nombre_barberia,
        direccion_barberia: direccion_barberia,
        ciudad: {
          nombre_ciudad: ciudad.nombre_ciudad,
        },
      },
    );

    if (!updatedBarberia) return res.status(404).json({ message: 'Barbería no encontrada' });

    res.status(200).json(updatedBarberia);
  } catch (error) {
    console.error('Error al actualizar la barbería:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

router.delete('/barberia/:id', async (req, res) => {
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
});


export default router;
