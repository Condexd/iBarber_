import { BarberiaModel, citaModel, usuarioModel } from "../Modulos/barril.js";

export const getCitas = async (req, res) => {
  try {
    const citas = await citaModel.find();
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las citas',
      error: error.message
   });
  }
}

export const getCita = async (req, res) => {
  try {
    const cita = await citaModel.findById(req.params.id);
    if (!cita) {
      return res.status(404).json({
        message: 'Cita no encontrada'
      });
    }
    res.status(200).json(cita);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener la cita',
      error: error.message
    });
  }
}

export const postCita = async (req, res) => {
  try {
    const barberoEncontrado = await BarberiaModel.findOne({ 'barberos.usuario': req.body.barbero })
    const barber= await usuarioModel.findOne({ 'usuario': req.body.barbero })

    if (!barber.active){
      return res.status(404).json({
        message: 'Barbero no disponible'
      })
    }
    if (!barberoEncontrado){
      return res.status(404).json({
        message: 'Barbero no encontrado'
      })
    }

    const cita = await citaModel.create(req.body);
    res.status(201).json({
      message: 'Cita creada!',
      data: cita
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear la cita',
      error: error.message
    });
  }
}

export const putCita = async (req, res) => {
  try {
    const { barbero } = req.body;

    const barberoEncontrado = await BarberiaModel.findOne({ 'barberos.usuario': barbero })

    if (!barberoEncontrado){
      return res.status(404).json({
        message: 'Barbero no encontrado'
      })
    }

    const citaActualizada = await citaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!citaActualizada) {
      return res.status(404).json({
        message: 'Cita no encontrada'
      });
    }
    res.status(200).json({
      message: 'Cita actualizada',
      data: citaActualizada
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar la cita',
      error: error.message
    });
  }
}

export const deleteCita = async (req, res) => {
  try {
    const resultado = await citaModel.findByIdAndDelete(req.params.id);
    if (!resultado) {
      return res.status(404).json({
        message: 'Cita no encontrada'
      });
    }
    res.status(200).json({
      message: 'Cita eliminada'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar la cita',
      error: error.message
    });
  }
}