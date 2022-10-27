const express = require("express");
const app = express();

app.use(express.json());

// dotenv
const dotenv = require("dotenv");
// require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
dotenv.config({ path: "./config.env" });

// Db connect
require("./db/conn");
// Schema Connect
require("./model/userSchema");
// Route auth Connect
app.use(require("./router/auth"));
// Middleware configuration

const middleware = (req, res, next) => {
  console.log("Middleware configuration");
  next();
};

app.get("/", (req, res) => {
  res.send("Welcome to  MERN thapa Home from app");
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

app.listen(process.env.PORT, () => {
  console.log("Connecting to DB & App listening on port" + process.env.PORT);
});
