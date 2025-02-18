"use client";

import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { getTasks, createTask } from "@/utils/taskApi"; // Adjust the path as needed

interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksFromApi = await getTasks();
        setTasks(tasksFromApi);
      } catch (err) {
        console.error("Error fetching tasks", err);
        setError("Failed to load tasks");
      }
    };

    fetchTasks();
  }, []);

  // Handler for adding a new task
  const handleTaskCreate = async (description: string) => {
    try {
      const newTask = await createTask({ description, completed: false });
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (err) {
      console.error("Error creating task", err);
      setError("Error creating task.");
    }
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      {error && <p className="error">{error}</p>}
      <TaskForm onCreateTask={handleTaskCreate} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManager;
