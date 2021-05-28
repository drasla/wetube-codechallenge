import express from "express";
import routes from "../routes";
import {storyDelete, storyDetail, storyEdit} from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get(routes.storiesDetail(), storyDetail);
storyRouter.get(routes.storiesEdit(), storyEdit);
storyRouter.get(routes.storiesDelete(), storyDelete);

export default storyRouter;