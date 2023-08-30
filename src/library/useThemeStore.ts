import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameStateType = {
  themeColor: string;
  setThemeColor: (value: string) => void;
};

export const useThemeStore = create<GameStateType>()(
  persist(
    (set) => ({
      themeColor: "Light",
      setThemeColor: (val) => set(() => ({ themeColor: val })),
    }),

    {
      name: "mac-storage",
    }
  )
);
