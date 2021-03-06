import React from 'react'
import { a } from '@react-spring/three'
import * as THREE from 'three'

import { AwwwardsMaterial } from '~materials/AwwwardsMaterial'

export const AwwwardsPlane = React.forwardRef<any, any>(
  (
    {
      map,
      timeScale,
      amplitude,
      frequency,
      coefficient,
      args = [1000, 1000, 32, 32],
      ...props
    },
    ref
  ) => (
    <a.mesh ref={ref} {...props}>
      <planeGeometry args={args} />
      <AwwwardsMaterial
        map={map}
        side={THREE.DoubleSide}
        timeScale={timeScale}
        amplitude={amplitude}
        frequency={frequency}
        coefficient={coefficient}
      />
    </a.mesh>
  )
)
