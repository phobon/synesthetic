import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
} from "react";
import { Stack } from "@phobon/base";

export const Timeline: React.FunctionComponent<any> = ({ ...props }) => {
  return (
    <Stack
      height="8rem"
      gridArea="timeline"
      borderTop="1px solid"
      borderColor="grayscale.2"
      {...props}
    >
      timeline
    </Stack>
  );
};
