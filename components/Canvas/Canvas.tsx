import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
} from 'react'
import {
  Canvas as ThreeCanvas,
  useThree,
  ContainerProps,
} from 'react-three-fiber'
import { PerspectiveCamera, OrbitControls, Preload } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'

export type CanvasProps = {
  zoom?: number
  postProcessingEffects?: any[]
  loadingPlaceholder?: React.ReactNode
  children?: React.ReactNode
} & React.NamedExoticComponent<ContainerProps>

const INITIAL_CAMERA_POSITION = 600

export const Canvas = ({
  postProcessingEffects,
  loadingPlaceholder,
  children,
  ...props
}: CanvasProps) => {
  const canvasRef = useRef<any>()
  const [bounds, setBounds] = useState<{ width; height; aspect }>(() => ({
    width: 800,
    height: 600,
    aspect: 800 / 600,
  }))
  useEffect(() => {
    const calculateBounds = () => {
      const canvas = document.getElementById('__canvas')
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      setBounds({ width, height, aspect: width / height })
    }
    window.addEventListener('resize', calculateBounds)

    calculateBounds()

    return () => {
      window.removeEventListener('resize', calculateBounds)
    }
  }, [])

  const { height, aspect } = bounds

  return (
    <ThreeCanvas
      id='__canvas'
      colorManagement
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl, events }) => {
        gl.setClearColor('#0d1114')
        gl.toneMappingExposure = 2.5
      }}
      {...props}
    >
      <Preload all />
      <PerspectiveCamera
        makeDefault
        position={[0, 0, INITIAL_CAMERA_POSITION]}
        fov={
          2 * Math.atan(height / 2 / INITIAL_CAMERA_POSITION) * (180 / Math.PI)
        }
        aspect={aspect}
        near={100}
        far={2000}
      />
      {/* <Perf openByDefault trackGPU={true} position={'bottom-right'} /> */}
      <OrbitControls />
      <Suspense fallback={null}>{children}</Suspense>
    </ThreeCanvas>
  )
}
