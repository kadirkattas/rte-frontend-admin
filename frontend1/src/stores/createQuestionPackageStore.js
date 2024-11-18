import axios from "axios";
import Cookies from "js-cookie"; // Import Cookies
import { create } from "zustand";

const useCreateQuestionPackageStore = create((set) => ({
  questions: [],
  packageTitle: "",

  setPackageTitle: (title) => set({ packageTitle: title }),

  // Ensure _id is added to each question, not just id
  addQuestion: (question) =>
    set((state) => ({
      questions: [
        ...state.questions,
        { ...question, _id: Date.now().toString() },
      ],
    })),

  removeQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((q) => q._id !== id),
    })),

  resetQuestions: () => set({ questions: [] }),

  // Drag-and-drop sırasında soruları yeniden sıralamak için
  moveQuestion: (dragIndex, hoverIndex) =>
    set((state) => {
      const updatedQuestions = [...state.questions];
      const [removed] = updatedQuestions.splice(dragIndex, 1);
      updatedQuestions.splice(hoverIndex, 0, removed);
      return { questions: updatedQuestions };
    }),

  savePackage: async () => {
    try {
      const { packageTitle, questions } =
        useCreateQuestionPackageStore.getState();

      // Log the data you're sending to the API for debugging
      "Saving package with data:", { packageTitle, questions };

      await axios.post(
        `/packages/create-package`,
        {
          packageTitle,
          questionCount: questions.length,
          questions,
        },
        {
          withCredentials: true,
        }
      );
      set({ packageTitle: "", questions: [] });
      alert("Question package saved successfully!");
    } catch (error) {
      console.error("Error saving question package:", error);
      alert("Failed to save question package!");
    }
  },
}));

export default useCreateQuestionPackageStore;
