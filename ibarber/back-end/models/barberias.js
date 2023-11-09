import { Schema, model } from "mongoose";

const barberiaSchema = new Schema({
  nombre_barberia: String,
  direccion_barberia: String,
  descripcion_barberia: String,
  nombre_ciudad: String,
  email: String,
  telefono: String,
  dueño: {
    usuario: { type: String, required: true }, // Usuario requerido para el dueño
    nombre_dueño: String
  },
  barberos: [
    {
      usuario: String,
      num_barbero: String,
      biografia_barbero: String
    }
  ]
});

const Barberia = model('Barberia', barberiaSchema);

export default Barberia;
