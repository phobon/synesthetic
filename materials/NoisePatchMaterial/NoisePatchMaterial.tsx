import React, { useRef } from "react";
import { ShaderMaterial, Color } from "three";
import { extend, useFrame } from "react-three-fiber";
import mergeRefs from "react-merge-refs";
import lerp from "lerp";

import fragmentShader from "./shader.frag";

type NoisePatchMaterialType = JSX.IntrinsicElements["meshStandardMaterial"] & {
  factor: number;
  time: number;
};

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      noisePatchMaterialImpl: NoisePatchMaterialType;
    }
  }
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    mat4 sPos = mat4(
      vec4(2.0,0.0,0.0,0.0),
      vec4(0.0,2.0,0.0,0.0),
      vec4(0.0,0.0,1.0,0.0),
      vec4(0.0,0.0,0.0,1.0)
    );

    gl_Position = projectionMatrix * modelViewMatrix * sPos * vec4(position, 1.0);
  } 
`;

class NoisePatchMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        tex: { value: null },
        hasTexture: { value: 0 },
        color: { value: new Color("#888888") },
        time: { value: 0.0 },
        factor: { value: 0.0 },
        angle: { value: 0.0 },
      },
    });
  }

  set map(value) {
    this.uniforms.hasTexture.value = !!value;
    this.uniforms.tex.value = value;
  }

  get map() {
    return this.uniforms.tex.value;
  }

  get color() {
    return this.uniforms.color.value;
  }

  get factor() {
    return this.uniforms.factor.value;
  }

  set factor(value) {
    this.uniforms.factor.value = value;
  }

  get time() {
    return this.uniforms.time.value;
  }

  set time(value) {
    this.uniforms.time.value = value;
  }

  get angle() {
    return this.uniforms.angle.value;
  }

  set angle(value) {
    this.uniforms.angle.value = value;
  }
}

extend({ NoisePatchMaterialImpl });

export const NoisePatchMaterial = React.forwardRef(
  ({ hovered, ...props }: any, ref) => {
    const materialRef = useRef<NoisePatchMaterialType>();
    useFrame(() => {
      materialRef.current.factor = lerp(
        materialRef.current.factor,
        hovered ? 1.0 : 0.0,
        0.1
      );
      materialRef.current.time++;
    });

    return (
      <noisePatchMaterialImpl
        ref={mergeRefs([ref, materialRef])}
        attach="material"
        {...props}
      />
    );
  }
);
