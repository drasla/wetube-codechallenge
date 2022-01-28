import express from "express";
import {getRead, home, postRead} from "../controllers/fileController";
import {textUpload} from "../utils/multer/multer";

const fileRouter = express.Router();

fileRouter.get("/", home);
fileRouter.post("/read", textUpload.single("textFile"), postRead);
fileRouter.get("/read/:id", getRead);

export default fileRouter;