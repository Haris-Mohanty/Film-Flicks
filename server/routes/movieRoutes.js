import express from "express";
import { addMovies } from "../controllers/movieController.js";

//Router Object
const router = express.Router();

//Add  movies
router.post("/", addMovies);

//Get all movie(find movie)
router.get()

//Export router
export default router;
