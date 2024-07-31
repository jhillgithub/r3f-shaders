import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Color } from "three";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(0.5 + 0.13 * sin(vUv.yxx + time) + color, 1.0);
    }
  `
);
extend({ ColorShiftMaterial });

const ShaderBox = () => {
  const ref = useRef();
  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.x += delta * 0.5;
    ref.current.material.uniforms.time.value = clock.getElapsedTime();
  });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <colorShiftMaterial color="aquamarine" time={0} />
    </mesh>
  );
};

export default ShaderBox;
