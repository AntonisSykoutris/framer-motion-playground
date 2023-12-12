'use client';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, useRef, useState } from 'react';

import floating1 from '../../public/images/floating_1.jpg';

import floating2 from '../../public/images/floating_2.jpg';

import floating3 from '../../public/images/floating_3.jpg';

import floating4 from '../../public/images/floating_4.jpg';

import floating5 from '../../public/images/floating_5.jpg';

import floating6 from '../../public/images/floating_6.jpg';

import floating7 from '../../public/images/floating_7.jpg';

import floating8 from '../../public/images/floating_8.jpg';

export default function FloatingImages() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const SPEED1 = 0.1;
  const SPEED2 = 0.5;
  const SPEED3 = 0.25;

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    // const { left, top } = currentTarget.getBoundingClientRect();

    // setMouseX(clientX - left);
    // setMouseY(clientY - top);
    mouseX.set(clientX * SPEED1);
    mouseY.set(clientY * SPEED1);
  }

  return (
    <section
      className=' w-screen h-screen overflow-hidden relative'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={plane1}
        className='w-full h-full absolute brightness-[0.7]'
        style={{ x: mouseX, y: mouseY }}
      >
        <Image
          src={floating1}
          alt='image'
          width={300}
          className='absolute  left-[90%] top-[70%]'
        />
        <Image
          src={floating2}
          alt='image'
          width={300}
          className='absolute left-[5%] top-[65%]'
        />
        <Image
          src={floating7}
          alt='image'
          width={225}
          className='absolute left-[35%] top-[0%]'
        />
      </motion.div>
      <div ref={plane2} className='w-full h-full absolute brightness-[0.6]'>
        <Image
          src={floating4}
          alt='image'
          width={250}
          className='absolute left-[5%] top-[10%]'
        />
        <Image
          src={floating6}
          alt='image'
          width={200}
          className='absolute left-[80%] top-[5%]'
        />
        <Image
          src={floating8}
          alt='image'
          width={225}
          className='absolute left-[60%] top-[60%]'
        />
      </div>
      <div ref={plane3} className='w-full h-full absolute brightness-[0.5]'>
        <Image
          src={floating3}
          alt='image'
          width={150}
          className='absolute left-[65%] top-[2.5%]'
        />
        <Image
          src={floating5}
          alt='image'
          width={200}
          className='absolute left-[40%] top-[75%]'
        />
      </div>
      {/* ... */}
    </section>
  );
}
