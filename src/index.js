import express from "express";
import {protectorMiddleware, securityLogger, timeLogger, urlLogger} from "./middlewares";

const app = express();

const globalRouter = express.Router();

const home = (req, res) => res.send("Home");
const about = (req, res) => res.send("About");
const contact = (req, res) => res.send("Contact");
const login = (req, res) => res.send("Login");
const protectedPage = (req, res) => res.send("Protected");

globalRouter.get("/", urlLogger, timeLogger, securityLogger, home);
globalRouter.get("/about", urlLogger, timeLogger, about);
globalRouter.get("/contact", urlLogger, timeLogger, contact);
globalRouter.get("/login", urlLogger, timeLogger, login);
globalRouter.get("/protected", urlLogger, timeLogger, protectorMiddleware, protectedPage);

app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(4000,() => console.log(`Listening! `));
