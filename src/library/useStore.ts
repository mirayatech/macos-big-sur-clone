import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameStateType = {
  systemColorPreference: string;
  setSystemColorPreference: (value: string) => void;
};

export const useStore = create<GameStateType>()(
  persist(
    (set) => ({
      systemColorPreference: "#0a85ff",
      setSystemColorPreference: (val) =>
        set(() => ({ systemColorPreference: val })),
    }),
    {
      name: "mac-storage",
    }
  )
);
