import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  usuario: String,
  nombres: String,
  apellidos: String,
  correo: String,
  password: String,
  telefono: String,
  barberia:Boolean,
  nombre_ciudad: String,
  fotoPerfil: { type: String, default: '/uploads/Usuario.png' }, 
  roles: [String],
  active: Boolean
});

const Usuario = model('Usuario', usuarioSchema);

export default Usuario;
