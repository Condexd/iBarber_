import { Schema,model } from "mongoose";

const usuarioSchema = new Schema({
  usuario: String,
  nombres: String,
  apellidos: String,
  correo: String,
  password: String,
  telefono: String,
  nombre_ciudad: String,
  roles: [String]
});

const Usuario = model('Usuario', usuarioSchema);

export default  Usuario;