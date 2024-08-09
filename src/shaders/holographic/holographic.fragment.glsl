varying vec3 vPosition;
varying vec3 vNormal;
uniform float uTime;

uniform vec3 uColor;

uniform float stripesMovementSpeed;
uniform float numberOfStripes;
uniform float stripesPow;

uniform float fresnelPower;
uniform float fresnelEffectMultiplier;
uniform float falloffStart;
uniform float falloffEnd;

void main() {
  vec3 color = vec3(vNormal);
  float stripes = mod((vPosition.y - uTime *stripesMovementSpeed) * numberOfStripes, 1.0);
  stripes = pow(stripes, stripesPow);

  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  if(!gl_FrontFacing){
    normal *= - 1.0;
  }
  float fresnel = dot(viewDirection, normal) + 1.0;
  fresnel = pow(fresnel, fresnelPower);
  // color = vec3(fresnel);

  float holographic = stripes * fresnel;
  holographic += fresnel * fresnelEffectMultiplier;
  float falloff = smoothstep(falloffStart, falloffEnd, fresnel);
  holographic *= falloff;


  gl_FragColor = vec4(uColor, holographic);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}