"use client";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import BuildingModel from "./BuildingModel";

interface Scene3DProps {
  scrollProgress: number;
}

export default function Scene3D({ scrollProgress }: Scene3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  // Disable React DevTools for Three.js components to prevent semver errors
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className="relative w-full" style={{ height: "1600px" }}>
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center z-10">
          <div className="text-gray-500">Loading 3D content...</div>
        </div>
      )}

      <Canvas
        shadows
        style={{ height: "1600px" }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        {...(isDev && {
          onCreated: (state) => {
            // Disable React DevTools for this canvas
            if (state.gl && state.gl.domElement) {
              state.gl.domElement.setAttribute(
                "data-react-devtools-ignore",
                "true"
              );
            }
          },
        })}
        onCreated={() => setIsLoaded(true)}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={110} />
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
    </div>
  );
}
