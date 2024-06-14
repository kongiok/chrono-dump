import { create } from "zustand";
import { signInWithPassword } from "@/services/user.service.js";

export const useUserStore = create((set) => ({
  id: null,
  name: null,
  email: null,
  token: null,
  role: null,
  isLogin: false,
  setToken: (token) => set({ token }),
  login: async (email, password) => {
    const { data, error } = await signInWithPassword(email, password);
    if (error) {
      return { error };
    }
    set({ id: data.user.id, email: data.user.email, role: data.user.role });
    return { data };
  }
}));
