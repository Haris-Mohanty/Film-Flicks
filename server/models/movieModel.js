import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Movie title is Required!"],
  },
  description: {
    type: String,
    required: [true, "Movie description is Required!"],
  },
  releaseDate: {
    type: Date,
    required: [true, "Movie release date is Required!"],
  },
  posterUrl: {
    type: String,
    required: [true, "Movie poster url is Required!"],
  },
  featured: {
    type: Boolean,
  },
  bookings: [
    {
      type: String,
    },
  ],
  admin: {
    type: String,
    required: [true, "Admin Name is Required!"],
  },
});
