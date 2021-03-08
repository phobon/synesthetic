#define PI 3.141592653589793238462643383279;

uniform float uTime;

uniform float uIntensity;

uniform vec3 uBrightness;
uniform vec3 uContrast;
uniform vec3 uOscilation;
uniform vec3 uPhase;

varying vec2 vUv;
varying vec3 vNormal;
varying float vDistortion;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float distortion = vDistortion * uIntensity;

  // These values are my fav combination, 
  // they remind me of Zach Lieberman's work.
  // You can find more combos in the examples from IQ:
  // https://iquilezles.org/www/articles/palettes/palettes.htm
  // Experiment with these!

  // Pass the distortion as input of cospalette
  vec3 color = cosPalette(distortion, uBrightness, uContrast, uOscilation, uPhase);

  gl_FragColor = vec4(color, 1.0);
}