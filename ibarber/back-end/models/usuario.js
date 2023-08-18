import { Schema,model } from "mongoose";

const usuarioSchema = new Schema({
    documento: String,
    nombres: String,
    apellidos: String,
    correo: String,
    password: String,
    num_cel: String,
    num_fijo: String,
    ciudad: {
      _id: Schema.ObjectId,
      nombre: String,
      descripcion: String
    },
    roles: [String]
  });
  
  const Usuario = model('Usuario', usuarioSchema);
  
export default  Usuario;