import express from "express";
import session from "express-session";
import helmet from "helmet";
import cookieParser from "cookie-parser";
//import userRouter from "./routers/userRouter";
//import globalRouter from "./routers/globalRouter";
//import storyRouter from "./routers/storyRouter";
import {localsMiddleware} from "./middlewares";
//import movieRouter from "./routers/movieRouter";
import "./db";
//import "./models/Movie";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(helmet());
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    session({
        secret: "Hello!",
        resave: true,
        saveUninitialized: true
    }));

app.use(localsMiddleware);

//app.use("/", globalRouter);
//app.use("/users", userRouter);
//app.use("/stories", storyRouter);

app.use("/", userRouter);

// Codesanbox does not need PORT :)
app.listen(4500, () => console.log(`Listening!`));
