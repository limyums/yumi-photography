import { Router } from "express";
import controller from "../constrollers/viewController";

export const router = Router();

// View
router.get("/", controller.home);
router.get("/about", controller.about);
router.get("/portrait", controller.portrait);
router.get("/travel", controller.travel);
router.get("/outdoor", controller.outdoor);
router.get("/contact", controller.contact);
router.get("/upload", controller.upload);
