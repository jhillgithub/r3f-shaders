import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import ShaderBox from "./ShaderBox";

const Experience = () => {
  return (
    <>
      <ShaderBox />
      <Lights />
      <OrbitControls />
    </>
  );
};

export default Experience;
