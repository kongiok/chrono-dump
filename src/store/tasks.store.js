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
}));
