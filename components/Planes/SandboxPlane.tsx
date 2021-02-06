import React from 'react'
import { a } from '@react-spring/three'

import { PlaneProps } from './Plane'
import { SandboxMaterial } from '@/materials/SandboxMaterial'

export const SandboxPlane = ({
  color = 'white',
  map,
  args = [1, 1, 32, 32],
  ...props
}: PlaneProps & any) => (
  <a.mesh {...props}>
    <planeGeometry attach='geometry' args={args} />
    <SandboxMaterial attach='material' color={color} map={map} />
  </a.mesh>
)
