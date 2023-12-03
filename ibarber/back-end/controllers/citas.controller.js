import { BarberiaModel, citaModel, usuarioModel } from "../Modulos/barril.js";

export const getCitas = async (req, res) => {
  try {
    const { usuario } = req.params;

    // Buscar las citas en las que el usuario sea cliente o barbero
    const citasUsuario = await citaModel.find({ $or: [{ cliente: usuario }, { barbero: usuario }] });

    if (citasUsuario.length === 0) {
      return res.status(200).json({ message: 'No tienes citas agendadas' });
    }

    // Filtrar las citas según el tipo de usuario (cliente o barbero)
    const citasCliente = citasUsuario.filter(cita => cita.cliente === usuario);
    const citasBarbero = citasUsuario.filter(cita => cita.barbero === usuario);

    let clienteEncontrado = citasCliente.length > 0;
    let barberoEncontrado = citasBarbero.length > 0;

    let response = {};

    // Devolver las citas correspondientes al tipo de usuario
    if (clienteEncontrado) {
      response.cliente = citasCliente;
    }
    if (barberoEncontrado) {
      response.barbero = citasBarbero;
    }

    // Devolver la respuesta con las citas encontradas para el usuario
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las citas',
      error: error.message
    });
  }
};

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
      message: 'Cita eliminada',
      cuerpo: req.params.id
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar la cita',
      error: error.message
    });
  }
}