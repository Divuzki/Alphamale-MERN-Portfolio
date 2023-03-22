import express from "express";
import { getSubcategories, createSubcategory, deleteSubcategoryById, getSubcategoryById, updateSubcategoryById } from "../controllers/subcategory.js";
const router = express.Router();

// all routes in here are starting with /category
router.get("/", getSubcategories).post("/", createSubcategory);
router
  .get("/:id", getSubcategoryById)
  .delete("/:id", deleteSubcategoryById)
  .patch("/:id", updateSubcategoryById);
export default router;



