import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  id: Number,
  name: String,
  score: String,
  text: String,
});

export default mongoose.models.feedback || model("feedback", schema);
