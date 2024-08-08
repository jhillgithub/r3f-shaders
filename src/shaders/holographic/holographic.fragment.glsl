varying vec3 vPosition;
varying vec3 vNormal;
uniform float uTime;
uniform vec3 uColor;

void main() {
  vec3 color = vec3(vNormal);
  float stripes = mod((vPosition.y - uTime * 0.02) * 20.0, 1.0);
  stripes = pow(stripes, 3.0);

  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  if(!gl_FrontFacing){
    normal *= - 1.0;
  }
  float fresnel = dot(viewDirection, normal) + 1.0;
  fresnel = pow(fresnel, 2.0);
  // color = vec3(fresnel);

  float holographic = stripes * fresnel;
  holographic += fresnel * 1.25;
  float falloff = smoothstep(0.8, 0.0, fresnel);
  holographic *= falloff;


  gl_FragColor = vec4(uColor, holographic);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}