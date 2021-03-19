import express from "express";
import routes from "./routes";
import globalRouter from "./routes/globalRouter";
import courseRouter from "./routes/courseRouter";
import apiRouter from "./routes/apiRouter";
import apiV1Router from "./routes/apiV1Router";
import apiV2Router from "./routes/apiV2Router";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.courses, courseRouter);
app.use(routes.api + routes.v1, apiV1Router);
app.use(routes.api + routes.v2, apiV2Router);
app.use(routes.api, apiRouter);

// Codesanbox does not need PORT :)
const PORT = 4000;
app.listen(PORT,() => console.log(`http://localhost:${PORT} Listening!`));
