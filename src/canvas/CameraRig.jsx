import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { OrbitControls } from "@react-three/drei";

import state from "../store";
let timer = 0;
const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    //set initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }
    //animation duration

    const duration = 2; // 5 seconds
    if (timer < duration) {
      console.log(timer);
      timer += delta;
      easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    }

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  // set the model rotation smoothly

  return (
    <group ref={group}>
      {children}{" "}
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        minDistance={1}
        maxDistance={3}
      />
    </group>
  );
};

export default CameraRig;
