import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameStateType = {
  systemColorPreference: string;
  setSystemColorPreference: (value: string) => void;

  isSettingOpen: boolean;
  setSettingOpen: (value: boolean) => void;

  wallpaper: string;
  setWallpaper: (value: string) => void;

  themeColor: string;
  setThemeColor: (value: string) => void;
};

export const useStore = create<GameStateType>()(
  persist(
    (set) => ({
      systemColorPreference: "#0a85ff",
      isSettingOpen: false,
      wallpaper: "/wallpaper/bigsur-light.jpg",
      themeColor: "Light",
      setSystemColorPreference: (val) =>
        set(() => ({ systemColorPreference: val })),
      setSettingOpen: (val) => set(() => ({ isSettingOpen: val })),
      setWallpaper: (val) => set(() => ({ wallpaper: val })),
      setThemeColor: (val) => set(() => ({ themeColor: val })),
    }),

    {
      name: "mac-storage",
    }
  )
);
