import { backend } from "../utils/utils.js";

export const fetchTasks = async (token) => {
  // const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks`, {
  //   headers: {
  //     'authorization': "Bearer " + token,
  //     "Content-Type": "application/json"
  //   }
  // });
  const taskResponse = await backend.get("/tasks/", {
    headers: {
      'Content-Type': "application/json",
    }
  });
  console.log(taskResponse.data.tasks);
  return taskResponse.data.tasks;
}

export const createTask = async (token, task) => {
  const response = await backend.post("/tasks", { task }, { auth: token });
  return response.task;
}

export const fetchTask = async (token, id) => {
  const response = await backend.get(`/tasks/${id}`, { auth: token });
  return response.task;
}

export const updateTask = async (token, id, task) => {
  const response = await backend.patch(`/tasks/${id}`, { task }, { auth: token });
  return response.task;
}

export const deleteTask = async (token, id) => {
  await backend.delete(`/tasks/${id}`, { auth: token });
}
