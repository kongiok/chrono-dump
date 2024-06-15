import { create } from "zustand";

export const useUserStore = create((set) => ({
  id: 'ffa8c701-2ce3-43f4-8925-58471892cd44',
  name: '',
  email: '',
  role: '',
  token: '',
  isLogin: false,
  setToken: (token) => set({ token }),
  setName: (name) => set((state) => ({ user: { ...state.user, name } })),
  setEmail: (email) => set((state) => ({ user: { ...state.user, email } })),
  setRole: (role) => set((state) => ({ user: { ...state.user, role } })),
  setLogin: (isLogin) => set({ isLogin }),
  setId: (id) => set({ id })
}));
