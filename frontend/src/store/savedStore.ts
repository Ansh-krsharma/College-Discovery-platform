import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SavedStore {
  savedCount: number;
  savedIds: string[];

  toggleSaved: (
    id: string
  ) => void;

  isSaved: (
    id: string
  ) => boolean;
}

export const useSavedStore =
  create<SavedStore>()(
    persist(
      (set, get) => ({
        savedIds: [],
        savedCount: 0,

        toggleSaved: (id) => {
          const saved =
            get().savedIds;

          if (
            saved.includes(id)
          ) {
            const updatedSaved = saved.filter(
              (item) =>
                item !== id
            );
            set({
              savedIds: updatedSaved,
              savedCount: updatedSaved.length,
            });
          } else {
            const updatedSaved = [
              ...saved,
              id,
            ];
            set({
              savedIds: updatedSaved,
              savedCount: updatedSaved.length,
            });
          }
        },

        isSaved: (id) =>
          get().savedIds.includes(
            id
          ),
      }),
      {
        name: "saved-colleges",
      }
    )
  );