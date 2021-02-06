import React from 'react'
import { a } from '@react-spring/three'

import { PlaneProps } from './Plane'
import { SandboxMaterial } from '@/materials/SandboxMaterial'

export const SandboxPlane = ({
  color = 'white',
  map,
  args,
  ...props
}: PlaneProps & any) => (
  <a.mesh {...props}>
    <planeBufferGeometry attach='geometry' args={[1, 1, 32, 32]} />
    <SandboxMaterial attach='material' color={color} map={map} />
  </a.mesh>
)
