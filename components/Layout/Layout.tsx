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
      gridTemplateColumns="8rem minmax(40rem, 20%) 1fr"
      gridTemplateAreas="'nav inspector main'"
      bg="grayscale.1">
      <Navigation bg="grayscale.1" />
      {children}
    </Grid>
  );
};