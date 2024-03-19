import mongoose, { Schema } from "mongoose";
import { Users as UsersType } from "../types/users";

export const userSchema = new Schema<UsersType>({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: false,
  },
  galleries: {
    type: [Schema.Types.ObjectId],
    ref: "gallery",
    required: false,
    default: [],
  },
});

export const Users = mongoose.model<UsersType>("users", userSchema);
