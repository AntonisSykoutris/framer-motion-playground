'use client';
import React, { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';
import TextScroll from '@/components/About/TextScroll/TextScroll';

import FloatingImages from '@/components/About/FloatingImages/FloatingImages';
import Typewriter from '@/components/CodeBlock/Typewriter';

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
    <section id='hero'>
      <div className='h-screen'></div>
      <div className='h-screen'>
        <Typewriter />
      </div>
      <div className='h-screen'>
        <TextScroll />
      </div>
      <div className='h-screen'>
        <FloatingImages />
        <p className='block md:hidden text-white'>vvvv</p>
      </div>
    </section>
  );
}
