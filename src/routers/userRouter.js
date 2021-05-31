import express from "express";
import {editProfile, seeUser, seeUsers} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", seeUsers);
userRouter.get("/:id", seeUser);
userRouter.get("/edit-profile", editProfile);

export default userRouter;