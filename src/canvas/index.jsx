import { Canvas } from "@react-three/fiber";
import { Environment, Center, Sparkles, Billboard } from "@react-three/drei";

//

import { LayerMaterial, Depth } from "lamina";
//

import { Suspense } from "react";

//
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
//

const color = "#ff0000";
const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
  <Billboard>
    <mesh>
      <LayerMaterial transparent depthWrite={false}>
        {" "}
        <Depth
          colorA={color}
          colorB="red"
          alpha={1}
          mode="normal"
          near={near * scale}
          far={far * scale}
          origin={[0, 0, 0]}
        />
      </LayerMaterial>
    </mesh>
  </Billboard>
);

const CanvasModel = () => {
  return (
    <div className="flex flex-col items-stretch w-full h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />

        <Environment preset="city" />

        <Glow scale={1 * 1.2} near={-25} />
        <Sparkles
          color={"white"}
          count={10}
          scale={1 * 2}
          size={3}
          speed={0.5}
        />
        <Sparkles count={10} scale={1 * 2} size={3} speed={0.1} />
        <Sparkles count={10} scale={1 * 2} size={3} speed={0.1} />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
