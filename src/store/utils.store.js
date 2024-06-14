import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const usePomodoroStore = create(subscribeWithSelector((set, get) => ({
  isRunning: false,
  currentTask: '',
  remainingTime: 1500,
  intervalId: null,

  setTime: (time) => set({ remainingTime: time }),

  startPomodoro: () => {
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
      const intervalId = setInterval(() => {
        set((state) => {
          if (state.remainingTime > 0) { return { remainingTime: state.remainingTime - 1 }; } 
          else {
            clearInterval(state.intervalId);
            return { isRunning: false, intervalId: null };
          }
        });
      }, 1000);
      return { isRunning: true, intervalId };
    });
  },

  pausePomodoro: () => set((state) => {
    if (state.intervalId) { clearInterval(state.intervalId); }
    return { isRunning: false, intervalId: null };
  }),
  setCurrentTask: (task) => set({ currentTask: task }),
})));
