import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import ShaderBox from "./ShaderBox";
import SmokeBox from "./SmokeBox";

const Experience = () => {
  return (
    <>
      {/* <ShaderBox /> */}
      <SmokeBox />
      <Lights />
      <OrbitControls />
    </>
  );
};

export default Experience;
