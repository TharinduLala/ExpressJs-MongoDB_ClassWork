const Post = require("../models/post");

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (err) {
    res.send("Error : " + err);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.send("No post for this id");
    }
  } catch (err) {
    res.send("Error : " + err);
  }
};

const savePost = async (req, res) => {
  const post = new Post({
    userId: req.body.userId,
    createdTime: req.body.createdTime,
    lastUpdatedTime: req.body.lastUpdatedTime,
    title: req.body.title,
    body: req.body.body,
  });
  try {
    const p = await post.save();
    res.json(p);
  } catch (err) {
    res.send("Error : " + err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      post.userId = req.body.userId;
      post.createdTime = post.createdTime;
      post.lastUpdatedTime = req.body.lastUpdatedTime;
      post.title = req.body.title;
      post.body = req.body.body;
      const response = await post.save();
      res.json(response);
    } else {
      res.send("Invalid Post id...!");
    }
  } catch (err) {
    res.send("Err: " + err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const response = await post.remove();
    res.json(response);
  } catch (err) {
    res.send("Error : " + err);
  }
};

module.exports = { getAllPosts, getPost, savePost, updatePost, deletePost };
