import React, { Suspense, useRef, useEffect, createContext, useState } from 'react';
import { Stack } from '@phobon/base';

export const Timeline: React.FunctionComponent<any> = ({ ...props }) => {
  return (
    <Stack
      height="8rem"
      gridArea="timeline"
      {...props}>
      timeline
    </Stack>
  );
}