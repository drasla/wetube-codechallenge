import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
    const movies = getMovies();
    res.render("movies", {pageTitle: "Movies!", movies});
};
export const movieDetail = (req, res) => {
    const {params: {id}} = req;

    const movie = getMovieById(id);
    res.render("detail", {pageTitle: movie.title, movie});
};
export const filterMovie = (req, res) => {
    const { year, rating } = req.query;

    let movies = [];
    if(year) {
        movies = getMovieByMinimumYear(year);
        res.render("movies", {pageTitle: "Searching by year : "+year, movies})
    } else if(rating) {
        movies = getMovieByMinimumRating(rating)
        res.render("movies", {pageTitle: "Searching by rating : "+rating, movies})
    } else {
        res.render("404", {pageTitle: "Page not Found"});
    }
};
