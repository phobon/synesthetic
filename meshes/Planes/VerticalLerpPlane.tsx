import React from 'react'
import { a } from '@react-spring/three'

import { VerticalLerpMaterial } from '~materials/VerticalLerpMaterial'

import { PlaneProps } from './Plane'

// import { factories } from '../factories'

export const VerticalLerpPlane = ({
  color = 'white',
  map,
  args = [1000, 1000, 32, 32],
  viewportHeight,
  offsetFactor,
  pages,
  ...props
}: PlaneProps & any) => {
  return (
    <a.mesh {...props}>
      <planeGeometry attach='geometry' args={args} />
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

// factories.set('VerticalLerpPlane', (id: string, props?: any) => (
//   <VerticalLerpPlane id={id} key={id} {...props} />
// ))
