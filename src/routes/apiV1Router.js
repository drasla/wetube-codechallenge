import express from "express";
import routes from "../routes";
import {buy, refund} from "../controllers/apiV1Controller";

const apiV1Router = express.Router();

apiV1Router.get(routes.buy, buy);
apiV1Router.get(routes.refund, refund);

export default apiV1Router;