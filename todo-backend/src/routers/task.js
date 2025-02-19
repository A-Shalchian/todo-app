const express = require("express");
const router = new express.Router();
const taskController = require("../controllers/taskController");
const auth = require("../middleware/auth");

//create a task
router.post("/tasks", auth, taskController.createTask);

//get all tasks
router.get("/tasks", auth, taskController.getTasks);

//get task by id
router.get("/tasks/:id", auth, taskController.getTaskById);

//update task by id
router.patch("/tasks/:id", auth, taskController.updateTask);

//delete task by id
router.delete("/tasks/:id", auth, taskController.deleteTask);

//delete all tasks
router.delete("/tasks", auth, taskController.deleteAllTasks);

module.exports = router;
