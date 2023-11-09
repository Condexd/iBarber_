import { Schema, model } from "mongoose";

const citaSchema = new Schema({
  id_cita: String,
  fecha: Date,
  cliente: {
    usuario: String,
    nombre: String,
    apellidos: String
  },
  barbero: {
    usuario: String,
    nombre: String,
    apellidos: String
  },
  barberia: {
    id: String,
    nombre: String,
    direccion: String
  }
});

const Cita = model('Cita', citaSchema);

export default Cita;
