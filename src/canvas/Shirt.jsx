import React, { lazy, Suspense, useMemo } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import state from "../store";
import { MeshStandardMaterial } from "three";
//

//
const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const [
    ambientOcclusionMap,
    baseColorMap,
    heightMap,
    normalMap,
    roughnessMap,
    denim,
  ] = useTexture([
    "/fabric_texture/fabric_167_ambientocclusion-4K.png",
    "/fabric_texture/fabric_167_basecolor-4K.png",
    "/fabric_texture/fabric_167_height-4K.png",
    "/fabric_texture/fabric_167_normal-4K.png",
    "/fabric_texture/fabric_167_roughness-4K.png",
    "/fabric_texture/denimfabric.jpg",
  ]);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        map: baseColorMap,
        aoMap: ambientOcclusionMap,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        roughness: 0.4,
        transparent: false,
      }),
    [ambientOcclusionMap, baseColorMap, normalMap, roughnessMap]
  );

  const material_2 = useMemo(
    () =>
      new MeshStandardMaterial({
        map: baseColorMap,
        aoMap: ambientOcclusionMap,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        roughness: 0.4,
        transparent: false,
      }),
    [ambientOcclusionMap, baseColorMap, normalMap, roughnessMap]
  );

  // color changer
  useFrame((state, delta) =>
    easing.dampC(material.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={0.3} />
      <directionalLight
        position={[0, 0, -1]}
        intensity={1.5}
        color="white"
        castShadow
      />
      <OrbitControls />

      <group key={stateString}>
        <mesh
          castShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={material}
          material-roughness={0.4}
          material-opacity={1}
          material-transparent={false}
          dispose={null}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={0.7}
              map={fullTexture}
              material={material_2}
              depthTest={true}
              depthWrite={true}
              material-opacity={1}
              material-roughness={0.4}
              polygonOffset
              polygonOffsetFactor={-1}
            />
          )}
          {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={[0.25, 0.15, 0.15]}
              map={logoTexture}
              depthTest={true}
              depthWrite={true}
            />
          )}
        </mesh>
      </group>
    </Suspense>
  );
  r;
};

export default Shirt;
