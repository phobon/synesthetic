#define PI 3.141592653589793238462643383279;

uniform float uTime;
uniform float uSpeed;
uniform float uNoiseStrength;
uniform float uNoiseAmplitude;
uniform float uFrequency;
uniform float uAmplitude;

varying vec2 vUv;
varying vec3 vNormal;
varying float vDistortion;

#pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
#pragma glslify: rotateY = require(glsl-rotate/rotateY)

void main()
{
  float scaledSpeed = uTime * uSpeed;
  float distortion = cnoise3(normal + scaledSpeed) * uNoiseStrength;
  vec3 pos = position + (normal * (distortion * uNoiseAmplitude));

  // Create a sin wave along the y axis scaled by speed, frequency and amplitude
  float angle = sin(uv.y * uFrequency + scaledSpeed) * uAmplitude * sin(scaledSpeed);
  pos = rotateY(pos, angle);

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
  vNormal = normal;
  vDistortion = distortion;
}