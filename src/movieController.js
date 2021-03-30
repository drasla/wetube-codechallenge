import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
    res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    const movie = await getMovieById(id);
    if (!movie) {
        res.render("404", { pageTitle: "Movie not found" });
    }
    return res.render("detail", { movie });
};

export const getAddMovie = (req, res) => {
    res.render("add", { pageTitle: "Add Movie" });
}

export const postAddMovie = (req, res) => {
    const {
        body: {title, synopsis, genres: tempGenres}
    } = req;

    const genres = tempGenres.split(",");

    addMovie({title, synopsis, genres});

    res.redirect("/");
}

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
