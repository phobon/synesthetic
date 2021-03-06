#define PI 3.14159265359

uniform float uTime;
uniform float uTimeScale;

uniform float uAmplitude;
uniform float uFrequency;
uniform float uCoefficient;

varying vec2 vUv;
varying float vElevation;

#pragma glslify: cnoise2 = require(glsl-noise/classic/2d) 

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float scaledTime = uTime * uTimeScale;

  float coefficient = PI * mod(uTime, 360.0) * uCoefficient;
  float elevation = cnoise2(uv * uFrequency - coefficient) * uAmplitude;

  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
  vElevation = elevation;
}