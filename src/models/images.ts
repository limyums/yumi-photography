import mongoose, { Schema } from "mongoose";
import { Image as ImageType } from "../types/images";

export const imageSchema = new Schema<ImageType>({
  sub_gallery: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: false,
  },
});

export const Image = mongoose.model<ImageType>("image", imageSchema);
