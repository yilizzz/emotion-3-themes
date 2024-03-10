import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "black", // Initial theme
      setToRed: () => set({ theme: "red" }), // Set theme to red
      setToBlue: () => set({ theme: "blue" }), // Set theme to blue
      setToBlack: () => set({ theme: "black" }), // Set theme to black
    }),
    { name: "theme-store" }
  )
);
