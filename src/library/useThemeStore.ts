import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStateType = {
  themeColor: string;
  setThemeColor: (value: string) => void;
};

export const useThemeStore = create<ThemeStateType>()(
  persist(
    (set) => ({
      themeColor: "Light",
      setThemeColor: (val) => set(() => ({ themeColor: val })),
    }),

    {
      name: "theme-storage",
    }
  )
);
