import express from "express";
import {
  getBookingsById,
  newBookings,
} from "../controllers/bookingController.js";

//Router Object
const router = express.Router();

//Movie Booking (New Bookings)
router.post("/", newBookings);

//Get Bookings(movie) By Id
router.get("/getBookings", getBookingsById);

//Export Router Obj
export default router;
