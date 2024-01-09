'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useMotionValue, useSpring, useScroll, useTransform, MotionValue } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Mesh } from 'three';
import { Laptop } from './3D/Laptop';
import { Mickey } from './3D/Mickey';

type Props = {};

type CubeProps = {
  progress: MotionValue<any>;
};

function Cube({ progress }: CubeProps) {
  const meshRef = useRef(null);
  return (
    <motion.mesh ref={meshRef} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'orange'} />
      {/* <MeshWobbleMaterial color={'green'} factor={0.2} /> */}
    </motion.mesh>
  );
}

export default function Parallax({}: Props) {
  return (
    <section className='container min-h-screen w-full grid grid-cols-2  items-center'>
      <h1 className='bg-blue-500 text-9xl font-extrabold'>MICKEY</h1>
      <Canvas className='bg-red-500' orthographic camera={{ position: [0, 0, 200], zoom: 70 }}>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />

        <ambientLight intensity={1} />
        {/* <directionalLight position={[2, 1, 1]} /> */}
        {/* <Cube progress={smoothProgress} /> */}
        {/* <Laptop /> */}
        <Float>
          <Mickey />
        </Float>
      </Canvas>
    </section>
  );
}
