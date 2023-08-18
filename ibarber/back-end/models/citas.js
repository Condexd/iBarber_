import { Schema, model } from "mongoose";

const citaSchema = new Schema({
  id_citas: String,
  fecha: Date,
  costo_servicio: Number,
  clientes: {
    id_cliente: String,
    t_doc_cliente: String
  },
  barberos: {
    id_barbero: String,
    t_doc_barbero: String
  },
  metodo_de_pago: {
    id_m_pago: Number,
    desc_metodo_pago: String
  },
});

const Cita = model('Cita', citaSchema);

export default Cita;
