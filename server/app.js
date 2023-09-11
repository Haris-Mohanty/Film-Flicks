import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

//Dot env config
dotenv.config();

//MongoDb Connection
connectDB();

//Rest Obj
const app = express();

//Middleware
app.use(morgan("dev")); //Call morgan showing in console

//Routes

//Port
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} mode on port ${PORT}`
      .bgMagenta.white
  );
});
