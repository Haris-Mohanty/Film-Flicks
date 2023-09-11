import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgYellow
        .black
    );
  } catch (error) {
    console.log(`Mongoose Database Error ${error}`.bgRed.white);
  }
};

export default connectDB;