import React from 'react'
import { a } from '@react-spring/three'

import { SandboxMaterial } from '@/materials/SandboxMaterial'

export const SandboxPlane = React.forwardRef<any, any>(
  ({ color = 'white', map, args = [1, 1, 32, 32], ...props }, ref) => (
    <a.mesh ref={ref} {...props}>
      <planeGeometry attach='geometry' args={args} />
      <SandboxMaterial color={color} map={map} />
    </a.mesh>
  )
)
