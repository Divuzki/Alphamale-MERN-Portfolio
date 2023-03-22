import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} from "../controllers/category.js";
const router = express.Router();

// all routes in here are starting with /category
router.get("/", getCategories).post("/", createCategory);
router
  .get("/:id", getCategory)
  .delete("/:id", deleteCategory)
  .patch("/:id", updateCategory);
export default router;
