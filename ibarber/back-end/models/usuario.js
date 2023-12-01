import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  usuario: String,
  nombres: String,
  apellidos: String,
  correo: String,
  password: String,
  telefono: String,
  nombre_ciudad: String,
  fotoPerfil: {
    type: String,
    default: "https://i.pinimg.com/474x/f3/16/ce/f316cef6a7a1e732baf48a36808411b4.jpg"
  },
  roles: [String],
  active: Boolean
});

const Usuario = model('Usuario', usuarioSchema);

export default Usuario;
