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
  .get("/:name", getCategory)
  .delete("/:name", deleteCategory)
  .patch("/:name", updateCategory);
export default router;
