import React, { useRef } from "react";
import { ShaderMaterial, Color } from "three";
import { extend, useFrame } from "react-three-fiber";
import mergeRefs from "react-merge-refs";
import lerp from "lerp";

import vertexShader from "./shader.vert"

type NoiseWaveMaterialType = JSX.IntrinsicElements["meshStandardMaterial"] & {
  factor: number;
  time: number;
};

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      noiseWaveMaterialImpl: NoiseWaveMaterialType;
    }
  }
}

const fragmentShader = /* glsl */`
  uniform sampler2D tex;
  uniform float hasTexture;
  uniform vec3 color;

  varying vec2 vUv;

  void main() {
    vec4 cga = texture2D(tex, vUv);

    if (hasTexture == 1.0) {
      gl_FragColor = cga;
    }
    else gl_FragColor = vec4(color, 1.0);
  }
`;

class NoiseWaveMaterialImpl extends ShaderMaterial {
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
}

extend({ NoiseWaveMaterialImpl });

export const NoiseWaveMaterial = React.forwardRef(
  ({ hovered, ...props }: any, ref) => {
    const materialRef = useRef<NoiseWaveMaterialType>();
    useFrame(() => {
      materialRef.current.factor = lerp(materialRef.current.factor, hovered ? 1.0 : 0.0, 0.1);
      materialRef.current.time++;
    });

    return (
      <noiseWaveMaterialImpl
        ref={mergeRefs([ref, materialRef])}
        attach="material"
        {...props}
      />
    );
  }
);
