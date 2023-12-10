'use client';
import React, { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';
import TextScroll from '@/components/TextScroll/TextScroll';
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
      <TextScroll />
      <div className='h-screen'></div>
    </section>
  );
}
