import React from 'react';
import { Grid } from '@phobon/base';

import { Navigation } from './Navigation';
import { Inspector } from './Inspector';

interface IPanelProps {}

export const Panel: React.FunctionComponent<IPanelProps & any> = ({ ...props }) => {
  return (
    <Grid
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="1fr"
      gridTemplateAreas="'nav inspector'"
      {...props}>
      <Navigation
        bg="grayscale.1"
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4} />
      <Inspector
        bg="grayscale.0"
        borderTopRightRadius={4}
        borderBottomRightRadius={4} />
    </Grid>
  );
};
