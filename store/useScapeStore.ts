import create, { GetState, SetState } from "zustand";

export type ScapeStore = {
  data?: Uint8Array;
  src?: string;
  setData: (data: Uint8Array) => void;
};

export const useScapeStore = create<ScapeStore>(
  (set: SetState<ScapeStore>, get: GetState<ScapeStore>) => ({
    data: null,
    src: "track.mp3",
    setData: (data: Uint8Array) => set(() => ({ data })),
  })
);
