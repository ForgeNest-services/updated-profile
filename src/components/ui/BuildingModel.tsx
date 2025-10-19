"use client";
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "@react-three/fiber";

interface BuildingModelProps {
  scrollProgress: number;
}

export default function BuildingModel({ scrollProgress }: BuildingModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/building.glb");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            metalness: 0.3,
            roughness: 0.6,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={10} position={[0, -6, 0]} />
    </group>
  );
}

useGLTF.preload("/models/building.glb");