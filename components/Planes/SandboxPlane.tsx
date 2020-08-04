import React from 'react';
import { a } from 'react-spring/three';

import { PlaneProps } from './Plane';
import { SandboxMaterial } from '@/materials/SandboxMaterial';

export const SandboxPlane: React.FunctionComponent<PlaneProps & any> = ({
  color = "white",
  map,
  args,
  ...props
}) => (
  <a.mesh {...props}>
    <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
    <SandboxMaterial attach="material" color={color} map={map} />
  </a.mesh>
);
