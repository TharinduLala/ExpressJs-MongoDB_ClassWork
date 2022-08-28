const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/", PostController.getAllPosts);

router.get("/:id", PostController.getPost);

router.post("/", PostController.savePost);

router.delete("/:id", PostController.deletePost);

router.put("/:id", PostController.updatePost);

module.exports = router;
