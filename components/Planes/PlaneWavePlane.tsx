import React from 'react'
import { a } from '@react-spring/three'

import { PlaneWaveMaterial } from '~materials/PlaneWaveMaterial'

export const PlaneWavePlane = React.forwardRef<any, any>(
  ({ map, args = [1, 1, 32, 32], ...props }, ref) => (
    <a.mesh {...props}>
      <planeGeometry args={args} />
      <PlaneWaveMaterial map={map} ref={ref} />
    </a.mesh>
  )
)
