'use client';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Canvas } from '@react-three/fiber';
import SplineTet from '@/components/3D/SplineTet';

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
    <section className='w-full h-screen relative'>
      <SplineTet />
      {/* <button className='bg-blue-500 absolute inset-0 z-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Button
      </button> */}
    </section>
  );
}
