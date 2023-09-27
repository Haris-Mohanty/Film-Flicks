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

    //New booking
    let bookings = new bookingModel({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    await bookings.save();
    res.status(201).send({
      message: "Booking a new Movie Successfully!",
      bookings,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Error in movie booking API!",
      err,
    });
  }
};
