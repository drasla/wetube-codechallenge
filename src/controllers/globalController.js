export const home = (req, res) => {
    res.send("Home");
};

export const trending = (req, res) => {
    res.send("Trending");
};

export const newpage = (req, res) => {
    res.send("New");
};

export const join = (req, res) => {
    res.send("Join");
};

export const login = (req, res) => {
    res.send("Login");
};

export const protectedPage = (req, res) => {
    res.send("Protected");
}