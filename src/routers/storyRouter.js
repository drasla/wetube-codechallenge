import express from "express";
import {deleteStory, editStory, seeStory} from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id", seeStory);
storyRouter.get("/:id/edit", editStory);
storyRouter.get("/:id/delete", deleteStory);

export default storyRouter;