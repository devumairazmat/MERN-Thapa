// Mongoose
const mongoose = require("mongoose");
const express = require("express");

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connecting to DB & App listening on port" + process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });
