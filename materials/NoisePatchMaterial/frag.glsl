#pragma glslify: noise = require(glsl-noise/simplex/2d);

uniform sampler2D tex;
uniform float time;
uniform float hasTexture;
uniform float factor;
uniform float angle;
uniform vec3 color;

varying vec2 vUv;

void main() {
  vec4 cga = texture2D(tex, vUv);

  float n = noise(vUv.xy * angle);
  float d = 1.0 - distance(vUv, vec2(0.5));
  float x = n * factor;
  cga *= step(x, d);

  if (hasTexture == 1.0) {
    gl_FragColor = cga;
  }
  else gl_FragColor = vec4(color, 1.0);
}