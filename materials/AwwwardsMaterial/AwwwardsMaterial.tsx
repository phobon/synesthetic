import React, { useRef } from 'react'
import { ShaderMaterial } from 'three'
import { extend, useFrame } from 'react-three-fiber'
import mergeRefs from 'react-merge-refs'
import lerp from 'lerp'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

type AwwwardsMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
  time: number
  timeScale: number
  amplitude: number
  frequency: number
  coefficient: number
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      awwwardsMaterialImpl: AwwwardsMaterialType
    }
  }
}

class AwwwardsMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uTimeScale: { value: 2.0 },
        uTexture: { value: null },
        uAmplitude: { value: 0.3 },
        uFrequency: { value: 3.0 },
        uCoefficient: { value: 0.2 },
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

  set timeScale(value) {
    this.uniforms.uTimeScale.value = value
  }
  get timeScale() {
    return this.uniforms.uTimeScale.value
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

  set coefficient(value) {
    this.uniforms.uCoefficient.value = value
  }
  get coefficient() {
    return this.uniforms.uCoefficient.value
  }
}

extend({ AwwwardsMaterialImpl })

export const AwwwardsMaterial = React.forwardRef(
  ({ hovered, ...props }: any, ref) => {
    const materialRef = useRef<AwwwardsMaterialType>()
    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.time = clock.getElapsedTime()
      }
    })

    return (
      <awwwardsMaterialImpl
        ref={mergeRefs([ref, materialRef])}
        attach='material'
        {...props}
      />
    )
  }
)
