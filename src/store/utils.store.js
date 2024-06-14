import { create } from "zustand";

export const useDialogStore = create((set) => ({
  isOpen: false,
  title: "",
  message: "",
  toggleDialog: () => set((state) => ({ isOpen: !state.isOpen })),
}))


export const usePomodoroStore = create((set) => ({
  isRunning: false,
  currentTask: null,
  taskName: "",
  baseTime: 25 * 60,
  remainingTime: 0,
  setTime: (time) => set({ currentTime: time }),
  startPomodoro: () => set({ isRunning: true }),
  pausePomodoro: () => set({ isRunning: false }),
}))
