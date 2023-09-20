import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

//Dot env config
dotenv.config();

//MongoDb Connection
connectDB();

//Rest Obj
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev")); //Call morgan showing in console

// Middleware Routes
app.use("/api/v1/user", userRoutes);

//Validation middleware
app.use(errorMiddleware);

//Port
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} mode on port ${PORT}`
      .bgMagenta.white
  );
});
