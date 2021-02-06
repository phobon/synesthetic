import React from 'react'
import { Texture } from 'three'
import { a } from '@react-spring/three'

export interface PlaneProps {
  color?: string
  map?: Texture
  scale?: number[]
  rotation?: number[]
  position?: number[]
}

export const Plane = ({
  color = 'white',
  map,
  args = [1, 1, 32, 32],
  ...props
}: PlaneProps & any) => (
  <a.mesh {...props}>
    <planeGeometry attach='geometry' args={args} />
    <meshBasicMaterial attach='material' color={color} map={map} />
  </a.mesh>
)
