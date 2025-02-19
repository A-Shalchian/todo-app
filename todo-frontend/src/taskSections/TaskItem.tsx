// src/taskSections/TaskItem.tsx
import React, { useState } from "react";
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
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleComplete = async () => {
    try {
      setIsLoading(true);
      const updatedTask = await updateTask(task._id, {
        completed: !task.completed,
      });

      if (updatedTask) {
        setTasks((prev) =>
          prev.map((t) => (t._id === task._id ? updatedTask : t))
        );
      }
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteTask(task._id);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdate = async () => {
    if (editedDescription.trim() === "") return;
    try {
      setIsLoading(true);
      const updatedTask = await updateTask(task._id, {
        description: editedDescription,
      });

      if (updatedTask) {
        setTasks((prev) =>
          prev.map((t) => (t._id === task._id ? updatedTask : t))
        );
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li
      className={`group bg-white rounded-lg shadow-sm hover:shadow transition-shadow ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <div className="p-4 flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          disabled={isLoading}
          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />

        {isEditing ? (
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            onBlur={handleUpdate}
            onKeyPress={(e) => e.key === "Enter" && handleUpdate()}
            autoFocus
            className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        ) : (
          <span
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.description}
          </span>
        )}

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsEditing(!isEditing)}
            disabled={isLoading}
            className="text-gray-600 hover:text-indigo-600 p-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="text-gray-600 hover:text-red-600 p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
