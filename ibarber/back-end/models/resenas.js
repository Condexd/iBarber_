import { Schema, model, SchemaTypes } from "mongoose";

const reviewSchema = new Schema({
  title: {
    type: String,
    maxlength: 50  // Limitar el título a 50 caracteres
  },
  body: String,
  rating: Number,
  barbero:String,
  cita: {
    type: SchemaTypes.ObjectId,
    ref: 'citas'
  },
  usuario: String,
  barberiaId:String
});

const Review = model('Review', reviewSchema);

export default Review;
