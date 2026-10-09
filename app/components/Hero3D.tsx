
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AICore() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    pointer.current.x = THREE.MathUtils.lerp(
      pointer.current.x,
      state.pointer.x,
      2 * delta,
    );

    pointer.current.y = THREE.MathUtils.lerp(
      pointer.current.y,
      state.pointer.y,
      2 * delta,
    );

    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.y += pointer.current.x * delta * 0.15;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.current.y * 0.18,
      2 * delta,
    );
  });

  return (
    <group ref={groupRef}>
      {/* Central glass-like AI core */}
      <mesh>
        <icosahedronGeometry args={[1.05, 4]} />
        <meshPhysicalMaterial
          color="#8b9dff"
          metalness={0.75}
          roughness={0.16}
          transmission={0.18}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.12}
          emissive="#283caa"
          emissiveIntensity={0.45}
        />
      </mesh>

      {/* Inner energy sphere */}
      <mesh scale={0.7}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#6554ff"
          emissive="#493bff"
          emissiveIntensity={1.8}
          metalness={0.6}
          roughness={0.3}
          wireframe
        />
      </mesh>

      {/* Orbital rings */}
      <Torus args={[1.55, 0.012, 12, 160]} rotation={[1.1, 0.2, 0.4]}>
        <meshStandardMaterial
          color="#8b9dff"
          emissive="#5268ff"
          emissiveIntensity={1.5}
          metalness={0.8}
          roughness={0.25}
        />
      </Torus>

      <Torus args={[1.72, 0.008, 12, 160]} rotation={[0.35, 1.0, 0.8]}>
        <meshStandardMaterial
          color="#b18cff"
          emissive="#8955ff"
          emissiveIntensity={1.6}
          metalness={0.7}
          roughness={0.3}
        />
      </Torus>

      {/* Small orbiting nodes */}
      <mesh position={[1.5, 0.55, 0.25]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshStandardMaterial
          color="#c6d4ff"
          emissive="#6688ff"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[-1.25, -0.8, 0.2]}>
        <sphereGeometry args={[0.055, 20, 20]} />
        <meshStandardMaterial
          color="#d1b6ff"
          emissive="#985cff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />

      <pointLight
        position={[3, 3, 4]}
        intensity={35}
        color="#647cff"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={25}
        color="#965cff"
      />

      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
        <AICore />
      </Float>

      <Sparkles
        count={65}
        scale={4.5}
        size={2}
        speed={0.3}
        opacity={0.65}
        color="#a6b6ff"
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}