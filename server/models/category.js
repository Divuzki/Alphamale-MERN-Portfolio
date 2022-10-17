import mongoose from "mongoose";

const SubcategoryModel = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  category_name: {
    type: String,
    required: false,
  },
});

export const CategoryModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    subcategories: {
      type: [SubcategoryModel],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export const CategorySchema = mongoose.model("Category", CategoryModel);
export const SubcategorySchema = mongoose.model("Subcategory", CategoryModel);
