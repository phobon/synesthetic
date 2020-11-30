/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Box, Grid, GridProps } from "@phobon/base";

import { Inspector } from "@/components/Inspector";
import { Status } from "@/components/Status";
import { Timeline } from "@/components/Timeline";

import { useScapeStore } from "@/store";

export const Layout: React.FunctionComponent<
  GridProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  const src = useScapeStore((state) => state.src);

  return (
    <Box
      fullWidth
      fullHeight
      position="relative"
      bg="transparent"
      css={{
        pointerEvents: "none",
      }}
    >
      {children}
      <Grid
        as="section"
        fullWidth
        fullHeight
        position="absolute"
        gridTemplateRows="8rem 1fr 8rem"
        gridTemplateColumns="minmax(45rem, 20%) 1fr auto"
        gridTemplateAreas="'inspector . status'
                           'inspector . .'
                           'timeline timeline timeline'"
        gridGap={5}
        css={{
          left: 0,
          top: 0,
        }}
        {...props}
      >
        <Inspector pl={5} pt={5} />
        <Status pt={5} pr={5} />
        <Timeline fullWidth src={src} />
      </Grid>
    </Box>
  );
};
