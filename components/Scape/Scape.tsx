import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
} from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { Main } from '@/components/Layout'
import { EffectComposer } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'

interface ScapeProps {
  zoom?: number
  postProcessingEffects?: any[]
  loadingPlaceholder?: React.ReactNode
}

export const Scape = ({
  postProcessingEffects,
  loadingPlaceholder,
  children,
  ...props
}: ScapeProps & any) => {
  return (
    <Canvas
      colorManagement
      camera={{ position: [0.5, -0.5, 1] }}
      gl={{ alpha: false, antialias: true }}
      onCreated={({ gl, events }) => {
        gl.setClearColor('#242b32')
        gl.toneMappingExposure = 2.5
      }}
      {...props}
    >
      {/* <Perf openByDefault trackGPU={true} position={'bottom-right'} /> */}
      <OrbitControls />
      <Suspense fallback={<Html>{'Loading...'}</Html>}>{children}</Suspense>
    </Canvas>
  )
}
