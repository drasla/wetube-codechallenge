import {addMovie, getMovieById, getMovieByMinimumRating, getMovieByMinimumYear, getMovies} from "../db";

export const home = (req, res) => {
    res.render("index", { movies: getMovies(), pageTitle: "Movies! Home" });
};
export const movieDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    const movie = await getMovieById(id);
    if (!movie) {
        res.render("404", { pageTitle: "Movie not found" });
    }
    return res.render("detail", { movie, pageTitle: "Movie Detail" });
};
export const filterMovie = async (req, res) => {
    const {
        query: {
            rating,
            year
        }
    } = req;
    console.log(req.query);
    if(rating) {
        res.render("index", { movies: getMovieByMinimumRating(rating), pageTitle: `Movies! Searching by Rating (${rating})` });
    } else if (year) {
        res.render("index", { movies: getMovieByMinimumYear(year), pageTitle: `Movies! Searching by Year (${year})` });
    } else {
        res.render("404", { pageTitle: "Movie not found" });
    }
};


export const getAddMovie = (req, res) => {
    res.render("add", {pageTitle: "Add Movie"});
};

export const postAddMovie = (req, res) => {
    const {
        body: {title, synopsis, genres: tempGenres}
    } = req;

    const genres = tempGenres.split(",");

    addMovie({title, synopsis, genres});

    res.redirect("/");
};