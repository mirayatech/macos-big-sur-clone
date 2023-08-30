import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameStateType = {
  wallpaper: string;
  setWallpaper: (value: string) => void;
};

export const useWallpaper = create<GameStateType>()(
  persist(
    (set) => ({
      wallpaper: "/wallpaper/mojave.jpeg",
      setWallpaper: (val) => set(() => ({ wallpaper: val })),
    }),

    {
      name: "wallpaper-storage",
    }
  )
);
