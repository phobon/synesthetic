uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 cga = texture2D(uTexture, vUv);
  vec4 final = mix(cga, vec4(0.0), 0.5 - vElevation);

  gl_FragColor = vec4(final);
}