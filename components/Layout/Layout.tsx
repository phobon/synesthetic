import React, { useState } from 'react';
import { Grid } from '@phobon/base';
import { Panel } from './Panel';

interface LayoutProps {
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  return (
    <>
      {children}
      <Grid
        fullWidth
        fullHeight
        position="absolute"
        left={0}
        top={0}
        p={5}
        zIndex={1}
        gridTemplateRows="1fr"
        gridTemplateColumns="minmax(45rem, 20%) 1fr"
        gridTemplateAreas="'panel'">
        <Panel fullHeight fullWidth gridArea="panel" />
      </Grid>
    </>
  );
};