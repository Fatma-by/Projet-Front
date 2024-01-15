import { persist } from "zustand/middleware";
import { create } from "zustand";

export const ressourceStore = create(
    persist(
      (set, get) => ({
        data: [],

        setData: (tab) => set((state) => ({ data: tab })),
  
      }),
      {
        name: "Ressources", // name of the item in the storage (must be unique)
      }
    )
  );