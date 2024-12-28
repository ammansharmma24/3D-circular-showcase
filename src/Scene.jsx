import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  let tex = useTexture("./images.png");
  tex.needsUpdate = true;
  let cyl = useRef(null);
  useFrame((state, delta) => {
    // cyl.current.rotation.x += delta * 0.5;
    cyl.current.rotation.y += delta * 0.5;
    // cyl.current.rotation.z += delta * 0.5;
  });
  return (
    <mesh ref={cyl} rotation={[0.4, 0, 0.2]} position={[0, 0.2, 0]}>
      <cylinderGeometry args={[2.5, 2.5, 2.5, 70, 70, true]}></cylinderGeometry>
      <meshStandardMaterial
        map={tex}
        side={THREE.DoubleSide}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Scene;
