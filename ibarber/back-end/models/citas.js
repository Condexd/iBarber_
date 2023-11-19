import { Schema, model } from "mongoose";

const citaSchema = new Schema({
  fecha: Date,
  cliente: String,
  barbero: String,
  cita_realizada: Boolean
});

const Cita = model('Cita', citaSchema);

export default Cita;
