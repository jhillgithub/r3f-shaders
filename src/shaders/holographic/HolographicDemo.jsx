import React, { useRef } from "react";
import HolographicMaterial from "./HolographicMaterial";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, Color, DoubleSide } from "three";
import { useControls } from "leva";
const HolographicDemo = () => {
  const ref = useRef();
  const colors = useControls({
    uColor: "#0ff",
  });

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const elapsedTime = clock.getElapsedTime();
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
    ref.current.material.uniforms.uColor.value = new Color(colors.uColor);
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry />
      <holographicMaterial
        transparent
        side={DoubleSide}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  );
};

export default HolographicDemo;
