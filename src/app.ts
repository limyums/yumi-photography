import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { router as viewRouter } from "./routes/viewRouter";
import { router as galleryRouter } from "./routes/galleryRouter";
import { router as imageRouter } from "./routes/imageRouter";
import { router as userRouter } from "./routes/userRouter";
export const app = express();

const key1 = process.env.COOKIE_SESSION_KEY1 || "key1";
const fileUpload = require("express-fileupload");

app.use(express.static(path.join(__dirname, "public")));
app.use(expressEjsLayouts);
app.use(express.json());
app.use(fileUpload());

// routers
app.use("/", viewRouter);
app.use("/users", userRouter);
app.use("/galleries", galleryRouter);
app.use("/images", imageRouter);

app.set("view engine", "ejs");
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.redirect("/view");
});
