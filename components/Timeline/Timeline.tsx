/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Box, BoxProps, Grid } from "@phobon/base";
import { Button } from "@phobon/grimoire";

import { useTimelineStore, TOGGLE_ISPLAYING } from "@/store/useTimelineStore";

import { Pause, Play } from "@/components/Icons";

import { TimelineController } from "./TimelineController";

export interface ITimelineProps {
  src?: string;
  options?: AnalyserOptions;
}

export type TimelineProps = ITimelineProps &
  BoxProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Timeline: React.FunctionComponent<TimelineProps> = ({
  src,
  options = { fftSize: 2048, smoothingTimeConstant: 0.9 },
  ...props
}) => {
  const dispatch = useTimelineStore((state) => state.dispatch);
  const isPlaying = useTimelineStore((state) => state.isPlaying);

  return (
    <React.Fragment>
      <Box height="8rem" gridArea="timeline" {...props}>
        <Grid
          fullHeight
          width={4 / 5}
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

      <TimelineController src={src} options={options} />
    </React.Fragment>
  );
};
