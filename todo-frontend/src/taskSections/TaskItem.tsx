// src/taskSections/TaskItem.tsx
import React from "react";
import { updateTask, deleteTask } from "@/utils/taskApi";

interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({ task, setTasks }: TaskItemProps) => {
  const handleToggle = async () => {
    try {
      const updatedTask = await updateTask(task._id, {
        description: task.description,
        completed: !task.completed,
      });
      setTasks((prev) =>
        prev.map((t) => (t._id === task._id ? updatedTask : t))
      );
    } catch (err) {
      console.error("Error updating task", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.description}
      </span>
      <button onClick={handleToggle}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
