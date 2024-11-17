import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

// Zustand store'u oluşturuyoruz
const useInterviewListStore = create((set) => ({
  interviews: [], // Başlangıçta boş bir dizi
  questions: [],
  interview: [],

  setInterviewPackageTitles: (packageTitles) =>
    set((state) => ({
      interview: {
        ...state.interview, // Mevcut interview nesnesinin tamamını al
        packageTitles, // Sadece packageTitles'ı güncelle
      },
    })),

  fetchInterviews: async () => {
    try {
      const response = await axios.get(`/interviews/get-interviews`, {
        withCredentials: true,
      });
      console.log("Interviews fetched:", response.data.interviews);
      set({ interviews: response.data.interviews }); // Verileri state'e kaydediyoruz
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  },
  fetchInterviewQuestions: async (id) => {
    try {
      const response = await axios.get(
        `/interviews/get-interview-questions/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Interview questions fetched:", response.data);
      set({ questions: response.data.questions }); // Verileri state'e kaydediyoruz
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  },
  deleteInterview: async (id) => {
    try {
      const response = await axios.delete(
        `/interviews/delete-interview/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("Interview deleted:", response.data);
      set((state) => ({
        interviews: state.interviews.filter((p) => p._id !== id), // Ensure you're using the correct ID (_id or id based on your data structure)
      }));
    } catch (error) {
      console.error("Error deleting interview:", error);
    }
  },
  createInterview: async (newInterview) => {
    try {
      const response = await axios.post(
        `/interviews/create-interview`,
        newInterview,
        {
          withCredentials: true,
        }
      );
      console.log("Interview created:", response.data);
      set((state) => ({
        interviews: [response.data.interview, ...state.interviews], // Add to the front of the array
      }));
    } catch (error) {
      console.error("Error creating interview:", error);
    }
  },

  getInterviewdetails: async (id) => {
    try {
      const response = await axios.get(
        `/interviews/get-interview-details/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("OMG: ", response.data.interview);
      set({ interview: response.data.interview }); // Verileri state'e kaydediyoruz
    } catch (error) {
      console.error("Error fetching interview:", error);
      throw error;
    }
  },

  editInterview: async (id, updatedInterview) => {
    try {
      // JWT token'ı al
      const response = await axios.put(
        `/interviews/edit-interview/${id}`,
        updatedInterview,
        {
          withCredentials: true, // Yetkilendirme header'ı ekle
        }
      );
      console.log("Interview updated:", response.data);

      set((state) => ({
        interviews: [
          ...state.interviews.filter((interview) => interview._id !== id), // Filter out the old interview
        ],
      }));
      set((state) => ({
        interviews: [response.data.interview, ...state.interviews], // Add to the front of the array
      }));
      return response.data.interview; // Güncellenen veriyi geri döndür
    } catch (error) {
      console.error("Error editing interview:", error);
      throw error;
    }
  },
}));

export default useInterviewListStore;
