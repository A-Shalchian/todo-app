import axiosInstance from "./axiosInstance";
import { AxiosError } from "axios";

interface TaskData {
  description?: string;
  completed?: boolean;
}

// Helper function to handle API errors
const handleApiError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const message = error.response?.data?.message || error.message;
    throw new Error(`API Error: ${message}`);
  }
  throw error;
};

export const createTask = async (taskData: TaskData) => {
  try {
    const response = await axiosInstance.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get("/tasks");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getTaskById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateTask = async (taskId: string, taskData: TaskData) => {
  try {
    const response = await axiosInstance.patch(`/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteAllTasks = async () => {
  try {
    const response = await axiosInstance.delete("/tasks");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
