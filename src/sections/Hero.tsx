'use client';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Canvas } from '@react-three/fiber';
import SplineTet from '@/components/3D/SplineTet';
import Scene from '@/components/3D/Scene';
import { OrbitControls } from '@react-three/drei';
import { CorkedBottle } from '@/components/3D/CorkedBottle';
import { Leva } from 'leva';
import Particles from '@/components/3D/Particles';

type Props = {};

export default function Hero({}: Props) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className='w-full h-screen'>
      {/* <Canvas> */}
      <Canvas orthographic camera={{ zoom: 100, position: [0, 7, 30] }}>
        {/* <Scene /> */}
        {/* <Particles /> */}

        <CorkedBottle />
        <OrbitControls enablePan={false} />
        {/* <axesHelper args={[3]} /> */}
        {/* <gridHelper args={[20, 20, 0xff0000]} /> */}
        <directionalLight position={[1, 1, 1]} />
      </Canvas>
    </section>
  );
}
