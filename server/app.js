const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

//Dot env config
dotenv.config();

//Rest Obj
const app = express();

//Middleware
app.use(morgan("dev")); //Call morgan showing in console

//Routes
app.use("/", (req, res, next) => {
  res.send("Hello wo!");
});

//Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} mode on port ${PORT}`
      .bgMagenta.white
  );
});
