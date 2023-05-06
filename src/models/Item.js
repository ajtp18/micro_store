import { Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    serial: {
      type: String,
      required: true,
      unique: true,
      default: 1,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    },
  },
  {
    autoIndex: false,
    timestamps: false,
    versionKey: false,
  }
);

export default model("Item", itemSchema);
