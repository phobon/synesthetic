import React from 'react'
import { a } from '@react-spring/three'

// import { factories } from '../factories'

import { PlaneWaveMaterial } from '~materials/PlaneWaveMaterial'

export const PlaneWavePlane = React.forwardRef<any, any>(
  ({ map, args = [1000, 1000, 32, 32], ...props }, ref) => (
    <a.mesh {...props}>
      <planeGeometry args={args} />
      <PlaneWaveMaterial map={map} ref={ref} />
    </a.mesh>
  )
)

// factories.set('PlaneWavePlane', (id: string, props?: any) => (
//   <PlaneWavePlane id={id} key={id} {...props} />
// ))
