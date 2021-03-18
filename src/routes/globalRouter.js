import express from "express";
import routes from "../routes";
import {aboutUs, contact, home, protectED} from "../controllers/globalController";
import {logging, validRoute} from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, logging, home);
globalRouter.get(routes.aboutus, logging, aboutUs);
globalRouter.get(routes.contact, logging, contact);
globalRouter.get(routes.protected, logging, validRoute, protectED);

export default globalRouter;