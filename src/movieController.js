/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.render("movies", { pageTitle: "Movies!", movies });
        console.log(movies);
    } catch (error) {
        res.render("movies", { pageTitle: "Home", movies: [] });
    }
};

export const getCreate = (req, res) => {
    return res.render("create", { pageTitle: "Create" });
};

export const postCreate = async (req, res) => {
    const {
        body: { title, year, rating, synopsis, genres }
    } = req;
    const newMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres: genres.split(",")
    });
    return res.redirect(`/${newMovie._id}`);
};

export const search = async (req, res) => {
    const {
        query: { year, rating }
    } = req;
    let movies = [];
    if (year) {
        try {
            movies = await Movie.find({
                year
            });
            res.render("search", {
                pageTitle: `Filtering by year: ${year}`,
                movies
            });
        } catch (error) {
            console.log(error);
        }
    }
    if (rating) {
        try {
            movies = await Movie.find({
                rating
            });
            res.render("search", {
                pageTitle: `Filtering by rating: ${rating}`,
                movies
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const getEditPage = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const movie = await Movie.findById(id);
        res.render("editMovie", {
            pageTitle: `Editing ${movie.title}`,
            movie,
            genres: movie.genres.toString()
        });
    } catch (error) {
        res.render("404", { pageTitle: "Movie not found" });
    }
};

export const postEditPage = async (req, res) => {
    const {
        params: { id },
        body: { title, year, rating, synopsis, genres }
    } = req;
    try {
        await Movie.findOneAndUpdate(
            { _id: id },
            { title, year, rating, synopsis, genres: genres.split(",") }
        );
        res.redirect(`/${id}`);
    } catch (error) {
        res.render("404", { pageTitle: "Movie can't update" });
    }
};

export const getDeletePage = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Movie.findOneAndRemove({ _id: id });
        res.redirect("/");
    } catch (error) {
        res.render("404", { pageTitle: "Movie can't delete" });
    }
};

export const movieDetail = async (req, res) => {
    const {params: { id }} = req;

    try {
        const movie = await Movie.findById(id);
        res.render("detail", { pageTitle: movie.title, movie });
    } catch (error) {
        console.log(error);
        res.render("404", { pageTitle: "Movie not found" });
    }
};