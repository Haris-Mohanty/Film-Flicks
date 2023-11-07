import express from "express";
import {
  addMovies,
  getMovies,
  getMoviesById,
  deleteMovie,
} from "../controllers/movieController.js";

//Router Object
const router = express.Router();

//Add  movies
router.post("/", addMovies);

//Get all movie(find movie)
router.get("/", getMovies);

//Delete movie
router.delete("/:id", deleteMovie);

//Get all movie By ID
router.get("/:id", getMoviesById);

//Export router
export default router;
