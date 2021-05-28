import express from "express";
import routes from "../routes";
import {home, join, login, newpage, protectedPage, trending} from "../controllers/globalController";
import {protectorMiddleware} from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.trending, trending);
globalRouter.get(routes.new, newpage);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.protectPage, protectorMiddleware, protectedPage);

export default globalRouter;