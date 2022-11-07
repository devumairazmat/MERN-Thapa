const { response } = require("express");
const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to  MERN thapa Home from router");
  res.json({ message: res.body });
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please Fill the Form Properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    const userRegister = await user.save();

    res.status(201).json({ message: "User Registred successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
