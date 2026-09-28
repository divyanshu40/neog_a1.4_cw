const { addMovies, addMovie, readAllMovies, getMovieById, updateMovieById, deleteMovieById } = require("../services/crud");

exports.addMoviesController = async (req, res) => {
    try {
        let moviesData = req.body;
        let response = await addMovies(moviesData);
        return res.status(201).json(response);
    } catch(error) {
       return res.status(500).json({ message: error.message });
    }
}

exports.addMovieController = async (req, res) => {
    try {
        let movieData = req.body;
        let response = await addMovie(movieData);
        return res.status(201).json(response);
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.readAllMoviesController = async (req, res) => {
    try {
        let response = await readAllMovies();
        if (response.length === 0) {
            return res.status(400).json({ message: "Movies not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getMovieByIdController = async (req, res) => {
    try {
        let id = req.params.id;
        let response = await getMovieById(id);
        if (response === null) {
            return res.status(400).json({ message: "Movie not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.updateMovieByIdController = async (req, res) => {
    try {
        let id = req.params.id;
        let updatedData = req.body;
        let response = await updateMovieById(id, updatedData);
        if (response === null) {
            return res.status(400).json({ message: "Movie to be updated not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.deleteMovieController = async (req, res) => {
    try {
        let id = req.params.id;
        let response = await deleteMovieById(id);
        if (response === null) {
            return res.status(400).json({ message: "Movie to be deleted not found" });
        }
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}