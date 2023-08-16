"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function CanvasComponent(): any {
  const ball = useGLTF("./3d/beachball.glb");

  return (
    <>
      <Canvas className="cursor-pointer bg-white">
        <ambientLight intensity={2.5} />
        <OrbitControls />
        <primitive object={ball.scene}/>
        
      </Canvas>
    </>
  );
}
