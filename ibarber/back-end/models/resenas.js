import { Schema, model, SchemaTypes } from "mongoose";

const reviewSchema = new Schema({
  title: String,
  body: String,
  rating: Number,
  barbero:String,
  cita: {
    type: SchemaTypes.ObjectId,
    ref: 'citas'
  },
  usuario: String
});

const Review = model('Review', reviewSchema);

export default Review;
