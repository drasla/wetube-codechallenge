import User from "../models/User";
import bcrypt from "bcrypt";

export const userHome = (req, res) => {
    const { user } = req.session;

    res.render("home", {pageTitle: "Home", user});
};

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
};

export const postJoin = async (req, res) => {
    const {username, password, password2, name} = req.body;

    const pageTitle = "Join";

    if (password !== password2) {
        return res.render("join", {pageTitle, errorMessage: "Wrong password confirmation"});
    }

    const exists = await User.exists({
        $or: [
            {
                username
            }
        ]
    });

    if (exists) {
        return res.render("join", {pageTitle, errorMessage: "This username is already taken."});
    }

    try {
        await User.create({
            username,
            password,
            name
        });
    } catch (e) {
        res.render("join", {pageTitle, errorMessage: e});
    }

    res.redirect("/");
};

export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "Login"});
};

export const postLogin = async (req, res) => {
    const {username, password} = req.body;

    const pageTitle = "Login";

    const user = await User.findOne({username});

    if (!user) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "An account with this username does not exists."
        });
    }

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "Wrong password confirmation"
        });
    }

    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
};

// export const seeUsers = (req, res) => {
//     res.render("seeUsers", {pageTitle: "See Users"});
// };
//
// export const seeUser = (req, res) => {
//     res.render("seeUser", {pageTitle: "See User"});
// };
//
// export const editProfile = (req, res) => {
//     res.render("editProfile", {pageTitle: "Edit Profile"});
// }