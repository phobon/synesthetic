import create, { GetState, SetState } from "zustand";

export type ScapeStore = {
  scape: number;
  src?: string;
  increment: () => void;
};

export const useScapeStore = create<ScapeStore>(
  (set: SetState<ScapeStore>, get: GetState<ScapeStore>) => ({
    scape: 0,
    src: "track.mp3",
    increment: () => set((state) => ({ scape: state.scape + 1 })),
  })
);
