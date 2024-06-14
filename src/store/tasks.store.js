import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [
    { id: 1, title: "English CH.1", description: "List the words to memorize." },
    { id: 2, title: "English CH.2", description: "List the words to memorize." },
    { id: 3, title: "English CH.3", description: "List the words to memorize." },
    { id: 4, title: "English CH.4", description: "List the words to memorize." },
    { id: 5, title: "English Midterm Note", description: "Write summerize from CH.1-4." },
  ],
  taskView: "index",
  setTaskView: (taskView) => set({ taskView }),
  setTasks: (tasks) => set({ tasks }),
  editTask: (id, task) => set((state) => {
    const index = state.tasks.findIndex((task) => task.id === id);
    state.tasks[index] = task;
    return { tasks: [...state.tasks] };
  }),
}));