import React, { useState } from 'react';
import { Stack } from '@phobon/base';

interface StatusProps {
}

export const Status: React.FunctionComponent<StatusProps> = ({ ...props }) => {
  return (
    <Stack
      as="section"
      gridArea="status"
      fullWidth
      height="8rem"
      bg="grayscale.0"
      borderTop="1px solid"
      borderRight="1px solid"
      borderColor="grayscale.2"
      {...props}>
    </Stack>
  );
};