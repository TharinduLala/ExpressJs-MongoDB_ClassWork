const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getUser);

router.post("/login", UserController.loginUser);

router.post("/", UserController.saveUser);

router.delete("/:id", UserController.deleteUser);

router.put("/:id", UserController.updateUser);

module.exports = router;
