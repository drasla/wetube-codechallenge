import express from "express";
import path from "path";
import routes from "./routes";
import globalRouter from "./routes/globalRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
const PORT = 4000;
app.listen(PORT,() => console.log(`http://localhost:${PORT} Listening!`));
