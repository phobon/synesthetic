import React, { useRef } from "react";
import lerp from "lerp";
import { ShaderMaterial, Color } from "three";
import { extend, useFrame } from "react-three-fiber";
import mergeRefs from "react-merge-refs";
import glsl from "glslify";

type VerticalLerpMaterialType = JSX.IntrinsicElements["meshStandardMaterial"] & {
  scale?: number;
  shift?: number;
};

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      verticalLerpMaterialImpl: VerticalLerpMaterialType;
    }
  }
}

const vertexShader = glsl`
  #define PI 3.1415926535897932384626433832795

  uniform float scale;
  uniform float shift;
  varying vec2 vUv;

  void main() {
    vec3 pos = position;

    // Shift each position along the x axis along a sin curve
    // So as uv.y (normalised position from 0.0 - 1.0 increases
    // It will shift its furthest away at uv.y === 0.5 - maths - neat!
    pos.x = pos.x + ((sin(uv.y * PI) * shift * 1.0) * 0.125);

    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
  }
`;

const fragmentShader = glsl`
  uniform sampler2D tex;

  uniform float hasTexture;
  uniform float shift;
  uniform float scale;

  uniform vec3 color;
  uniform float opacity;

  varying vec2 vUv;

  void main() {
    float angle = 1.55;

    // Normalise coordinate space to the centre, scale the position, then return coordinate space
    vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);

    // Determine distance of offset along given vector angle
    vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));

    // Create 3 texture buffers, each at a different offset (essentially the normal and 2 copies)
    vec4 cr = texture2D(tex, p + offset);
    vec4 cga = texture2D(tex, p);
    vec4 cb = texture2D(tex, p - offset);

    if (hasTexture == 1.0) {
      // Shift colours based on copy coordinates
      // gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
      gl_FragColor = cga;
    }
    else gl_FragColor = vec4(color, opacity);
  }
`;

class VerticalLerpMaterialImpl extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        tex: { value: null },
        hasTexture: { value: 0 },
        scale: { value: 0 },
        shift: { value: 0 },
        opacity: { value: 1 },
        color: { value: new Color("orange") },
      },
    });
  }

  set scale(value) {
    this.uniforms.scale.value = value;
  }

  get scale() {
    return this.uniforms.scale.value;
  }

  set shift(value) {
    this.uniforms.shift.value = value;
  }

  get shift() {
    return this.uniforms.shift.value;
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

  get opacity() {
    return this.uniforms.opacity.value;
  }

  set opacity(value) {
    if (this.uniforms) this.uniforms.opacity.value = value;
  }
}

extend({ VerticalLerpMaterialImpl });

export const VerticalLerpMaterial = React.forwardRef(
  ({ offsetFactor, pages, viewportHeight, top, ...props }: any, ref) => {
    const materialRef = useRef<VerticalLerpMaterialType>();
    let last = top.current;

    useFrame(() => {
      materialRef.current.scale = 0; // lerp(materialRef.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1);
      materialRef.current.shift = 0; // lerp(materialRef.current.shift, (top.current - last) / 150, 0.1);
      last = top.current;
    });

    return (
      <verticalLerpMaterialImpl
        ref={mergeRefs([ref, materialRef])}
        attach="material"
        {...props}
      />
    );
  }
);
