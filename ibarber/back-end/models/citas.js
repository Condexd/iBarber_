import { Schema, model, mongoose } from "mongoose";

const citaSchema = new Schema({
  fecha: Date,
  cliente: {
    type: String,
  },
  barbero: {
    type: String,
  },
  barberia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Barberia'
  }
});


const Cita = model('Cita', citaSchema);

export default Cita;
