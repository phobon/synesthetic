import { createContext, useContext } from "react";
import { useThree } from "react-three-fiber";

import { ScapeContext } from "@/components/Scape";

export const useBlock = () => {
  const { size, viewport } = useThree();
  const { zoom } = useContext(ScapeContext);

  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;

  const canvasWidth = viewportWidth / zoom;
  const canvasHeight = viewportHeight / zoom;

  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);

  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);

  const aspect = size.height / viewportHeight;

  return {
    size,
    zoom,
    viewport,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    aspect,
  };
};
