import { Router } from "express";
import {
  createImage,
  getImages,
  getImagesById,
  updateImage,
} from "../constrollers/imageController";
import { uploadImage } from "../constrollers/uploadController";

export const router = Router();
router.get("/", getImages);
router.get("/:id", getImagesById);
router.post("/", createImage);
router.put("/:id", updateImage);

router.post("/upload", uploadImage);
