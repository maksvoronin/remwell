import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  name: String,
  login: String,
  password: String,
  token: String
});

export default mongoose.models.admin || model("admin", schema);
