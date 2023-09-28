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
      return res.status(400).json({
        message: "Please provide all fields!",
      });
    }

    //Check existing movie
    let existingMovie = await movieModel.findById(movie);
    if (!existingMovie) {
      return res.status(404).json({
        message: "Movie Not Found!",
      });
    }
    //Check existing user
    let existingUser = await UserModel.findById(user);
    if (!existingUser) {
      return res.status(404).json({
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

    res.status(201).json({
      message: "Booking a new Movie Successfully!",
      booking,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error in movie booking API!",
      err,
    });
  }
};

//***************** GET BOOKINGS(MOVIE) BY ID *******************/
export const getBookingsById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const getBooking = await bookingModel.findById(id);

    if (!getBooking) {
      return res.status(404).json({
        message: "Not found any booking in this ID!",
      });
    }

    return res.status(200).json({
      message: "Booking Fetched Successfully!",
      getBooking,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in getting booking Api!",
      err,
    });
  }
};

//**************** DELETE BOOKING BY ID ***************/
export const deleteBooking = async (req, res, next) => {
  try {
    //Get Booking
    const getBookingId = await bookingModel.findById(req.params.id);

    //Validation
    if (!getBookingId) {
      return res.status(404).json({
        message: `Booking with id ${req.params.id} is not found!`,
      });
    }

    //Delete Booking
    await getBookingId.deleteOne();
    return res.status(200).json({
      message: "Booking Deleted Successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in Delete Booking API!",
      error: err.message,
    });
  }
};
