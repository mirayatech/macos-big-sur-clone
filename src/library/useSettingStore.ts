import { create } from "zustand";
import { persist } from "zustand/middleware";

type SettingStateType = {
  isSettingOpen: boolean;
  setSettingOpen: (value: boolean) => void;
};

export const useSettingStore = create<SettingStateType>()(
  persist(
    (set) => ({
      isSettingOpen: false,
      setSettingOpen: (val) => set(() => ({ isSettingOpen: val })),
    }),

    {
      name: "setting-storage",
    }
  )
);
