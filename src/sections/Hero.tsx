'use client';
import React, { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';
import TextScroll from '@/components/About/TextScroll/TextScroll';

import FloatingImages from '@/components/About/FloatingImages/FloatingImages';
import Typewriter from '@/components/CodeBlock/Typewriter';
import Parallax from '@/components/Parallax';

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
      <div className='min-h-screen'>
        <Parallax />
      </div>
      <div className='min-h-screen'>
        <Typewriter />
      </div>
      <div className='min-h-screen'>
        <TextScroll />
      </div>
      <div className='min-h-screen'>
        <FloatingImages />
        <p className='block md:hidden text-white'>vvvv</p>
      </div>
    </section>
  );
}
