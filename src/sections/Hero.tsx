'use client';
import React, { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';
import TextScroll from '@/components/TextScroll/TextScroll';
import { heroData } from '@/lib/data';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import CodeBlock from '@/components/CodeBlock/CodeBlock';
import { slideInFromRight } from '@/lib/motion';
import { motion } from 'framer-motion';
import FloatingImages from '@/components/FloatingImages';

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
      <div className='h-screen'>
        {/* <motion.div variants={slideInFromRight(0.5)} initial='initial' animate='animate'>
          <CodeBlock textArray={heroData.codeBlock1} fileName='Hero.tsx' Icon={FaReact} />
        </motion.div>
        <motion.div className='pl-10' variants={slideInFromRight(0.8)} initial='initial' animate='animate'>
          <CodeBlock textArray={heroData.codeBlock2} fileName='type.ts' Icon={BiLogoTypescript} />
        </motion.div>
        <motion.div variants={slideInFromRight(1.1)} initial='initial' animate='animate'>
          <CodeBlock textArray={heroData.codeBlock3} fileName='page.tsx' Icon={FaReact} />
        </motion.div> */}
        <FloatingImages />
      </div>
      <TextScroll />
      <div className='h-screen'></div>
    </section>
  );
}
