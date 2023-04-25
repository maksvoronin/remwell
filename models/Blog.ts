import { Schema, model } from "mongoose";

const schema = new Schema({
  id: Number,
  title: String,
  author: String,
  description: String,
  link: String,
  date: Number,
  text: String,
});

export default model("blog", schema);
