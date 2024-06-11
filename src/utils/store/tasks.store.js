import { create } from "zustand";
import { TaskView } from "@/utils/types.js";

export const taskViewStore = create((set) => ({
  taskView: TaskView.INBOX,
  setTaskView: (taskView) => set({ taskView }),
}));

export const useTasksStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  editTask: (id, task) => set((state) => {
    const index = state.tasks.findIndex((task) => task.id === id);
    state.tasks[index] = task;
    return { tasks: [...state.tasks] };
  }),
}));
