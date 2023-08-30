import { create } from "zustand";
import { persist } from "zustand/middleware";

type SelectionToggleStateType = {
  systemColorPreference: string;
  setSystemColorPreference: (value: string) => void;
};

export const useSelectionStore = create<SelectionToggleStateType>()(
  persist(
    (set) => ({
      systemColorPreference: "#0a85ff",
      setSystemColorPreference: (val) =>
        set(() => ({ systemColorPreference: val })),
    }),

    {
      name: "selection-storage",
    }
  )
);
