import { Request, Response } from "express";

const home = (req: Request, res: Response) => {
  res.render("home");
};
const about = (req: Request, res: Response) => {
  res.render("about");
};

const portrait = (req: Request, res: Response) => {
  res.render("gallery", { page: "portrait" });
};

const travel = (req: Request, res: Response) => {
  res.render("gallery", { page: "travel" });
};

const outdoor = (req: Request, res: Response) => {
  res.render("gallery", { page: "outdoor" });
};
const contact = (req: Request, res: Response) => {
  res.render("contact");
};

const upload = (req: Request, res: Response) => {
  res.render("upload", { msg: "" });
};

export default {
  home,
  about,
  portrait,
  travel,
  outdoor,
  contact,
  upload,
};
