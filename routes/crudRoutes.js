const express = require("express");
const crudControllers = require("../controllers/crudControlers");

const router = express.Router();

// route to add multiple movies
router.post("/movies/new", crudControllers.addMoviesController);

// route to add a movie
router.post("/movie/new", crudControllers.addMovieController);

// route to get all movies
router.get("/movies", crudControllers.readAllMoviesController);

// route to get a movie by id
router.get("/movie/:id", crudControllers.getMovieByIdController);

// route to update movie by id
router.post("/movie/update/:id", crudControllers.updateMovieByIdController);

// route to delete movie by id
router.delete("/movie/delete/:id", crudControllers.deleteMovieController);

module.export = router;