export const logging = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};

export const validRoute = (req, res, next) => {
    res.redirect("/");
}
