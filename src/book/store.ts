import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Climate } from "@/book/plants";
import { starterIds } from "@/book/plants";
import type { WinterClimate } from "@/book/data";

export type Inspection = {
  id: string;
  date: string;
  checks: Record<string, boolean>;
  note: string;
};

export type FieldNote = {
  id: string;
  date: string;
  title: string;
  body: string;
};

export type HarvestDraft = {
  colonies: number;
  deepFrames: number;
  mediumFrames: number;
  winter: WinterClimate;
};

type BookState = {
  inspections: Inspection[];
  notes: FieldNote[];
  planted: string[];
  climate: Climate;
  harvest: HarvestDraft;
  saveInspection: (date: string, checks: Record<string, boolean>, note: string) => void;
  addNote: (title: string, body: string) => void;
  removeNote: (id: string) => void;
  togglePlant: (id: string) => void;
  addStarterBelt: () => void;
  clearPlanted: () => void;
  setClimate: (climate: Climate) => void;
  setHarvest: (patch: Partial<HarvestDraft>) => void;
};

const emptyHarvest: HarvestDraft = {
  colonies: 1,
  deepFrames: 6,
  mediumFrames: 0,
  winter: "temperate",
};

export const useBook = create<BookState>()(
  persist(
    (set) => ({
      inspections: [],
      notes: [],
      planted: [],
      climate: "middle",
      harvest: emptyHarvest,
      saveInspection: (date, checks, note) =>
        set((state) => {
          const existing = state.inspections.find((item) => item.date === date);
          if (!existing) {
            const next: Inspection = {
              id: crypto.randomUUID(),
              date,
              checks,
              note,
            };
            return { inspections: [next, ...state.inspections].slice(0, 60) };
          }
          return {
            inspections: state.inspections.map((item) =>
              item.date === date ? { ...item, checks, note } : item,
            ),
          };
        }),
      addNote: (title, body) =>
        set((state) => ({
          notes: [
            {
              id: crypto.randomUUID(),
              date: new Date().toISOString().slice(0, 10),
              title: title.trim() || "Untitled",
              body: body.trim(),
            },
            ...state.notes,
          ].slice(0, 80),
        })),
      removeNote: (id) =>
        set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
      togglePlant: (id) =>
        set((state) => ({
          planted: state.planted.includes(id)
            ? state.planted.filter((item) => item !== id)
            : [...state.planted, id],
        })),
      addStarterBelt: () =>
        set((state) => ({
          planted: [...new Set([...state.planted, ...starterIds()])],
        })),
      clearPlanted: () => set({ planted: [] }),
      setClimate: (climate) => set({ climate }),
      setHarvest: (patch) =>
        set((state) => ({ harvest: { ...state.harvest, ...patch } })),
    }),
    {
      name: "apiary-field-book",
      skipHydration: true,
    },
  ),
);
