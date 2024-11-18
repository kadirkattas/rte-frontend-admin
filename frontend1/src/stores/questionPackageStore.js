import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const useQuestionPackageStore = create((set, get) => ({
  questionPackages: [],
  packageData: null, // Additional state for storing individual package data

  // Fetch all packages
  fetchPackages: async () => {
    try {
      const response = await axios.get(`/packages/get-packages`, {
        withCredentials: true,
      });
      set({ questionPackages: response.data.questionPackages });
      "Question packages fetched:", response.data.questionPackages;
    } catch (error) {
      console.error("Error fetching question packages:", error);
    }
  },

  fetchPackageData: async (id) => {
    try {
      const response = await axios.get(`/packages/get-package/${id}`, {
        withCredentials: true,
      });
      set({ packageData: response.data.questionPackage });
    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  },

  updatePackage: async (id, packageData) => {
    try {
      await axios.put(`/packages/update-package/${id}`, packageData, {
        withCredentials: true,
      });
      set((state) => ({
        questionPackages: state.questionPackages.map((p) =>
          p.id === id ? { ...p, ...packageData } : p
        ),
      }));
    } catch (error) {
      console.error("Error updating package:", error);
    }
  },

  removePackage: async (id) => {
    try {
      await axios.delete(`/packages/delete-package/${id}`, {
        withCredentials: true,
      });
      // Update the state by removing the deleted package from the questionPackages array
      set((state) => ({
        questionPackages: state.questionPackages.filter((p) => p._id !== id), // Ensure you're using the correct ID (_id or id based on your data structure)
      }));
    } catch (error) {
      // Hata mesajı kontrol ediliyor
      if (error.response && error.response.status === 400) {
        const packageTitles = error.response.data.interviewsUsingPackage.map(
          (interview) => interview.interviewTitle
        );
        "Error deleting package:", packageTitles;
        alert(
          "This package is currently being used in an interview and cannot be deleted.\nPackages:\n" +
            packageTitles.join("\n")
        );
      } else {
        console.error("Error deleting package:", error);
        alert("An error occurred while deleting the package.");
      }
    }
  },
}));

export default useQuestionPackageStore;
