import React, { useEffect, useRef } from 'react'
import { a } from '@react-spring/three'
import * as THREE from 'three'
import { useCreateStore, useControls, folder } from 'leva'
import mergeRefs from 'react-merge-refs'

import { AwwwardsMaterial } from '~materials/AwwwardsMaterial'
import { useFrame } from 'react-three-fiber'
import { useLevaStore } from '~store/useLevaStore'

const BASE_SIZE = 500
const BASE_SEGMENTS = 32

export const AwwwardsPlane = React.forwardRef<any, any>(
  (
    {
      sceneId,
      map,
      timeScale,
      amplitude,
      frequency,
      coefficient,
      color,
      args = [BASE_SIZE, BASE_SIZE, BASE_SEGMENTS, BASE_SEGMENTS],
      ...props
    },
    ref
  ) => {
    const meshRef = useRef<any>()
    const store = useCreateStore()
    const setStores = useLevaStore((state) => state.setStores)

    useEffect(() => {
      if (!store) {
        return
      }

      setStores(sceneId, store)
    }, [store])

    const {
      position,
      dimensions,
      timeScale: _timeScale,
      amplitude: _amplitude,
      frequency: _frequency,
      coefficient: _coefficient,
      color: _color,
    } = useControls(
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
      { store }
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
      <a.mesh key={sceneId} ref={mergeRefs([ref, meshRef])} {...props}>
        <planeGeometry args={args} />
        <AwwwardsMaterial
          map={map}
          side={THREE.DoubleSide}
          timeScale={_timeScale}
          amplitude={_amplitude}
          frequency={_frequency}
          coefficient={_coefficient}
          color={_color}
        />
      </a.mesh>
    )
  }
)
