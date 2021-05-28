import express from "express";
import routes from "../routes";
import {editProfile, userDetail, userHome} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, userHome);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile, editProfile);

export default userRouter;