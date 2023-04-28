import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  id: Number,
  title: String,
  author: String,
  description: String,
  link: String,
  date: {type: Number, default: Date.now()},
  text: String,
});

export default mongoose.models.blog || model("blog", schema);
