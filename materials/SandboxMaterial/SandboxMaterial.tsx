import React, { useRef } from 'react'
import { ShaderMaterial } from 'three'
import { extend, useFrame } from 'react-three-fiber'
import mergeRefs from 'react-merge-refs'

import vertexShader from './sandbox.vert'
import fragmentShader from './sandbox.frag'

type SandboxMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
  time: number
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      sandboxMaterialImpl: SandboxMaterialType
    }
  }
}

class SandboxMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }
  set time(value) {
    this.uniforms.uTime.value = value
  }
}

extend({ SandboxMaterialImpl })

export const SandboxMaterial = React.forwardRef(({ ...props }: any, ref) => {
  const materialRef = useRef<SandboxMaterialType>()

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.time = clock.getElapsedTime()
    }
  })

  return (
    <sandboxMaterialImpl
      ref={mergeRefs([ref, materialRef])}
      attach='material'
      {...props}
    />
  )
})
