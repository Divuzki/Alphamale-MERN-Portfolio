import {
  CategorySchema as Category,
  SubcategorySchema as Subcategory,
} from "../models/category.js";
import asyncHandler from "express-async-handler";

/**
@desc GET Categories
@route GET /api/category
@access Private
*/
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
});

/**
@desc Create Categories
@route POST /api/category
@access Private
*/
export const createCategory = asyncHandler(async (req, res) => {
  const body = req.body;
  console.log(body);
  const checkCategory = await Category.findOne({ name: body.name });
  if (checkCategory) {
    res.status(400);
    throw new Error("Category already exists");
  }
  const subcategories = [];
  if (body.subcategories && body.subcategories.split(",")) {
    let subcategoriesArray = body.subcategories.split(",");
    let name = body.name;
    for (let i = 0; i < subcategoriesArray.length; i++) {
      const element = subcategoriesArray[i];
      if (element !== "") {
        const newSubcategory = await Subcategory.create({
          name: element,
          category_name: name,
        });
        subcategories.push(newSubcategory);
      }
    }
  }
  const newCategory = await Category.create({
    name: body.name,
    subcategories: subcategories || null,
  });
  res.send({ newCategory });
});

/**
@desc GET Category
@route GET /api/category/:name
@access Private
*/
export const getCategory = asyncHandler(async (req, res) => {
  const foundfile = await Category.findOne({ name: req.params.name });
  res.status(200).json(foundfile);
});

/**
@desc Update Category
@route PATCH /api/category/:name
@access Private
*/
export const updateCategory = asyncHandler(async (req, res) => {
  const data = await Category.findOne({ name: req.params.name });
  if (!data) {
    res.status(404);
    throw new Error("Category not found");
  }

  const updatedFile = await Category.findOneAndUpdate(
    req.params.name,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).send(updatedFile);
});

/**
@desc Delete Category
@route DELETE /api/category/:name
@access Private
*/
export const deleteCategory = asyncHandler(async (req, res) => {
  const data = await Category.findOne({ name: req.params.name });
  if (!data) {
    res.status(404);
    throw new Error("Category not found");
  }
  await data.remove();
  res.status(200).send({ name: req.params.name });
});
