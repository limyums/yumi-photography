import { Router } from "express";
import {
  createGallery,
  getGallerises,
  getGalleryById,
  updateGallery,
} from "../constrollers/galleryController";

export const router = Router();
router.get("/", getGallerises);
router.get("/:id", getGalleryById);
router.post("/", createGallery);
router.put("/:id", updateGallery);
