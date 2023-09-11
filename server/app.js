const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send("Hello wo!");
});

app.listen(8080, () => {
  console.log("Connected");
});
