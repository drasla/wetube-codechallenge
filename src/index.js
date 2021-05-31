import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import {localsMiddleware} from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(helmet());
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

// Codesanbox does not need PORT :)
app.listen(4000,() => console.log(`Listening!`));
