import React, { useEffect, useRef } from 'react'
import { a } from '@react-spring/three'
import * as THREE from 'three'
import { folder } from 'leva'
import mergeRefs from 'react-merge-refs'

import { AwwwardsMaterial } from '~materials/AwwwardsMaterial'
import { useFrame } from 'react-three-fiber'
import { useLevaStore } from '~store/useLevaStore'

import { useSceneObject } from '~hooks/useSceneObject'

// import { factories } from '../factories'

const BASE_SIZE = 500
const BASE_SEGMENTS = 32

export const AwwwardsPlane = React.forwardRef<any, any>(
  (
    {
      sceneId,
      map,
      timeScale = 2,
      amplitude = 0.3,
      frequency = 3.0,
      coefficient = 0.2,
      color = '#ff0000',
      args = [BASE_SIZE, BASE_SIZE, BASE_SEGMENTS, BASE_SEGMENTS],
      onClick: originalOnClick,
      ...props
    },
    ref
  ) => {
    const meshRef = useRef<any>()

    const { position, dimensions, onClick, ...storeProps } = useSceneObject(
      sceneId,
      args,
      {
        timeScale: {
          value: timeScale,
        },
        amplitude: {
          value: amplitude,
        },
        frequency: {
          value: frequency,
        },
        coefficient: {
          value: coefficient,
        },
        color: {
          value: color,
        },
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
        <planeGeometry args={args} />
        <AwwwardsMaterial map={map} side={THREE.DoubleSide} {...storeProps} />
      </a.mesh>
    )
  }
)

// factories.set('AwwwardsPlane', (id: string, props?: any) => (
//   <AwwwardsPlane id={id} key={id} {...props} />
// ))
