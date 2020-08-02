import React, { useState } from 'react';
import { Grid } from '@phobon/base';

import { Navigation } from '../Navigation';

interface LayoutProps {
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  return (
    <Grid
      fullWidth
      fullHeight
      gridTemplateRows="1fr"
      gridTemplateColumns="8rem auto 1fr"
      gridTemplateAreas="'nav inspector main'"
      bg="grayscale.9">
      <Navigation bg="purples.9" />
      {children}
    </Grid>
  );
};