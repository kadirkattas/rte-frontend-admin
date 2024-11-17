// src/stores/videoStore.js
import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";

const useVideoPageStore = create((set) => ({
  videoUrl: null,
  videoInfo: [],
  personalInfo: [],

  getVideoUrl: async (id) => {
    try {
      const response = await axios.get(
        `/interview-videos/get-video-for-watch/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Video fetched:", response.data.signedUrl);
      set({ videoUrl: response.data.signedUrl }); // Save fetched question to state
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  },
  setVideoInfo: async (id, note, approved, rejected, interviewId) => {
    try {
      const response = await axios.put(
        `/interview-videos/update-video-info/${id}`,
        { note, rejected, approved, interviewId },
        {
          withCredentials: true,
        }
      );
      console.log("Video info saved:", response.data);
    } catch (error) {
      console.error("Error saving video info:", error);
    }
  },
  getVideoInfo: async (id) => {
    try {
      const response = await axios.get(
        `/interview-videos/get-video-info-by-id/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Video info fetched:", response.data.video);
      set({ videoInfo: response.data.video }); // Save fetched video info to state
    } catch (error) {
      console.error("Error fetching video info:", error);
    }
  },
  getPersonalInfo: async (id) => {
    try {
      const response = await axios.get(
        `/personal-forms/get-personal-form/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Personal info fetched:", response.data.personalForm);
      set({ personalInfo: response.data.personalForm }); // Save fetched personal info to state
    } catch (error) {
      console.error("Error fetching personal info:", error);
    }
  },
}));

export default useVideoPageStore;
