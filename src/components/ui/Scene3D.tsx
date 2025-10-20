"use client";
import { Suspense } from "react";
import * as THREE from "three";
import "@react-three/fiber";

import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import BuildingModel from "./BuildingModel";

const Canvas = Fiber.Canvas;
const PerspectiveCamera = Drei.PerspectiveCamera;
const Environment = Drei.Environment;
const OrbitControls = Drei.OrbitControls;

interface Scene3DProps {
  scrollProgress: number;
}

export default function Scene3D({ scrollProgress }: Scene3DProps) {
  return (
    <Canvas 
      shadows 
      style={{ height: '1600px' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 10, 50]} fov={70} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight position={[-10, 10, -5]} intensity={0.3} />
        <BuildingModel scrollProgress={scrollProgress} />
        <Environment preset="city" />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
        />
      </Suspense>
    </Canvas>
  );
}