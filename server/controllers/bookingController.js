import mongoose from "mongoose";
import bookingModel from "../models/bookingModel.js";
import movieModel from "../models/movieModel.js";
import UserModel from "../models/UserModel.js";

//************ MOVIE BOOKING (NEW BOOKINGS) ********/
export const newBookings = async (req, res, next) => {
  try {
    const { movie, date, seatNumber, user } = req.body;

    //Validation
    if (!movie || !date || !seatNumber || !user) {
      return res.status(400).send({
        message: "Please provide all fields!",
      });
    }

    //Check existing movie
    let existingMovie = await movieModel.findById(movie);
    if (!existingMovie) {
      return res.status(404).send({
        message: "Movie Not Found!",
      });
    }
    //Check existing user
    let existingUser = await UserModel.findById(user);
    if (!existingUser) {
      return res.status(404).send({
        message: "User Not Found!",
      });
    }

    //New booking
    let booking = new bookingModel({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    //Create mongodb session for Transaction (for all collection transaction)
    const session = await mongoose.startSession();

    //Start Transaction
    session.startTransaction();

    //Get user and movie then push in array
    existingUser.bookings.push(booking);
    existingMovie.bookings.push(booking);

    //Save movie
    await existingUser.save({ session });
    await existingMovie.save({ session });
    await booking.save({ session });

    //Commit transaction
    session.commitTransaction();

    res.status(201).send({
      message: "Booking a new Movie Successfully!",
      booking,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error in movie booking API!",
      err,
    });
  }
};

//***************** GET BOOKINGS(MOVIE) BY ID *******************/
export const getBookingsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id)
  } catch (err) {
    return res.status(500).send({
      message: "Error in getting booking Api!",
      err,
    });
  }
};
