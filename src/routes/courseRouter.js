import express from "express";
import routes from "../routes";
import {courses, courses_mine, courses_new} from "../controllers/courseController";

const courseRouter = express.Router();

courseRouter.get("/", courses);
courseRouter.get(routes.mine, courses_mine);
courseRouter.get(routes.new, courses_new);

export default courseRouter;