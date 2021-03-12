import React from 'react'
import { Texture } from 'three'
import { a } from '@react-spring/three'

// import { factories } from '../factories'

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
  args = [1000, 1000, 32, 32],
  ...props
}: PlaneProps & any) => (
  <a.mesh {...props}>
    <planeGeometry attach='geometry' args={args} />
    <meshBasicMaterial attach='material' color={color} map={map} />
  </a.mesh>
)

// factories.set('Plane', (id: string, props?: any) => (
//   <Plane id={id} key={id} {...props} />
// ))
