import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter Name"],
    },
    photo: {
      type: String,
      required: [true, "please enter Photo"],
    },
    price: {
      type: Number,
      required: [true, "please enter Price"],
    },
    stock: {
      type: Number,
      required: [true, "please enter Stock"],
    },
    category: {
      type: String,
      required: [true, "please enter Category"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", schema);
