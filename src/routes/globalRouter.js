import express from "express";
import routes from "../routes";
import {home, login, photos, profile} from "../controllers/globalController";
import {localsMiddleware} from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, localsMiddleware, home);
globalRouter.get(routes.login, localsMiddleware, login);
globalRouter.get(routes.photos, localsMiddleware, photos);
globalRouter.get(routes.profile, localsMiddleware, profile);

export default globalRouter;