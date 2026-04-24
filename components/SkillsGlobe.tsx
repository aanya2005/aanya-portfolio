'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.0015;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#B36B6E" wireframe />
    </mesh>
  );
}

export default function SkillsGlobe() {
  return (
    <Canvas style={{ width: 300, height: 300 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <RotatingSphere />
    </Canvas>
  );
}