import express from "express";
import {home, movieDetail, filterMovie} from "../controllers/movieController";
import {getAddMovie, postAddMovie} from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.get("/add", getAddMovie);
movieRouter.post("/add", postAddMovie)
movieRouter.get("/filter", filterMovie);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/", home);

export default movieRouter;
