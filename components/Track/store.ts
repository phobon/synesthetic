export type TrackState = {
  ref: React.MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
};

export type TrackActionType =
  | "CHANGE_TRACK"
  | "TOGGLE_ISPLAYING"
  | "PLAY_TRACK"
  | "PAUSE_TRACK";

export const CHANGE_TRACK = "CHANGE_TRACK";
export const TOGGLE_ISPLAYING = "TOGGLE_ISPLAYING";
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

export type TrackAction = {
  type: TrackActionType;
  payload?: any;
};

export const reducer = (state: TrackState, action: TrackAction): TrackState => {
  const { ref, isPlaying } = state;
  switch (action.type) {
    case TOGGLE_ISPLAYING:
      if (isPlaying) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
      return { ref, isPlaying: !state.isPlaying };
    case PLAY_TRACK:
      ref.current.play();
      return { ref, isPlaying: true };
    case PAUSE_TRACK:
      ref.current.pause();
      return { ref, isPlaying: false };
    default:
      return state;
  }
};
