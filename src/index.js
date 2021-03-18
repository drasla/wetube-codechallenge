import express from "express";
import routes from "./routes";
import globalRouter from "./routes/globalRouter";

const app = express();



app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
const PORT = 4000;
app.listen(() => console.log(`Listening!`));
