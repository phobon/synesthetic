import React, { useEffect, useRef } from 'react'
import { a } from '@react-spring/three'
import * as THREE from 'three'
import { folder } from 'leva'
import mergeRefs from 'react-merge-refs'

import { ClassicNoiseMaterial } from '~materials/ClassicNoiseMaterial'
import { useFrame } from 'react-three-fiber'

import { useSceneObject } from '~hooks/useSceneObject'

const BASE_SIZE = 250
const BASE_SEGMENTS = 256

export const ClassicNoiseSphere = React.forwardRef<any, any>(
  (
    {
      sceneId,
      time,
      speed = 0.2,
      noiseStrength = 0.2,
      frequency = 3.0,
      amplitude = 6.0,
      intensity = 1.0,
      brightness = [0.5, 0.5, 0.5],
      contrast = [0.5, 0.5, 0.5],
      oscilation = [2, 1, 0],
      phase = [0.5, 0.2, 0.25],
      args = [BASE_SIZE, BASE_SEGMENTS, BASE_SEGMENTS],
      onClick: originalOnClick,
      ...props
    },
    ref
  ) => {
    const meshRef = useRef<any>()

    const { position, dimensions, onClick, ...storeProps } = useSceneObject(
      sceneId,
      {
        mesh: folder({
          position: {
            value: [0, 0, 0],
            step: 1,
          },
          dimensions: {
            value: { width: args[0], height: args[1] },
            step: 1,
            min: 0,
          },
        }),
        speed: {
          value: speed,
        },
        noiseStrength: {
          value: noiseStrength,
        },
        frequency: {
          value: frequency,
        },
        amplitude: {
          value: amplitude,
        },
        color: folder({
          intensity: {
            value: intensity,
          },
          brightness: {
            value: brightness,
          },
          contrast: {
            value: contrast,
          },
          oscilation: {
            value: oscilation,
          },
          phase: {
            value: phase,
          },
        }),
      },
      { originalOnClick }
    )

    useEffect(() => {
      if (!meshRef.current) {
        return
      }

      meshRef.current.position.set(...position)
    }, [position])

    useEffect(() => {
      if (!meshRef.current) {
        return
      }

      let { width, height } = dimensions

      meshRef.current.scale.set(width / args[0], height / args[1])
    }, [dimensions])

    useFrame(() => {})

    return (
      <a.mesh
        key={sceneId}
        ref={mergeRefs([ref, meshRef])}
        onClick={onClick}
        {...props}
      >
        <sphereGeometry args={args} />
        <ClassicNoiseMaterial {...storeProps} />
      </a.mesh>
    )
  }
)
