import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import SmokeMaterial from "../shaders/smoke/SmokeMaterial";
import { DoubleSide, RepeatWrapping, ShaderMaterial } from "three";
import { useTexture } from "@react-three/drei";

const SmokeBox = () => {
  const ref = useRef();
  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    // ref.current.rotation.y += delta * 0.5;
    // ref.current.rotation.x += delta * 0.5;
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  const texture = useTexture("textures/perlin.png");
  texture.wrapS = texture.wrapT = RepeatWrapping;
  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 16, 64]} />
      <smokeMaterial
        uPerlinTexture={texture}
        side={DoubleSide}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export default SmokeBox;
