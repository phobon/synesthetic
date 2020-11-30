import create, { GetState, SetState } from "zustand";

export type TimelineAction = {
  type: TimelineActionType;
  payload?: any;
};

export interface TrackMetadata {
  bpm?: number;
  duration?: number;
}

export type TimelineStore = {
  src?: string;
  data?: Uint8Array;
  isPlaying?: boolean;
  metaData?: TrackMetadata;

  dispatch: (args: TimelineAction) => void;

  setData: (data: Uint8Array) => void;
  setMetaData: (metaData: TrackMetadata) => void;
};

export const useTimelineStore = create<TimelineStore>(
  (set: SetState<TimelineStore>, get: GetState<TimelineStore>) => ({
    src: "track.mp3",
    isPlaying: false,
    dispatch: (args: TimelineAction) => set((state) => reducer(state, args)),
    setData: (data: Uint8Array) => set(() => ({ data })),
    setMetaData: (metaData: TrackMetadata) => set(() => ({ metaData })),
  })
);

export type TimelineActionType =
  | "CHANGE_TRACK"
  | "TOGGLE_ISPLAYING"
  | "PLAY_TRACK"
  | "PAUSE_TRACK";

export const CHANGE_TRACK = "CHANGE_TRACK";
export const TOGGLE_ISPLAYING = "TOGGLE_ISPLAYING";
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

const reducer = (
  state: TimelineStore,
  action: TimelineAction
): TimelineStore => {
  switch (action.type) {
    case TOGGLE_ISPLAYING:
      return { ...state, isPlaying: !state.isPlaying };
    case PLAY_TRACK:
      return { ...state, isPlaying: true };
    case PAUSE_TRACK:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};
