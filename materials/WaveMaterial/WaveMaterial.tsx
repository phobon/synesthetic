import React, { useRef } from 'react'
import { ShaderMaterial, Vector2 } from 'three'
import { extend, useFrame } from 'react-three-fiber'
import mergeRefs from 'react-merge-refs'
import lerp from 'lerp'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

type WaveMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
  time: number
  amplitude: Vector2
  frequency: Vector2
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      waveMaterialImpl: WaveMaterialType
    }
  }
}

class WaveMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uTexture: { value: null },
        uAmplitude: { value: 0.1 },
        uFrequency: { value: new Vector2(5, 10) },
      },
    })
  }

  set map(value) {
    this.uniforms.uTexture.value = value
  }

  get map() {
    return this.uniforms.uTexture.value
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set amplitude(value) {
    this.uniforms.uAmplitude.value = value
  }

  get amplitude() {
    return this.uniforms.uAmplitude.value
  }

  set frequency(value) {
    this.uniforms.uFrequency.value = value
  }

  get frequency() {
    return this.uniforms.uFrequency.value
  }
}

extend({ WaveMaterialImpl })

export const WaveMaterial = React.forwardRef(
  ({ hovered, ...props }: any, ref) => {
    const materialRef = useRef<WaveMaterialType>()
    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.time = clock.getElapsedTime()
      }
    })

    return (
      <waveMaterialImpl
        ref={mergeRefs([ref, materialRef])}
        attach='material'
        {...props}
      />
    )
  }
)
