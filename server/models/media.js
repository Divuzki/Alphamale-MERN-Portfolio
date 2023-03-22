import mongoose from "mongoose";

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
    preview: {
      type: String,
      required: false,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please add a Category"],
    },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
  },
  {
    timestamps: true,
  }
);

export const MediaSchema = mongoose.model("Media", MediaModel);
