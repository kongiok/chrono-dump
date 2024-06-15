import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [],
  taskView: "index",
  setTaskView: (taskView) => set({ taskView }),
  setTasks: (tasks) => set({ tasks }),
  editTask: (id, task) => set((state) => {
    const index = state.tasks.findIndex((task) => task.id === id);
    state.tasks[index] = task;
    return { tasks: [...state.tasks] };
  }),
  deleteTask: (id) => set((state) => {
    const tasks = state.tasks.filter((task) => task.id !== id);
    return { tasks };
  }),
  addTask: (task) => set((state) => {
    const id = state.tasks.length + 1;
    return { tasks: [...state.tasks, { id, ...task }] };
  }),
}));
