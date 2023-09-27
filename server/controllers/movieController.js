import jwt from "jsonwebtoken";
import movieModel from "../models/movieModel.js";
import mongoose from "mongoose";
import adminModel from "../models/adminModel.js";

//************* ADD MOVIES  ************/
export const addMovies = async (req, res, next) => {
  try {
    //Get token(bearer token)
    const token = req.headers.authorization.split(" ")[1];
    if (!token && token.trim() === "") {
      return res.status(404).send({
        message: "Authorization Failed!",
      });
    }

    //Verify token
    let adminId;
    //Verification Process
    //1. verify - decrypt token
    //2. store admin id from decrypt token

    jwt.verify(token, process.env.JWT_SECRET, (err, decrypted) => {
      if (err) {
        return res.status(400).send({
          message: `${err.message}`,
        });
      } else {
        adminId = decrypted.id;
      }
    });

    const { title, description, actors, releaseDate, posterUrl, featured } =
      req.body;

    //Validation
    if (!title || !description || !actors || !posterUrl || !featured) {
      return res.status(422).send({
        message: "Please provide all fields!",
      });
    }

    //Create new movie
    let movie = new movieModel({
      title,
      description,
      actors,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      posterUrl,
      admin: adminId,
    });

    //Create Mongodb session
    const session = await mongoose.startSession();

    //Get the admin
    const adminUser = await adminModel.findById(adminId);

    //Use the session for start transactions
    session.startTransaction();

    //Add this movie in db(Save)
    await movie.save({ session });
    adminUser.addedMovies.push(movie);
    await adminUser.save({ session });

    //Commit the transaction
    await session.commitTransaction();

    if (!movie) {
      return res.status(500).send({
        message: "Movie created failed!",
      });
    }

    return res.status(201).send({
      message: "Movie Added Successfully!",
      movie,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error in add movie API!",
    });
  }
};

//*********** GET ALL MOVIES (FIND MOVIES) *************/
export const getMovies = async (req, res, next) => {
  try {
    let movies = await movieModel.find();

    //Validation
    if (!movies) {
      return res.status(500).send({
        message: "Request Failed!",
      });
    }

    return res.status(200).send({
      message: "All Movies Fetched Successfully!",
      totalMovies: movies.length,
      movies,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error in Get movie API!",
    });
  }
};

//*********** GET ALL MOVIES BY ID (FIND MOVIES) *************/
export const getMoviesById = async (req, res, next) => {
  try {
    const id = req.params.id;

    let movie = await movieModel.findById(id);
    //Validation
    if (!movie) {
      return res.status(500).send({
        message: "Request Failed!",
      });
    }

    return res.status(200).send({
      message: "Movie Fetched Successfully!",
      movie,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error in Get movie API!",
    });
  }
};
