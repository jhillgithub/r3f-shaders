import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Uniform } from "three";
import smokeFragmentShader from "./smoke.fragment.glsl";
import smokeVertexShader from "./smoke.vertex.glsl";

const SmokeMaterial = shaderMaterial(
  {
    uTime: new Uniform(0.0),
    uPerlinTexture: undefined,
  },
  smokeVertexShader,
  smokeFragmentShader
);
extend({ SmokeMaterial });
export default SmokeMaterial;
