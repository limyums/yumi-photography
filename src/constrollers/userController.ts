import { Request, Response } from "express";
import { Users } from "../models/users";

const createUser = async (req: Request, res: Response) => {
  const user = await Users.create(req.body);
  res.status(200).json(user);
};

const getUsers = async (req: Request, res: Response) => {
  const users = await Users.find().lean().exec();
  res.status(200).json(users);
};
const getUserById = async (req: Request, res: Response) => {
  const users = await Users.find(req.params).lean().exec();
  res.status(200).json(users);
};

const updateUser = async (req: Request, res: Response) => {
  const updated = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: true,
  });
  res.status(200).json(updated);
};

export { createUser, updateUser, getUsers, getUserById };
