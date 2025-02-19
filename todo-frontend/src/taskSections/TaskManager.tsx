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
  const [isLoading, setIsLoading] = useState(true);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksFromApi = await getTasks();
        setTasks(tasksFromApi);
      } catch (err) {
        console.error("Error fetching tasks", err);
        setError("Failed to load tasks");
      } finally {
        setIsLoading(false);
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
    <div className="min-h-screen bg-[radial-gradient(ellipse_200%_75%_at_bottom_right,#183EC2,#EAEEFE_80%)] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-indigo-500">
            <h1 className="text-2xl font-bold text-white text-center">
              Task Manager
            </h1>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                <p>{error}</p>
              </div>
            )}

            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <TaskForm onCreateTask={handleTaskCreate} />
                </div>

                <div className="divide-y divide-gray-200">
                  <TaskList tasks={tasks} setTasks={setTasks} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
