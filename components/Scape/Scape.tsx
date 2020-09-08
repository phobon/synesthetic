import React, { Suspense, useRef, useEffect, createContext, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Html } from 'drei';
import { Main } from '@/components/Layout';

import { Timeline } from './Timeline';

interface ScapeProps {
  zoom?: number;
  postProcessingEffects?: any[],
  loadingPlaceholder?: React.ReactNode;
}

export const ScapeContext = createContext<ScapeProps>({
  zoom: 0,
});

const canvasStyles = { width: '100%', height: '100%', gridArea: 'canvas' };

export const Scape: React.FunctionComponent<ScapeProps> = ({
  zoom = 1,
  postProcessingEffects,
  loadingPlaceholder,
  children,
  ...props
}) => {
  return (
    <Main
      fullWidth
      fullHeight
      overflow="hidden">
      <Canvas
        orthographic
        camera={{ zoom, position: [0, 0, 500] }}
        colorManagement
        gl={{ alpha: false, antialias: true }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white')
          gl.toneMappingExposure = 2.5
        }}
        style={canvasStyles}
        {...props}>
        <Suspense fallback={<Html>{'Loading...'}</Html>}>
          <ScapeContext.Provider value={{ zoom }}>
            {children}
          </ScapeContext.Provider>
        </Suspense>
        {/* {postProcessingEffects.map()} */}
      </Canvas>
    </Main>
  );
};

Scape.displayName = 'Scape';