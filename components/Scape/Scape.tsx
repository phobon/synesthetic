import React, { Suspense, useRef, useEffect, createContext, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Html } from 'drei';

interface ScapeProps {
  zoom?: number;
  postProcessingEffects?: any[],
  loadingPlaceholder?: React.ReactNode;
}

export const ScapeContext = createContext<ScapeProps>({
  zoom: 0,
});

export const Scape: React.FunctionComponent<ScapeProps> = ({
  zoom = 1,
  postProcessingEffects,
  loadingPlaceholder,
  children,
  ...props
}) => {
  return (
    <>
      <Canvas
        orthographic
        camera={{ zoom, position: [0, 0, 500] }}
        colorManagement
        gl={{ alpha: false, antialias: true }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white')
          gl.toneMappingExposure = 2.5
        }}
        {...props}>
        <Suspense fallback={<Html>{'Loading...'}</Html>}>
          <ScapeContext.Provider value={{ zoom }}>
            {children}
          </ScapeContext.Provider>
        </Suspense>
        {/* {postProcessingEffects.map()} */}
      </Canvas>
    </>
  );
}