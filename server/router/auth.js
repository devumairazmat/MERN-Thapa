const { response } = require("express");
const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to  MERN thapa Home from router");
  res.json({ message: res.body });
});

// Registration

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

// Login

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "Awesome" });

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plese Fill the data!" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (!userLogin) {
      res.json({ message: "Login Not Successfull" });
    } else {
      res.json({ message: "User Login Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
