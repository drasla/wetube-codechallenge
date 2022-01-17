import express from "express";
import {
    getDeletePage,
    getEditPage, getUpload,
    home,
    movieDetail,
    postEditPage, postUpload,
    search
} from "../controllers/movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/upload", getUpload);
movieRouter.post("/upload", postUpload);
movieRouter.get("/search", search);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/edit", getEditPage);
movieRouter.post("/:id/edit", postEditPage);
movieRouter.get("/:id/delete", getDeletePage);


export default movieRouter;