export const localsMiddleware = (req, res, next) => {
    res.locals.siteTitle = "Nomad Movies";
    next();
};

export const urlLogger = (req, res, next) => {
    console.log(`path : ${req.originalUrl}`);
    next();
};

export const timeLogger = (req, res, next) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    console.log(`Time : ${year}.${month}.${day}`);
    next();
};

export const securityLogger = (req, res, next) => {
    if(req.protocol !== "https") {
        console.log(`Insecure ❌`);
    }
    next();
}

export const protectorMiddleware = (req, res, next) => {
        res.redirect("/");
}