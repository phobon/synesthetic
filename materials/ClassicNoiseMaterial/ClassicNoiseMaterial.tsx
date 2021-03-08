import React, { useRef } from 'react'
import { ShaderMaterial, Color, Vector3 } from 'three'
import { extend, useFrame } from 'react-three-fiber'
import mergeRefs from 'react-merge-refs'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

type ClassicNoiseMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
  time: number
  speed: number
  noiseStrength: number
  noiseAmplitude: number
  frequency: number
  amplitude: number

  intensity: number

  brightness: Vector3
  contrast: Vector3
  oscilation: Vector3
  phase: Vector3

  color: any
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      classicNoiseMaterialImpl: ClassicNoiseMaterialType
    }
  }
}

class ClassicNoiseMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uSpeed: { value: 0.2 },
        uNoiseStrength: { value: 0.2 },
        uNoiseAmplitude: { value: 100.0 },
        uFrequency: { value: 3.0 },
        uAmplitude: { value: 6.0 },

        uIntensity: { value: 1.0 },

        uBrightness: { value: new Vector3(0.5) },
        uContrast: { value: new Vector3(0.5) },
        uOscilation: { value: new Vector3(2, 1, 0) },
        uPhase: { value: new Vector3(0.5, 0.2, 0.25) },
      },
    })
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }
  get time() {
    return this.uniforms.uTime.value
  }

  set speed(value) {
    this.uniforms.uSpeed.value = value
  }
  get speed() {
    return this.uniforms.uSpeed.value
  }

  set noiseStrength(value) {
    this.uniforms.uNoiseStrength.value = value
  }
  get noiseStrength() {
    return this.uniforms.uNoiseStrength.value
  }

  set noiseAmplitude(value) {
    this.uniforms.uNoiseAmplitude.value = value
  }
  get noiseAmplitude() {
    return this.uniforms.uNoiseAmplitude.value
  }

  set frequency(value) {
    this.uniforms.uFrequency.value = value
  }
  get frequency() {
    return this.uniforms.uFrequency.value
  }

  set amplitude(value) {
    this.uniforms.uAmplitude.value = value
  }
  get amplitude() {
    return this.uniforms.uAmplitude.value
  }

  set intensity(value) {
    this.uniforms.uIntensity.value = value
  }
  get intensity() {
    return this.uniforms.uIntensity.value
  }

  set brightness(value) {
    this.uniforms.uBrightness.value = new Vector3(...value)
  }
  get brightness() {
    return this.uniforms.uBrightness.value
  }

  set contrast(value) {
    this.uniforms.uContrast.value = new Vector3(...value)
  }
  get contrast() {
    return this.uniforms.uContrast.value
  }

  set oscilation(value) {
    this.uniforms.uOscilation.value = new Vector3(...value)
  }
  get oscilation() {
    return this.uniforms.uOscilation.value
  }

  set phase(value) {
    this.uniforms.uPhase.value = new Vector3(...value)
  }
  get phase() {
    return this.uniforms.uPhase.value
  }
}

extend({ ClassicNoiseMaterialImpl })

export const ClassicNoiseMaterial = React.forwardRef<
  any,
  ClassicNoiseMaterialType & any
>(({ hovered, ...props }, ref) => {
  const materialRef = useRef<ClassicNoiseMaterialType>()
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.time = clock.getElapsedTime()
    }
  })

  return (
    <classicNoiseMaterialImpl
      ref={mergeRefs([ref, materialRef])}
      attach='material'
      {...props}
    />
  )
})
