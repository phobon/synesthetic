import React from 'react'
import { a } from '@react-spring/three'

import { PlaneProps } from './Plane'
import { SandboxMaterial } from '~materials/SandboxMaterial'

// import { factories } from '../factories'

export const SandboxPlane = React.forwardRef<any, any>(
  ({ color = 'white', map, args = [1000, 1000, 32, 32], ...props }, ref) => (
    <a.mesh ref={ref} {...props}>
      <planeGeometry attach='geometry' args={args} />
      <SandboxMaterial color={color} map={map} />
    </a.mesh>
  )
)

// factories.set('SandboxPlane', (id: string, props?: any) => (
//   <SandboxPlane id={id} key={id} {...props} />
// ))
