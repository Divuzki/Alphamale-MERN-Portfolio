import mongoose from "mongoose";
import { CategoryModel } from "./category.js";

const MediaModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title value"],
    },
    desc: String,
    format: {
      type: String,
      required: [true, "Please add a format"],
    },
    image: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },
    category: CategoryModel,
  },
  {
    timestamps: true,
  }
);
export const MediaSchema = mongoose.model("Media", MediaModel);
