const { movieModel } = require("../models/movie.model");

// function to add movies to the database
async function addMovies(moviesData) {
    let addedMovies = await movieModel.insertMany(moviesData);
    return addedMovies;
}

// function to add new movie
async function addMovie(movieData) {
    let addedMovie = await new movieModel(movieData).save();
    return addedMovie;
}

// function to read all movies form the database
async function readAllMovies() {
    let movies = await movieModel.find();
    return movies;
}

// functio to get a movie by id
async function getMovieById(id) {
    let movie = await movieModel.findById(id);
    return movie;
}

// function to updated movie detail by id
async function updateMovieById(id, updatedMovieData) {
    let updatedMovie = await movieModel.findByIdAndUpdate(id, updatedMovieData, { new: true });
    return updatedMovie;
}

// function to delete movie by id
async function deleteMovieById(id) {
    let deletedMovie = await movieModel.findByIdAndDelete(id);
    return deletedMovie;
}

module.exports = { addMovies, addMovie, readAllMovies, getMovieById, updateMovieById, deleteMovieById };