import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  user: null,
  error: "",
  isLoading: false,
  token: Cookies.get("jwtToken") || null,

  login: async (email, password) => {
    email, password;
    set({ isLoading: true, error: "" });

    try {
      const response = await axios.post(
        `/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const token = response.data.token; // Varsayılan olarak token yanıt yapısını kontrol edin
      set({ token: token });

      "User logged in:", response.data;
    } catch (error) {
      set({
        error: "Login failed. Please check your credentials.",
        isLoading: false,
      });
      console.error("Error during login:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post(`/auth/logout`, null, {
        withCredentials: true,
      });

      "User logged out:", response.data;
      set({ user: null });
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  },
}));

export default useAuthStore;
