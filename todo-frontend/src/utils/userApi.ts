import axiosInstance from "./axiosInstance";
import { AxiosError } from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    return response.data; // { user, token }
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Login failed. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post("/users/", {
      name,
      email,
      password,
    });
    return response.data; // { user, token }
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Signup failed. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post("/users/logout");
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Logout failed. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};

export const logoutAllUser = async () => {
  try {
    const response = await axiosInstance.post("/users/logoutAll");
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Logout failed. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};

export const getUser = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Failed to get user. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};

export const updateUser = async (
  id: string,
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.patch(`/users/${id}`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Failed to update user. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error: string }>;
    if (axiosError.response?.data) {
      throw new Error(
        axiosError.response.data.error ||
          "Failed to delete user. Please try again later."
      );
    }
    throw new Error("An error occurred. Please try again later.");
  }
};
