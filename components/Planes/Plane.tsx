import React from "react";
import { Texture } from "three";
import { a } from "react-spring/three";

export interface PlaneProps {
  color?: string;
  map?: Texture;
  scale?: number[];
  rotation?: number[];
  position?: number[];
}

export const Plane: React.FunctionComponent<PlaneProps & any> = ({
  color = "white",
  map,
  args,
  ...props
}) => (
  <a.mesh {...props}>
    <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
    <meshBasicMaterial attach="material" color={color} map={map} />
  </a.mesh>
);
