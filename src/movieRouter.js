import express from "express";
import {getAddMovie, home, movieDetail, postAddMovie} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/add", getAddMovie);
movieRouter.post("/add", postAddMovie);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
