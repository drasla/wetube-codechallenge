import express from "express";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import {securityLogger, timeLogger, urlLogger} from "./middlewares";

const app = express();

app.use(routes.home, urlLogger, timeLogger, securityLogger, globalRouter);
app.use(routes.users, urlLogger, timeLogger, securityLogger, userRouter);
app.use(routes.stories, urlLogger, timeLogger, securityLogger, storyRouter);

// Codesanbox does not need PORT :)
app.listen(4000,() => console.log(`Listening! `));
