'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.5}>
      <MeshDistortMaterial
        color="#c084fc"
        speed={3}
        distort={0.4}
        radius={1}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute top-1/2 right-0 translate-y-[-50%] w-[80%] h-full opacity-30 pointer-events-none translate-x-[20%]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#f472b6" intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Blob />
        </Float>
      </Canvas>
    </div>
  );
}
