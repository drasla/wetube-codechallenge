import express from "express";
import {
    getCreate,
    getDeletePage,
    getEditPage,
    home,
    movieDetail, postCreate,
    postEditPage,
    search
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", getCreate);
movieRouter.post("/create", postCreate);
movieRouter.get("/search", search);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/edit", getEditPage);
movieRouter.post("/:id/edit", postEditPage);
movieRouter.get("/:id/delete", getDeletePage);


export default movieRouter;
