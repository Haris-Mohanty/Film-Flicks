import express from "express";
import {
  deleteBooking,
  getBookingsById,
  newBookings,
} from "../controllers/bookingController.js";

//Router Object
const router = express.Router();

//Movie Booking (New Bookings) || Post
router.post("/", newBookings);

//Get Bookings(movie) By Id || Get
router.get("/:id", getBookingsById);

//Delete Bookings || Delete
router.delete("/:id", deleteBooking);

//Export Router Obj
export default router;
