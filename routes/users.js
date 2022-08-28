const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const posts = await Post.find({ userId: req.params.id });
    if (user) {
      const u ={
        userDetails:user,
        postsDetails:posts
      }
      res.json(u);
    } else {
      res.send("No user for this id");
    }
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const u = await User.find({ email: email });
    if (!(u.length === 0)) {
      const tempPass = u[0].password;
      if (password === tempPass) {
        res.send("Login Success...!");
      } else {
        res.send("Wrong Password...!");
      }
    } else {
      res.send("Invalid email...!");
    }
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.post("/", async (req, res) => {
  const email = req.body.email;
  const user = new User({
    firstName: req.body.firstName,
    surname: req.body.surname,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    contactNumber: req.body.contactNumber,
    email: email,
    password: req.body.password,
  });
  try {
    const u = await User.find({ email: email });
    if (u.length === 0) {
      const u1 = await user.save();
      res.json(u1);
    } else {
      res.send("User already Exist");
    }
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const response = await user.remove();
    res.json(response);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.firstName = req.body.firstName;
      user.surname = req.body.surname;
      user.gender = req.body.gender;
      user.dateOfBirth = req.body.dateOfBirth;
      user.contactNumber = req.body.contactNumber;
      user.email = req.body.email;
      user.password = req.body.password;
      const response = await user.save();
      res.json(response);
    } else {
      res.send("Invalid User id...!");
    }
  } catch (err) {
    res.send("Err: " + err);
  }
});

module.exports = router;
