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
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
