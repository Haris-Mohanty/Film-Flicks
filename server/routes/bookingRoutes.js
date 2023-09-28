import express from "express";
import {
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
router.delete("/:id");

//Export Router Obj
export default router;
