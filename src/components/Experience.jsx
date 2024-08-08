import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import ShaderBox from "./ShaderBox";
import SmokeBox from "./SmokeBox";
import HolographicDemo from "../shaders/holographic/HolographicDemo";

const Experience = () => {
  return (
    <>
      {/* <ShaderBox /> */}
      {/* <SmokeBox /> */}
      <HolographicDemo />
      <Lights />
      <OrbitControls />
    </>
  );
};

export default Experience;
