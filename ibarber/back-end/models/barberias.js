import { Schema, model } from "mongoose";

const barberiaSchema = new Schema({
  nombre_barberia: String,
  direccion_barberia: String,
  ciudad: {
    nombre_ciudad: String,
    descripcion_ciudad: String
  },
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
