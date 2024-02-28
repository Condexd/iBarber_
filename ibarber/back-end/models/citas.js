import { Schema, model,SchemaTypes } from "mongoose";

const citaSchema = new Schema({
  fecha: String,
  cliente: String,
  barbero: String,
  barberiaId: {
    type: SchemaTypes.ObjectId,
    ref: 'barberias'
  },
  cita_realizada: Boolean,
  cita_cancelada: Boolean,
  confirmacion_barbero: {
    estadoCita: { type: String, enum: ['pendiente', 'aceptado'], default: 'pendiente' },
    comentario: String
  }
});

const Cita = model('Cita', citaSchema);

export default Cita;
