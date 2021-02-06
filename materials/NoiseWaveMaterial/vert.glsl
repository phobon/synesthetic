#pragma glslify: noise = require(glsl-noise/simplex/3d);

uniform float time;
uniform float factor;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  float n = noise(position.xyz);
  pos.z = n;
  gl_Position = pos * noise(pos.xyz);
} 