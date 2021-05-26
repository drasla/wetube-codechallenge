import express from "express";

const app = express();

const globalRouter = express.Router();

const home = (req, res) => res.send("Home");
const about = (req, res) => res.send("About");
const contact = (req, res) => res.send("Contact");
const login = (req, res) => res.send("Login");

globalRouter.get("/", home);
globalRouter.get("/about", about);
globalRouter.get("/contact", contact);
globalRouter.get("/login", login);

app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
