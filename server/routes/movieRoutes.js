import express from "express";
import {
  addMovies,
  getMovies,
  getMoviesById,
} from "../controllers/movieController.js";

//Router Object
const router = express.Router();

//Add  movies
router.post("/", addMovies);

//Get all movie(find movie)
router.get("/", getMovies);

//Get all movie By ID
router.get("/:id", getMoviesById);

//Export router
export default router;
