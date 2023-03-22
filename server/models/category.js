import mongoose from "mongoose";

const SubcategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    category_name: { type: mongoose.Schema.Types.String, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

export const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category must have name"],
    },
    subcategories: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
    ],
  },
  {
    timestamps: true,
  }
);
export const Category = mongoose.model("Category", CategorySchema);
export const Subcategory = mongoose.model("Subcategory", SubcategorySchema);
