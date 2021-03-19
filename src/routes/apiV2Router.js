import express from "express";
import routes from "../routes";
import {edit, remove} from "../controllers/apiV2Controller";

const apiV2Router = express.Router();

apiV2Router.get(routes.remove, remove);
apiV2Router.get(routes.edit, edit);

export default apiV2Router;