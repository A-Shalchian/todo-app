import axiosInstance from "./axiosInstance";

interface TaskData {
  description: string;
  completed?: boolean;
}
export const createTask = async (taskData: TaskData) => {
  try {
    const response = await axiosInstance.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get("/tasks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTaskById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (id: string, taskData: TaskData) => {
  try {
    const response = await axiosInstance.put(`/tasks/${id}`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAllTasks = async () => {
  try {
    const response = await axiosInstance.delete("/tasks");
    return response.data;
  } catch (error) {
    throw error;
  }
};
