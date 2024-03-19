import { Request, Response } from "express";
import { Gallery } from "../models/gallery";

const createGallery = async (req: Request, res: Response) => {
  const gallery = await Gallery.create(req.body);
  res.status(200).json(gallery);
};

const getGallerises = async (req: Request, res: Response) => {
  const galleries = await Gallery.find().lean().exec();
  res.status(200).json(galleries);
};
const getGalleryById = async (req: Request, res: Response) => {
  const gallery = await Gallery.find(req.params).lean().exec();
  res.status(200).json(gallery);
};

const updateGallery = async (req: Request, res: Response) => {
  const updated = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: true,
  });
  res.status(200).json(updated);
};

export { createGallery, updateGallery, getGallerises, getGalleryById };
