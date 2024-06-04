import { create } from "zustand";
import { TaskView } from "@/utils/types.js";

export const taskViewStore = create((set) => ({
  taskView: TaskView.KANBAN,
  setTaskView: (taskView) => set({ taskView }),
}));

export const taskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));
