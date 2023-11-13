import { citaModel } from "../Modulos/barril.js";

export const postCita = async (req, res) => {
  try {
    const nuevaCita = new citaModel(req.body);
    const resultado = await nuevaCita.save();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la cita' });
  }
}

export const getCitas = async (req, res) => {
  try {
    const citas = await citaModel.find();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las citas' });
  }
}

export const getCita = async (req, res) => {
  try {
    const cita = await citaModel.findById(req.params.id);
    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.json(cita);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la cita' });
  }
}

export const putCita = async (req, res) => {
  try {
    const citaActualizada = await citaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!citaActualizada) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.json(citaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la cita' });
  }
}

export const deleteCita = async (req, res) => {
  try {
    const resultado = await citaModel.findByIdAndDelete(req.params.id);
    if (!resultado) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.json({ mensaje: 'Cita eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la cita' });
  }
}