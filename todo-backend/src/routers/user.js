const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = new express.Router();

//signup a user
router.post("/users", userController.createUser);

//login a user
router.post("/users/login", userController.loginUser);

//logout a user
router.post("/users/logout", auth, userController.logoutUser);

//logout all users
router.post("/users/logoutAll", auth, userController.logoutAllUser);

//get all users
router.get("/users", auth, userController.getUsers);

//get a user by id
router.get("/users/:id", auth, userController.getUserById);

//update a user by id
router.patch("/users/:id", auth, userController.updateUser);

//delete a user by id
router.delete("/users/:id", auth, userController.deleteUser);

module.exports = router;
