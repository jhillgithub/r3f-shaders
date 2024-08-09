import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { AdditiveBlending, Color, DoubleSide, Uniform } from "three";
import fragmentShader from "./holographic.fragment.glsl";
import vertexShader from "./holographic.vertex.glsl";

const HolographicMaterial = shaderMaterial(
  {
    uTime: 0.0,
    uColor: new Color("#00f"),
    //stripes
    stripesMovementSpeed: 0.02,
    numberOfStripes: 20.0,
    stripesPow: 3.0,
    // fresnel effect
    fresnelPower: 2.0,
    fresnelEffectMultiplier: 1.25,
    falloffStart: 0.8,
    falloffEnd: 0.0,
    // glitch effect
    glitchStength: 0.25,
    glitchStrengthStart: 0.3,
    glitchStengthEnd: 1.0,
    glitchTimeFreqMul1: 1.0,
    glitchTimeFreqMul2: 3.75,
    glitchTimeFreqMul3: 8.76,
    transparent: true,
    side: DoubleSide,
    depthWrite: false,
    blending: AdditiveBlending,
  },
  vertexShader,
  fragmentShader
);
extend({ HolographicMaterial });
export default HolographicMaterial;
