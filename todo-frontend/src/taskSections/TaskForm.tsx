// src/taskSections/TaskForm.tsx
import React, { useState } from "react";

interface TaskFormProps {
  onCreateTask: (description: string) => void;
}

const TaskForm = ({ onCreateTask }: TaskFormProps) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    onCreateTask(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
