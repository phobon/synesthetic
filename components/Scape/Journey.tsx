import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
  useMemo,
} from 'react'

import { useTextures } from '~hooks/useTextures'

import {
  VerticalLerpPlane,
  SandboxPlane,
  AwwwardsPlane,
} from '~components/Planes'
import { useFrame, useThree } from 'react-three-fiber'
import { useTimelineStore } from '~store/useTimelineStore'
// import { NoisePatchMaterial } from '~materials/NoisePatchMaterial'
// import { WaveMaterial } from '~materials/WaveMaterial'
// import { AwwwardsMaterial } from '~materials/AwwwardsMaterial'

export const Journey = ({ images, args = [1, 1, 32, 32], ...props }: any) => {
  const [img] = useTextures(images)
  const dataRef = useRef<Uint8Array>(useTimelineStore.getState().data)
  // const materialRef = useRef(null)
  const meshRef = useRef<any>(null)
  const isPlaying = useTimelineStore((state) => state.isPlaying)

  const factorRef = useRef<number>(0)

  const { camera } = useThree()

  useEffect(() => {
    camera.lookAt(meshRef.current)

    useTimelineStore.subscribe<Uint8Array>(
      (data) => (dataRef.current = data),
      (state) => state.data
    )
  }, [])

  useFrame(({ clock }) => {
    if (isPlaying && dataRef.current) {
      // console.log(dataRef.current);
      // materialRef.current.angle = dataRef.current[0] / 100
    }

    // meshRef.current.factor = Math.sin(clock.getElapsedTime()) * 0.001
    // console.log(meshRef.current.factor)
  })

  return (
    <Suspense fallback={null}>
      <group>
        <AwwwardsPlane position={[-1.5, 0, 0]} map={img} />
        <SandboxPlane position={[0, 0, 0]} />
        <PlaneWavePlane position={[1.5, 0, 0]} ref={meshRef} map={img} />
      </group>
    </Suspense>
  )
}
