import express from "express";
import {
  createMedia,
  deleteFile,
  getFile,
  getFiles,
  StreamVideo,
  updateFile,
} from "../controllers/media.js";
import upload from "../services/FileUploader.js";
const FilesUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);
const router = express.Router();

// all routes in here are starting with /media
router.get("/", getFiles).post("/", FilesUpload, createMedia);
router.get("/stream/:id", StreamVideo)
// media/2 => req.params { id: 2 }
router
  .get("/:id", getFile)
  .delete("/:id", deleteFile)
  .patch("/:id", FilesUpload, updateFile);
export default router;
