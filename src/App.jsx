import React from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas>
        <color attach="background" args={["#0f0f0f"]} />
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
