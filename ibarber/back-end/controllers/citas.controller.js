import { BarberiaModel, citaModel, usuarioModel,correoelectronicoConfirmacion,enviarCorreo,verificarTokenYObtenerUsuario } from "../Modulos/barril.js";
import moment from 'moment';
export const getCitas = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const {usuario} = await verificarTokenYObtenerUsuario(token);
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
    response.cliente = clienteEncontrado ? citasCliente : null;
    response.barbero = barberoEncontrado ? citasBarbero : null;
   
    // Devolver la respuesta con las citas encontradas para el usuario
    return res.status(200).json(response);
  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token inválido" });
    }
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
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token inválido" });
    }
    res.status(500).json({
      message: 'Error al obtener la cita',
      error: error.message
    });
  }
}



export const postCita = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const {usuario:cliente}= await verificarTokenYObtenerUsuario(token);
    req.body.cliente = cliente;
    const barberoEncontrado = await BarberiaModel.findOne({ 'barberos.usuario': req.body.barbero });
    const barber = await usuarioModel.findOne({ 'usuario': req.body.barbero });
    const { fecha, hora } = req.body;
    // Obtener la fecha y hora actuales
    const fechaActual = moment();
    if (!barber.active) {
      return res.status(404).json({
        message: 'Barbero no disponible'
      });
    }

    if (!barberoEncontrado) {
      return res.status(404).json({
        message: 'Barbero no encontrado'
      });
    }
    // Verificar si la nueva fecha es al menos 30 minutos después de la fecha y hora actuales
    const nuevaFecha = moment(`${fecha} ${hora}`, 'DD/MM/YYYY HH:mm:ss');
    const tiempoDiferenciaActual = nuevaFecha.diff(fechaActual, 'minutes');
    if (tiempoDiferenciaActual < 30) {
      return res.status(400).json({
        message: 'No se pudo crear la cita. Debes agendarla al menos 30 minutos después de la hora actual.'
      });
    }

    // Obtener todas las citas programadas para el barbero
    const citasBarbero = await citaModel.find({ 'barbero': req.body.barbero }).sort({ fecha: 1 });

    // Verificar si hay al menos 30 minutos de diferencia con cada cita existente
    for (let i = 0; i < citasBarbero.length; i++) {
      const tiempoDiferencia = nuevaFecha.diff(moment(citasBarbero[i].fecha, 'DD/MM/YYYY HH:mm:ss'), 'minutes');

      if (tiempoDiferencia >= 0 && tiempoDiferencia < 30) {
        return res.status(400).json({
          message: 'No se pudo crear la cita en esta hora. Por favor, intenta agendar otra cita después de al menos 30 minutos'
        });
      }
    }

    const cita = await citaModel.create(req.body);

    if (cliente && cliente.correo) {
      const detallesCita = {
        barbero: req.body.barbero,
        fecha: nuevaFecha.format('DD/MM/YYYY'),
        hora: nuevaFecha.format('HH:mm:ss'),
        nombreBarberia:  barberoEncontrado.nombre_barberia,
        direccionBarberia:barberoEncontrado.direccion_barberia,
        telefonoBarberia:barberoEncontrado.telefono,
        correoBarberia:barberoEncontrado.email,
        nombreDeBarbero:barber.nombres,
        telefonoBarbero:barber.telefono
      };
      const mensaje = correoelectronicoConfirmacion(cliente.usuario, detallesCita);
      const resultado = await enviarCorreo(cliente.correo, 'Confirmación de Cita', mensaje);

      if (resultado) {
        return res.status(201).json({
          message: 'Cita creada!',
          data: cita
        });
      }
    }
    res.status(201).json({
      message: 'Cita creada!',
      data: cita
    });

  } catch (error) {
    if (error.message === "Token expirado") {
      return res.status(401).json({ message: "Token inválido" });
    }

    res.status(500).json({
      message: 'Error al crear la cita',
      error: error.message
    });
  }
};



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

export const patchCita = async (req, res) => {
  try {
    const citaId = req.params.id;
    console.log(citaId, req.body.estadoCita );

    const citaActualizada = await citaModel.findByIdAndUpdate(
      citaId,
      { $set: { "confirmacion_barbero.estadoCita": req.body.estadoCita } },
      { new: true }
    );

    if (!citaActualizada) {
      return res.status(404).json({
        message: "Cita no encontrada",
      });
    }

    res.status(200).json({
      message: "Cita actualizada",
      data: citaActualizada,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la cita",
      error: error.message,
    });
  }
};

export const notificationBell = async (req, res) => {
  try {
    const token = req.headers.authorization;
  const {usuario}= await verificarTokenYObtenerUsuario(token);
  const cita = await citaModel.findOne({ 'usuario': usuario })
  res.json(cita)
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la cita",
      error: error.message,
    });
  }
};


export const cancelarCitasAutomaticamente = async () => {
  try {
    const todasLasCitas = await citaModel.find();
    const fechaActual = moment();
    const citasPorCancelar = todasLasCitas.filter((cita) => {
      const fechaCita = moment(cita.fecha, 'D/M/YYYY, HH:mm:ss');
      const tiempoRestante = moment.duration(fechaCita.diff(fechaActual));
      const minutosRestantes = tiempoRestante.asMinutes();

      return (
        cita.confirmacion_barbero.estadoCita === 'pendiente' &&
        minutosRestantes <= 10
      );
    });

    const resultado = await citaModel.deleteMany({
      _id: { $in: citasPorCancelar.map((cita) => cita._id) },
    });

    console.log(`${resultado.deletedCount} citas canceladas automáticamente.`);
  } catch (error) {
    console.error('Error al cancelar citas automáticamente:', error);
  }
};
