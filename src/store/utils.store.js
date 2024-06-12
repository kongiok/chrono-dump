import { create } from "zustand";

export const useDialogStore = create((set) => ({
  isOpen: false,
  title: "",
  message: "",
  toggleDialog: () => set((state) => ({ isOpen: !state.isOpen })),
}))


export const usePomodoroStore = create((set) => ({
  isRunning: false,
  isPaused: false,
  isBreak: false,
  currentTask: null,
  remainingTime: 25 * 60,
  setTime: (time) => set({ currentTime: time }),
  startPomodoro: () => set({ isRunning: true, isPaused: false }),
  pausePomodoro: () => set({ isRunning: false }),
}))
