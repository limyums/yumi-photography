import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Image } from "../models/images";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize multer upload
const upload = multer({
  storage: storage,
}).single("myImage");

export const uploadImage = (req: Request, res: Response) => {
  upload(req, res, (err: any) => {
    if (err) {
      console.error(err);
    } else {
      if (req.file == undefined) {
        res.render("upload", {
          msg: "Error: No File Selected!",
        });
      } else {
        const newImage = new Image({
          sub_gallery: "yoga",
          title: req.file.filename,
          data: fs.readFileSync(
            path.join(__dirname, "../../uploads/" + req.file.filename)
          ),
          contentType: req.file.mimetype,
        });
        newImage
          .save()
          .then((savedImage) => {
            console.log("Image saved to database:", savedImage);
          })
          .catch((err) => {
            console.error("Error saving image:", err);
          });
      }
    }
  });
};
