import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Challenge 9 - Movies";
    res.locals.routes = routes;
    next();
}