import { Category, Subcategory } from "../models/category.js";
import asyncHandler from "express-async-handler";

/**
@desc GET Categories
@route GET /api/category
@access Private
*/
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find()
    .populate("subcategories", "name")
    .lean();

  res.json({ categories });
});

/**
@desc Create Categories
@route POST /api/category
@access Private
*/
export const createCategory = asyncHandler(async (req, res) => {
  let { name, subcategories } = req.body;

  const checkCategory = await Category.findOne({ name: name });
  if (checkCategory) {
    res.status(400);
    throw new Error("Category already exists");
  }

  const subcategoryIds = [];
  if (subcategories && subcategories.length > 0) {
    subcategories = subcategories.split(",");
    for (let i = 0; i < subcategories.length; i++) {
      const subcategory = subcategories[i];
      const newSubcategory = await Subcategory.create({
        name: subcategory.name,
        category_name: name,
      });
      subcategoryIds.push(newSubcategory._id);
    }
  }

  const newCategory = await Category.create({
    name,
    subcategories: subcategoryIds,
  });

  res.status(201).json({ newCategory });
});

/**
@desc GET Category
@route GET /api/category/:id
@access Private
*/
export const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const foundfile = await Category.findById(id);
  res.status(200).json(foundfile);
});

/**
@desc Update Category
@route PATCH /api/category/:id
@access Private
*/
export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Category.findById(id);
  if (!data) {
    res.status(404);
    throw new Error("Category not found");
  }

  const updatedFile = await Category.findOneAndUpdate(
    data.name,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({updatedFile});
});

/**
@desc Delete Category
@route DELETE /api/category/:id
@access Private
*/
export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Category.findById(id);
  if (!data) {
    res.status(404);
    throw new Error("Category not found");
  }
  await data.remove();
  res.status(200).json({ id: id });
});
