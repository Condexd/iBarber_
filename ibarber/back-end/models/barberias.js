import { Schema, model } from "mongoose";

const barberiaSchema = new Schema({
  nombre_barberia: String,
  direccion_barberia: String,
  ciudad: {
    id_ciudad: { type: String, required: true },
    nombre_ciudad: String,
    descripcion_ciudad: String
  },
  barberos: [
    {
      id_barbero: { type: String, required: true },
      num_barbero: String,
      biografia_barbero: String
    }
  ],

});

const Barberia = model('Barberia', barberiaSchema);

export default Barberia;
