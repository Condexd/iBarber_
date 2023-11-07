import { Router, BarberiaModel } from "../Modulos/barril.js";
const router = Router();
//registro de barberia
router.post("/barberia", async (req, res) => {
  try {
    const { nombre_barberia, direccion_barberia, nombre_ciudad } = req.body;

    const data = new BarberiaModel({
      nombre_barberia: nombre_barberia,
      direccion_barberia: direccion_barberia,
      ciudad: {
        nombre_ciudad: nombre_ciudad,
      },
    });

    const result = await data.save();
    res.status(200).json({ message: "Registro exítoso" });
  } catch (error) {
    console.error("Error al registrar barbero:", error);
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

router.put('/barberia/:id', async (req, res) => {
  const barberiaId = req.params.id;
  const { nombre_barberia, direccion_barberia, nombre_ciudad } = req.body;

  try {
    const updatedBarberia = await BarberiaModel.findByIdAndUpdate(
      barberiaId,
      {
        nombre_barberia: nombre_barberia,
        direccion_barberia: direccion_barberia,
        ciudad: {
          nombre_ciudad: nombre_ciudad,
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
