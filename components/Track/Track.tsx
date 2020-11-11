/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
  useReducer,
} from "react";
import { Box, BoxProps, Grid } from "@phobon/base";
import { Button } from "@phobon/grimoire";

import { useScapeStore } from "@/store";
import { reducer, PAUSE_TRACK, PLAY_TRACK, TOGGLE_ISPLAYING } from "./store";

import { Pause, Play, Stop } from "@/components/Icons";

export interface ITrackProps {
  src?: string;
}

export type TrackProps = ITrackProps &
  BoxProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Track: React.FunctionComponent<TrackProps> = ({
  src,
  ...props
}) => {
  const audioRef = useRef<HTMLAudioElement>();
  const [{ isPlaying }, dispatch] = useReducer(reducer, {
    ref: audioRef,
    isPlaying: true,
  });

  // useEffect(
  //   () =>
  //     useScapeStore.subscribe<number>(
  //       (scape) => (textRef.current.innerText = scape.toString()),
  //       (state) => state.scape
  //     ),
  //   []
  // );

  const onLoadedMetadata = (e) => {
    console.log("metadata:", e);
    // e.timeStamp
  };

  const onTimeUpdate = (e) => {
    console.log("timeupdate:", e);
  };

  return (
    <React.Fragment>
      <Box height="8rem" gridArea="track" {...props}>
        <Grid
          fullHeight
          width={4 / 5}
          bg="background"
          gridTemplateRows="1fr"
          gridTemplateColumns="1fr auto"
          css={{
            placeItems: "center",
            pointerEvents: "all",
          }}
        >
          <div></div>
          <Button
            shape="square"
            size="s"
            onClick={() => dispatch({ type: TOGGLE_ISPLAYING })}
          >
            {isPlaying && <Pause fill="inherit" />}
            {!isPlaying && <Play fill="inherit" />}
          </Button>
        </Grid>
      </Box>

      <audio
        css={{
          opacity: 0,
          position: "absolute",
          left: -99999,
          height: 1,
          width: 1,
        }}
        src={src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
      ></audio>
    </React.Fragment>
  );
};
