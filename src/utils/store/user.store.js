import { create } from "zustand";

export const useUserStore = create((set) => ({
  id: null,
  username: null,
  email: null,
  token: null,
  role: null,
  setUser: (id, username, email, token, role) => set({ id, username, email, token, role }),
  logout: () => set({ id: null, username: null, email: null, token: null }),
}));
