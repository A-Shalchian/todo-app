// src/taskSections/TaskList.tsx
import React from "react";
import TaskItem from "./TaskItem";

interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
