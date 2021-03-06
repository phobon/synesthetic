uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 cga = texture2D(uTexture, vUv);
  vec4 final = mix(cga, vec4(0.0), vElevation);

  // gl_FragColor = vec4(vElevation, 0.0, 0.0, 1.0);
  gl_FragColor = cga;
}