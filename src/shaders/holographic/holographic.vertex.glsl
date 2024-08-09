uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;

uniform float glitchStength;
uniform float glitchStrengthStart;
uniform float glitchStengthEnd;
uniform float glitchTimeFreqMul1;
uniform float glitchTimeFreqMul2;
uniform float glitchTimeFreqMul3;

#include ../includes/random2D.glsl

void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Glitch
    float glitchTime = uTime - modelPosition.y;
    float glitchStrength = sin(glitchTime * glitchTimeFreqMul1) + sin(glitchTime * glitchTimeFreqMul2) +  sin(glitchTime * glitchTimeFreqMul3);
    glitchStrength /= 3.0;
    glitchStrength = smoothstep(glitchStrengthStart, glitchStengthEnd, glitchStrength);
    glitchStrength *= glitchStength;
    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
    modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;

    // Final position
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    // Model normal
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    // Varyings
    vPosition = modelPosition.xyz;
    vNormal = modelNormal.xyz;
}