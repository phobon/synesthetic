/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, BoxProps, Grid } from "@phobon/base";
import { Button } from "@phobon/grimoire";
import { useTheme } from "@emotion/react";

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
  const [
    dispatch,
    isPlaying,
    metaData,
    setSeekTime,
  ] = useTimelineStore((state) => [
    state.dispatch,
    state.isPlaying,
    state.metaData,
    state.setSeekTime,
  ]);

  const manipulatingRef = useRef<boolean>();
  const seekRef = useRef<number>();
  const trackRef = useRef<HTMLDivElement>();
  const handleRef = useRef<HTMLDivElement>();
  const theme = useTheme();

  useEffect(() => {
    if (!metaData) {
      return;
    }

    useTimelineStore.subscribe<number>(
      (currentTime) =>
        requestAnimationFrame(() => {
          const percentage = (currentTime / metaData.duration) * 100;
          trackRef.current.style.setProperty(
            "--trackPercentage",
            `${-100 + percentage}%`
          );

          if (!manipulatingRef.current) {
            handleRef.current.style.setProperty("left", `${percentage}%`);
          }
        }),
      (state) => state.currentTime
    );

    return () => {
      useTimelineStore.destroy();
    };
  }, [metaData]);

  useEffect(() => {
    if (!metaData) {
      return;
    }
    const mouseDownHandler = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      manipulatingRef.current = true;
    };

    const mouseUpHandler = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      manipulatingRef.current = undefined;

      if (seekRef.current) {
        const seekTime = metaData.duration * seekRef.current;
        console.log(seekTime);
        setSeekTime(seekTime);
      }

      seekRef.current = undefined;
    };

    const mouseLeaveHandler = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      // If the button isn't held down, then stop stuff
      if (manipulatingRef.current && event.buttons === 0) {
        manipulatingRef.current = undefined;
      }
    };

    const mouseMoveHandler = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (!manipulatingRef.current) {
        return;
      }

      const { left, width } = trackRef.current.getBoundingClientRect();

      const percentage = (event.clientX - left) / width;
      handleRef.current.style.setProperty("left", `${percentage * 100}%`);
      seekRef.current = percentage;
    };

    trackRef.current.addEventListener("mousedown", mouseDownHandler);
    trackRef.current.addEventListener("mouseup", mouseUpHandler);
    trackRef.current.addEventListener("mousemove", mouseMoveHandler);
    trackRef.current.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      trackRef.current.removeEventListener("mousedown", mouseDownHandler);
      trackRef.current.removeEventListener("mouseup", mouseUpHandler);
      trackRef.current.removeEventListener("mousemove", mouseMoveHandler);
      trackRef.current.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, [metaData]);

  return (
    <React.Fragment>
      <Box height="8rem" gridArea="timeline" {...props}>
        <Grid
          fullHeight
          width={4 / 5}
          gridTemplateRows="1fr"
          gridTemplateColumns="1fr auto"
          gridGap={3}
          css={{
            placeItems: "center",
            pointerEvents: "all",
          }}
        >
          <motion.section
            ref={trackRef}
            initial="initial"
            whileHover="hover"
            variants={{
              initial: null,
              hover: null,
            }}
            css={{
              width: "100%",
              height: 16,
              position: "relative",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <motion.div
              variants={{
                initial: {
                  height: 2,
                },
                hover: {
                  height: 6,
                },
              }}
              css={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                background: "hsla(0, 0%, 100%, 0.2)",
                "&::after": {
                  content: "''",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  backgroundColor: theme.colors.reds[8],
                  width: "100%",
                  transform: "translateX(var(--trackPercentage))",
                  borderRadius: "inherit",
                },
              }}
            ></motion.div>
            <motion.div
              ref={handleRef}
              css={{
                position: "absolute",
                top: "50%",
                height: 8,
                width: 8,
                borderRadius: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "orange",
                zIndex: 1,
              }}
            ></motion.div>
          </motion.section>

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
