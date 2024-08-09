import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import React, { useRef } from "react";
import { Color } from "three";
import HolographicMaterial from "./HolographicMaterial";
const HolographicDemo = () => {
  const ref = useRef();
  const {
    color,
    stripesMovementSpeed,
    numberOfStripes,
    stripesPow,
    fresnelPower,
    fresnelEffectMultiplier,
    falloffStart,
    falloffEnd,
    glitchStength,
    glitchStrengthStart,
    glitchStengthEnd,
    glitchTimeFreqMul1,
    glitchTimeFreqMul2,
    glitchTimeFreqMul3,
  } = useControls({
    color: "#0ff",
    stripes: folder({
      stripesMovementSpeed: { value: 0.025, min: 0.0, max: 10.0, step: 0.05 },
      numberOfStripes: { value: 20.0, min: 1.0, max: 100.0, step: 1.0 },
      stripesPow: { value: 3.0, min: 1.0, max: 10.0, step: 1.0 },
    }),
    fresnel: folder({
      fresnelPower: { value: 2.0, min: 1.0, max: 10.0, step: 1.0 },
      fresnelEffectMultiplier: 1.25,
      falloffStart: 0.8,
      falloffEnd: 0.0,
    }),
    glitch: folder({
      glitchStength: { value: 0.25, min: 0.0, max: 10.0, step: 0.05 },
      glitchStrengthStart: { value: 0.3, min: 0.0, max: 1.0, step: 0.05 },
      glitchStengthEnd: 1.0,
      glitchTimeFreqMul1: 1.0,
      glitchTimeFreqMul2: 3.75,
      glitchTimeFreqMul3: 8.76,
    }),
  });

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const elapsedTime = clock.getElapsedTime();
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
    // ref.current.material.uniforms.uColor.value = new Color(colors.uColor);
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry />
      <holographicMaterial
        uColor={color}
        stripesMovementSpeed={stripesMovementSpeed}
        numberOfStripes={numberOfStripes}
        stripesPow={stripesPow}
        fresnelPower={fresnelPower}
        fresnelEffectMultiplier={fresnelEffectMultiplier}
        falloffStart={falloffStart}
        falloffEnd={falloffEnd}
        glitchStength={glitchStength}
        glitchStrengthStart={glitchStrengthStart}
        glitchStengthEnd={glitchStengthEnd}
        glitchTimeFreqMul1={glitchTimeFreqMul1}
        glitchTimeFreqMul2={glitchTimeFreqMul2}
        glitchTimeFreqMul3={glitchTimeFreqMul3}
      />
    </mesh>
  );
};

export default HolographicDemo;
