import { Request, Response } from "express";
import { Image } from "../models/images";

const createImage = async (req: Request, res: Response) => {
  const image = await Image.create(req.body);
  res.status(200).json(image);
};

const getImages = async (req: Request, res: Response) => {
  const images = await Image.find().lean().exec();
  res.status(200).json(images);
};
const getImagesById = async (req: Request, res: Response) => {
  const image = await Image.find(req.params).lean().exec();
  res.status(200).json(image);
};

const updateImage = async (req: Request, res: Response) => {
  const updated = await Image.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: true,
  });
  res.status(200).json(updated);
};

export { createImage, getImages, getImagesById, updateImage };
