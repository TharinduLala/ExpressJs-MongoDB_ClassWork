const User = require("../models/user");
const Post = require("../models/post");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const posts = await Post.find({ userId: req.params.id });
    if (user) {
      const u = {
        userDetails: user,
        postsDetails: posts,
      };
      res.status(200).json(u);
    } else {
      res.status(400).send("No user for this id");
    }
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const u = await User.find({ email: email });
    if (!(u.length === 0)) {
      const tempPass = u[0].password;
      if (password === tempPass) {
        res.status(200).send("Login Success...!");
      } else {
        res.status(400).send("Wrong Password...!");
      }
    } else {
      res.status(400).send("Invalid email...!");
    }
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
};

const saveUser = async (req, res) => {
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
      res.status(200).json(u1);
    } else {
      res.status(400).send("User already Exist");
    }
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
};

const updateUser = async (req, res) => {
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
      res.status(200).json(response);
    } else {
      res.status(400).send("Invalid User id...!");
    }
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const response = await user.remove();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  loginUser,
  saveUser,
  updateUser,
  deleteUser,
};
