import { Schema, model } from "mongoose";

const usuarioSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    autoIndex: false,
    timestamps: false,
    versionKey: false,
  }
);

export default model("Usuario", usuarioSchema);
