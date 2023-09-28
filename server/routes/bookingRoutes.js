import express from "express";
import { newBookings } from "../controllers/bookingController.js";

//Router Object
const router = express.Router();

//Movie Booking (New Bookings)
router.post("/", newBookings);

//Get Bookings(movie) By Id
router.get("/getBookings")

//Export Router Obj
export default router;
