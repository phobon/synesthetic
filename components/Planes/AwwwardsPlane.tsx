import React from 'react'
import { a } from '@react-spring/three'

import { AwwwardsMaterial } from '@/materials/AwwwardsMaterial'

export const AwwwardsPlane = React.forwardRef<any, any>(
  ({ map, args = [1, 1, 32, 32], ...props }, ref) => (
    <a.mesh ref={ref} {...props}>
      <planeGeometry args={args} />
      <AwwwardsMaterial map={map} />
    </a.mesh>
  )
)
