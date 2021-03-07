uniform sampler2D uTexture;
uniform float uHasTexture;

uniform vec3 uColor;

varying vec2 vUv;
varying float vElevation;

void main() {
  if (uHasTexture == 1.0) {
    vec4 cga = texture2D(uTexture, vUv);
    vec4 final = mix(cga, vec4(0.0), vElevation);
    gl_FragColor = cga;
  } else {
    gl_FragColor = vec4(uColor, 1.0);
  }
}