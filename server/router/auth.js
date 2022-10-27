const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to  MERN thapa Home from router");
  res.json({ message: res.body });
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

module.exports = router;
