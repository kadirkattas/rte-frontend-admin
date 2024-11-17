import { create } from "zustand";
import axios from "axios";

const useVideoStore = create((set) => ({
  allVideos: [],
  user: [],
  fetchInterviewVideos: async (id) => {
    try {
      const response = await axios.get(
        `/interview-videos/get-interview-video/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Videos fetched:", response.data.interviewVideo.videos);
      set({ allVideos: response.data.interviewVideo.videos });
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  },

  fetchUser: async (id) => {
    try {
      const response = await axios.get(
        `/personal-forms/get-personal-form/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("User fetched:", response.data.personalForm);
      set({ user: response.data.personalForm });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
}));

export default useVideoStore;
