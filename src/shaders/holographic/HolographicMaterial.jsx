import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color, Uniform } from "three";
import fragmentShader from "./holographic.fragment.glsl";
import vertexShader from "./holographic.vertex.glsl";

const HolographicMaterial = shaderMaterial(
  {
    uTime: new Uniform(0.0),
    uColor: new Uniform(new Color("#00f")),
  },
  vertexShader,
  fragmentShader
);
extend({ HolographicMaterial });
export default HolographicMaterial;
