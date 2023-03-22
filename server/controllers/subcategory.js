import {
  Category,
  Subcategory,
} from "../models/category.js";

import asyncHandler from "express-async-handler";

/**
@desc GET Subcategories
@route GET /api/subcategories
@access Private
*/
export const getSubcategories = asyncHandler(async (req, res) => {
  const subcategories = await Subcategory.find()
  .select("-category_name")
    .lean();

  res.send({ subcategories });
});


/**
@desc Create Subcategories
@route POST /api/subcategory/
@access Private
*/
export const createSubcategory = asyncHandler(async (req, res) => {
    const { categoryId, name } = req.body;
    const category = await Category.findById(categoryId);
  
    if (!category) {
      res.status(404);
      throw new Error("Category not found");
    }
  
    const subcategory = await Subcategory.create({
      name,
      category_name: category.name,
    });
  
    category.subcategories.push(subcategory._id);
    await category.save();
  
    res.send({ subcategory });
});
  
/**
@desc GET Subcategory
@route GET /api/subcategory/:id
@access Private
*/
export const getSubcategoryById = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    const subcategory = await Subcategory.findById(id)
      .select("-category")
      .lean();
  
    if (!subcategory) {
      res.status(404);
      throw new Error("Subcategory not found");
    }
  
    res.send({ subcategory });
});
  

/**
@desc DELETE Subcategory
@route DELETE /api/subcategory/:id
@access Private
*/
export const deleteSubcategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const subcategory = await Subcategory.findById(id);

  if (!subcategory) {
    res.status(404);
    throw new Error("Subcategory not found");
  }

  await subcategory.remove();

  res.send({ message: "Subcategory removed" });
});


/**
@desc PATCH Subcategory
@route PATCH /api/subcategory/:id
@access Private
*/
export const updateSubcategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const subcategory = await Subcategory.findById(id);

  if (!subcategory) {
    res.status(404);
    throw new Error("Subcategory not found");
  }

  subcategory.name = body.name || subcategory.name;
  subcategory.category_name = body.category_name || subcategory.category_name;

  const updatedSubcategory = await subcategory.save();

  res.send({ updatedSubcategory });
});
