"use client";
import { useState, useEffect } from "react";
import { Calendar } from "./Calendar";
import TaskManager from "./TaskManager";
import { getTasks } from "@/utils/taskApi";

interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

const CombinedView = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksFromApi = await getTasks();
        setTasks(tasksFromApi || []);
      } catch (err) {
        console.error("Error fetching tasks", err);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex gap-4 p-4">
      <div className="w-2/3">
        <Calendar tasks={tasks || []} />
      </div>
      <div className="w-1/3">
        <TaskManager />
      </div>
    </div>
  );
};

export default CombinedView;
