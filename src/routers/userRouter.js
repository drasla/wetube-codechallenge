import express from "express";
import {getJoin, getLogin, postJoin, postLogin, userHome} from "../controllers/userController";
import {protectorMiddleware} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/", protectorMiddleware, userHome);
userRouter.get("/join", getJoin);
userRouter.post("/join", postJoin);
userRouter.get("/login", getLogin);
userRouter.post("/login", postLogin);
// userRouter.get("/:id", seeUser);
// userRouter.get("/edit-profile", editProfile);

export default userRouter;