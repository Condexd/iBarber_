import { Schema, model } from "mongoose";

const barberiaSchema = new Schema({
  nombre_barberia: String,
  direccion_barberia: String,
  ciudad: {
    nombre_ciudad: String,
    descripcion_ciudad: String
  },
  barberos: [
    {
      usuario: { type: String, required: true },
      num_barbero: String,
      biografia_barbero: String
    }
  ],

});

const Barberia = model('Barberia', barberiaSchema);

export default Barberia;
