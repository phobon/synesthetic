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
      gridTemplateRows="1fr 8rem"
      gridTemplateColumns="8rem minmax(40rem, 20%) 1fr"
      gridTemplateAreas="'nav inspector main'
                         'nav status main'"
      bg="grayscale.0">
      <Navigation bg="grayscale.0" />
      {children}
    </Grid>
  );
};