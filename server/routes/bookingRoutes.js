import express from "express";
import { newBookings } from "../controllers/bookingController.js";

//Router Object
const router = express.Router();

//Movie Booking (New Bookings)
router.post("/", newBookings);

//Export Router Obj
export default router;
