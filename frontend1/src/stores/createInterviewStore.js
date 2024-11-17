import { create } from "zustand";
import Cookie from "js-cookie";
import axios from "axios";

// Zustand store'u oluşturuyoruz
const useInterviewStore = create((set) => ({
  interviews: [], // Başlangıçta boş dizi

  packages: [], // Backend'den paketleri çekeceğiz

  // Backend'den paketleri çekme fonksiyonu
  fetchPackages: async () => {
    try {
      const response = await axios.get(`/packages/get-packages`, {
        withCredentials: true,
      });

      const data = await response.json();
      set({ packages: data });
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  },

  // Yeni interview oluşturma fonksiyonu
  addInterview: async (newInterview) => {
    try {
      const response = await axios.post(`/interviews/create-interview`, {
        withCredentials: true,
        body: JSON.stringify(newInterview),
      });

      const data = await response.json();
      set((state) => ({
        interviews: [...state.interviews, data],
      }));
    } catch (error) {
      console.error("Error creating interview:", error);
    }
  },

  removeInterview: (id) =>
    set((state) => ({
      interviews: state.interviews.filter((i) => i.id !== id),
    })),

  // Seçilen paketleri yönetmek için
  selectedPackages: [],
  setSelectedPackages: (packages) => set({ selectedPackages: packages }),
  togglePackageSelect: (pkgId) =>
    set((state) => {
      const isSelected = state.selectedPackages.includes(pkgId);
      const updatedPackages = isSelected
        ? state.selectedPackages.filter((id) => id !== pkgId)
        : [...state.selectedPackages, pkgId];
      return { selectedPackages: updatedPackages };
    }),
  packages: [],
  togglePreviousPackageSelect: (pkgId) =>
    set((state) => {
      const isSelected = state.packages.includes(pkgId);
      const updatedPackages = isSelected
        ? state.packages.filter((id) => id !== pkgId)
        : [...state.packages, pkgId];
      return { packages: updatedPackages };
    }),

  resetSelectedPackages: () =>
    set(() => ({
      selectedPackages: [],
    })),
}));

export default useInterviewStore;
