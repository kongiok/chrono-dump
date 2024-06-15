import { create } from 'zustand';

export const usePomodoroStore = create((set) => ({
  isRunning: false,
  status: '' | 'work' | 'shortBreak' | 'longBreak',
  currentTask: '',
  remainingTime: 1500,
  setTomodoroTime: (status) => set(() => {
    const time = {
      work: 1500,
      shortBreak: 300,
      longBreak: 900,
    };
    let remainingTime;
    switch (status) {
      case 'work':
        remainingTime = time.work;
        break;
      case 'shortBreak':
        remainingTime = time.shortBreak;
        break;
      case 'longBreak':
        remainingTime = time.longBreak;
        break;
      default:
        remainingTime = time.work;
    }
    return { remainingTime };
  }),

  setIsRunning: (isRunning) => set({ isRunning }),
  setTime: (time) => set({ remainingTime: time }),
  setCurrentTask: (task) => set({ currentTask: task }),
  startPomodoro: () => set({ isRunning: true }),
  pausePomodoro: () => set({ isRunning: false }),
}));
