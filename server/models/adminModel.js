import mongoose from "mongoose";
import validator from "validator";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required!"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      minLength: [6, "Password length should be greater than 6 character!"],
      required: [true, "Password is Required!"],
    },
    addedMovies: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
