import mongoose, { Schema } from "mongoose";
import { Gallery as GalleryType } from "../types/gallery";

export const gallerySchema = new Schema<GalleryType>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
  },
  images: {
    type: [Schema.Types.ObjectId],
    ref: "image",
    required: false,
    default: [],
  },
});

export const Gallery = mongoose.model<GalleryType>("gallery", gallerySchema);
