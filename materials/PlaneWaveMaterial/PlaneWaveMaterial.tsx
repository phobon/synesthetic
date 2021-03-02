import React, { useRef } from 'react'
import { ShaderMaterial } from 'three'
import { extend, useFrame } from 'react-three-fiber'
import mergeRefs from 'react-merge-refs'
import lerp from 'lerp'

import vertexShader from './planewave.vert'
import fragmentShader from './planewave.frag'

type PlaneWaveMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
  time: number
  timeScale: number
  amplitude: number
  frequency: number
  distance: number
  factor: number
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      planeWaveMaterialImpl: PlaneWaveMaterialType
    }
  }
}

class PlaneWaveMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uFrequency: { value: 1 },
        uAngle: { value: 1.55 },
        uTexture: { value: null },
        uAmplitude: { value: 0.3 },
        uDistance: { value: 1 },
        uFactor: { value: 1 },
      },
    })
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }
  get time() {
    return this.uniforms.uTime.value
  }

  set frequency(value) {
    this.uniforms.uFrequency.value = value
  }
  get frequency() {
    return this.uniforms.uFrequency.value
  }

  set angle(value) {
    this.uniforms.uAngle.value = value
  }
  get angle() {
    return this.uniforms.uAngle.value
  }

  set map(value) {
    this.uniforms.uTexture.value = value
  }
  get map() {
    return this.uniforms.uTexture.value
  }

  set amplitude(value) {
    this.uniforms.uAmplitude.value = value
  }
  get amplitude() {
    return this.uniforms.uAmplitude.value
  }

  set distance(value) {
    this.uniforms.uDistance.value = value
  }
  get distance() {
    return this.uniforms.uDistance.value
  }

  set factor(value) {
    this.uniforms.uFactor.value = value
  }
  get factor() {
    return this.uniforms.uFactor.value
  }
}

extend({ PlaneWaveMaterialImpl })

export const PlaneWaveMaterial = React.forwardRef(
  ({ hovered, ...props }: any, ref) => {
    const materialRef = useRef<PlaneWaveMaterialType>()
    useFrame(({ clock }) => {
      if (materialRef.current) {
        const elapsedTime = clock.getElapsedTime()
        materialRef.current.time = elapsedTime
        // materialRef.current.factor = Math.sin(elapsedTime)
      }
    })

    return (
      <planeWaveMaterialImpl
        ref={mergeRefs([ref, materialRef])}
        attach='material'
        {...props}
      />
    )
  }
)
