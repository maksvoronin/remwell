import { Schema, model } from "mongoose";

const schema = new Schema({
  id: Number,
  name: String,
  score: String,
  text: String,
});

export default model("feedback", schema);
