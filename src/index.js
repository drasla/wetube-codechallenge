import express from "express";
import path from "path";
import movieRouter from "./movieRouter";
import {localsMiddleware} from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleware);

app.use("/", movieRouter);

// Codesanbox does not need PORT :)
const PORT = 4000;
app.listen(PORT,() => console.log(`http://localhost:${PORT} Listening!`));
