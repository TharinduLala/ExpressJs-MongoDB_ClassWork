const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/login", async (req, res) => {
    try {
      var query = require('url').parse(req.url,true).query;
      var email=query.email;
        // const users = await User.find();
        res.send(email);
      } catch (err) {
        res.send("Error " + err);
      }
});

module.exports = router;
