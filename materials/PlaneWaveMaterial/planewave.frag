uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  vec4 cga = texture2D(uTexture, vUv);
  gl_FragColor = cga;
}