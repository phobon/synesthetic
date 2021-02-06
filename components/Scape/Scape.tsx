import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
} from 'react'
import { Canvas } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import { Main } from '@/components/Layout'

interface ScapeProps {
  zoom?: number
  postProcessingEffects?: any[]
  loadingPlaceholder?: React.ReactNode
}

export const ScapeContext = createContext<ScapeProps>({
  zoom: 0,
})

const canvasStyles = { width: '100%', height: '100%', gridArea: 'canvas' }

export const Scape = ({
  zoom = 1,
  postProcessingEffects,
  loadingPlaceholder,
  children,
  ...props
}: ScapeProps) => {
  return (
    <Canvas
      orthographic
      camera={{ zoom, position: [0, 0, 500] }}
      colorManagement
      gl={{ alpha: false, antialias: true }}
      onCreated={({ gl, events }) => {
        gl.setClearColor('#242b32')
        gl.toneMappingExposure = 2.5
      }}
      style={canvasStyles}
      {...props}
    >
      <Suspense fallback={<Html>{'Loading...'}</Html>}>
        <ScapeContext.Provider value={{ zoom }}>
          {children}
        </ScapeContext.Provider>
      </Suspense>
      {/* {postProcessingEffects.map()} */}
    </Canvas>
  )
}
