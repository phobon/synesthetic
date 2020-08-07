import React, { useRef } from 'react';
import lerp from 'lerp';
import { ShaderMaterial, Color } from "three";
import { extend, useFrame } from "react-three-fiber";
import mergeRefs from 'react-merge-refs'
import glsl from 'glslify';

type SandboxMaterialType = JSX.IntrinsicElements['meshStandardMaterial'] & {
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      sandboxMaterialImpl: SandboxMaterialType;
    }
  }
}

const vertexShader = glsl`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  } 
`;

const fragmentShader = glsl`
  varying vec2 vUv;
  void main() {
    vec3 color = vec3(vUv.x, vUv.y, 0.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;

class SandboxMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: { }
    })
  }
}

extend({ SandboxMaterialImpl })

export const SandboxMaterial = React.forwardRef(({ ...props }: any, ref) => {
  const materialRef = useRef<SandboxMaterialType>();

  useFrame(() => {
  });

  return (
    <sandboxMaterialImpl ref={mergeRefs([ref, materialRef])} attach="material" {...props} />
  );
});