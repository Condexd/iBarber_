import { Schema, model } from "mongoose";

const barberoSchema = new Schema({
  usuario: String,
  especialidad: String,
  experiencia: Number,
});

const barberiaSchema = new Schema({
  nombre_barberia: String,
  direccion_barberia: String,
  descripcion_barberia: String,
  nombre_ciudad: String,
  email: String,
  telefono: String,
  fotoPerfil: { type: String, default: '/uploads/barberia-profile.jpg' },
  dueño: {
    usuario: { type: String, required: true },
    nombre_dueño: String,
  },
  barberos: [barberoSchema],
});

const Barberia = model('Barberia', barberiaSchema);

export default Barberia;
