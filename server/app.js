const express = require("express");
const app = express();

// dotenv
const dotenv = require("dotenv");
// require("dotenv").config();
dotenv.config({ path: "./config.env" });
require("./db/conn");
require("./model/userSchema");
// Middleware configuration

const middleware = (req, res, next) => {
  console.log("Middleware configuration");
};

app.get("/", (req, res) => {
  res.send("Welcome to  MERN thapa Home");
  next();
});

app.get("/about", middleware, (req, res) => {
  res.send("Welcome to  MERN thapa About");
});

app.get("/contact", middleware, (req, res) => {
  res.send("Welcome to  MERN thapa Contact");
});

app.get("/signin", (req, res) => {
  res.send("Welcome to  MERN thapa Login");
});

app.get("/signup", (req, res) => {
  res.send("Welcome to  MERN thapa Regestration");
});
