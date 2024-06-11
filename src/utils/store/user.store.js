import { create } from "zustand";

export const useUserStore = create((set) => ({
  id: null,
  username: null,
  email: null,
  token: "01b7bd6c-ff95-4370-80ad-0e609b75d903",
  role: null,
  setToken: (token) => set({ token }),
  setUserInfo: (user) => set({ id: user.id, username: user.username, email: user.email, role: user.role }),
  logout: () => set({ id: null, username: null, email: null, token: null }),
}));
