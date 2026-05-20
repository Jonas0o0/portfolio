'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Blob({ position, scale, color, speed, distort }: { position: [number, number, number], scale: number, color: string, speed: number, distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time + position[0]) * 0.002;
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={1.5}>
      <Sphere args={[1, 64, 64]} ref={meshRef} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#f472b6" intensity={1} />
        
        {/* Cluster of Blobs positioned mainly on the right */}
        <Blob position={[3, 1, 0]} scale={1.2} color="#c084fc" speed={2} distort={0.4} />
        <Blob position={[4.5, -1.5, -1]} scale={0.8} color="#f472b6" speed={3} distort={0.5} />
        <Blob position={[2.5, -2, 1]} scale={0.5} color="#60a5fa" speed={1.5} distort={0.3} />
        <Blob position={[5, 0.5, -2]} scale={0.4} color="#a78bfa" speed={4} distort={0.6} />
        <Blob position={[1.5, 2, -1]} scale={0.3} color="#ec4899" speed={2.5} distort={0.4} />
      </Canvas>
    </div>
  );
}
