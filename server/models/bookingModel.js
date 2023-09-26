import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    seatNumber: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export
export default mongoose.model("Booking", bookingSchema);
