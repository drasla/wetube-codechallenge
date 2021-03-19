import express from "express";
import {documentation} from "../controllers/apiController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.get(routes.documentation, documentation);

export default apiRouter;