import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minLength: [6, "Password length should be greater than 6 character!"],
    },
    addedMovies: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
