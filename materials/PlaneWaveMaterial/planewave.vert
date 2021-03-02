#define GLSLIFY 1
#define PI 3.14159265359

uniform float uTime;
uniform float uFrequency;

uniform float uAngle;
uniform float uFactor;
uniform float uAmplitude;
uniform float uDistance;

varying vec2 vUv;

vec2 strength(float time, vec2 uv, vec2 offset, float cosTime) {
  float strengthX = sin(time) * sin(uv.y * offset.y * PI) * -uAmplitude + cosTime;
  float strengthY = sin(time) * sin(uv.x * offset.y * PI) * -uAmplitude + cosTime;

  return vec2(strengthX, strengthY);
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // Calculate angle offset and amplitude (measured in radians)
  vec2 offset = uDistance * vec2(cos(uAngle), sin(uAngle));

  // Time coefficient
  float scaledTime = uTime * uFrequency;
  float cosTime = cos(scaledTime) * uFrequency;

  // Calculate strength in both directions
  vec2 s = strength(uTime * uFactor, uv, offset, cosTime);

  // Apply
  modelPosition.x += offset.x * s.x * cosTime;
  modelPosition.y += offset.y * s.y * cosTime;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
}