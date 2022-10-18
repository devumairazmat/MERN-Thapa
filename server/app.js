const express = require("express");
const app = express();

// Middleware configuration

const middleware = (req, res, next) => {
  console.log("Middleware configuration");
  next();
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

app.listen("3000", () => {
  console.log("listening on http://localhost:3000");
});
