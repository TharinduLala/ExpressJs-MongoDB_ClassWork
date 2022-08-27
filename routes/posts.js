const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  const date =new Date().toLocaleDateString();
  const time =new Date().toLocaleTimeString();

    try {
        const posts = await Post.find();
        // res.send(" GET Request");
        res.send(date+" "+time);
      } catch (err) {
        res.send("Error " + err);
      }
});

module.exports = router;
