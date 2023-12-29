import { Schema, model } from "mongoose";

const citaSchema = new Schema({
  fecha: String,
  cliente: String,
  barbero: String,
  reseña: String,
  cita_realizada: Boolean,
  cita_cancelada: Boolean,
  confirmacion_barbero: {
    estadoCita: { type: String, enum: ['pendiente', 'aceptado'], default: 'pendiente' },
    comentario: String
  }
});

const Cita = model('Cita', citaSchema);

export default Cita;
