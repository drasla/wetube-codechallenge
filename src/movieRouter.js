import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/filter", filterMovie);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/", home);

export default movieRouter;
