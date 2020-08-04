import React, { Suspense, useRef, useEffect, createContext, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { HTML } from 'drei';

export const Scape: React.FunctionComponent<any> = ({
  zoom = 1,
  children,
}) => {
  const [events, setEvents] = useState(null);
  const domContent = useRef()

  return (
    <>
      <Canvas
        orthographic
        camera={{ zoom, position: [0, 0, 500] }}
        colorManagement
        gl={{ alpha: false, antialias: true }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white'),
          gl.toneMappingExposure = 2.5,
          gl.toneMappingWhitePoint = 1,
          // Export canvas events, we will put them onto the scroll area
          setEvents(events)
        }}>
        <Suspense fallback={<HTML portal={domContent}>{'Loading...'}</HTML>}>
          {children}
        </Suspense>
      </Canvas>
    </>
  );
}