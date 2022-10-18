const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to  MERN thapa Home");
});

app.get("/about", (req, res) => {
  res.send("Welcome to  MERN thapa About");
});

app.get("/contact", (req, res) => {
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
