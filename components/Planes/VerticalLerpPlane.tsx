import React from 'react'
import { a } from '@react-spring/three'

import { VerticalLerpMaterial } from '@/materials/VerticalLerpMaterial'

import { PlaneProps } from './Plane'

export const VerticalLerpPlane = ({
  color = 'white',
  map,
  args,
  viewportHeight,
  offsetFactor,
  pages,
  ...props
}: PlaneProps & any) => {
  return (
    <a.mesh {...props}>
      <planeBufferGeometry attach='geometry' args={[1, 1, 32, 32]} />
      <VerticalLerpMaterial
        top={top}
        viewportHeight={viewportHeight}
        offsetFactor={offsetFactor}
        pages={pages}
        color={color}
        map={map}
      />
    </a.mesh>
  )
}
