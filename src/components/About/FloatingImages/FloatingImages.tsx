'use client';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

import { aboutData } from '@/lib/data';

import floating1 from '../../public/images/floating_1.jpg';
import floating2 from '../../public/images/floating_2.jpg';
import floating3 from '../../public/images/floating_3.jpg';
import floating4 from '../../public/images/floating_4.jpg';
import floating5 from '../../public/images/floating_5.jpg';
import floating6 from '../../public/images/floating_6.jpg';
import floating7 from '../../public/images/floating_7.jpg';
import floating8 from '../../public/images/floating_8.jpg';

export default function FloatingImages() {
  const mouseX1 = useMotionValue(0);
  const mouseY1 = useMotionValue(0);
  const mouseX2 = useMotionValue(0);
  const mouseY2 = useMotionValue(0);
  const mouseX3 = useMotionValue(0);
  const mouseY3 = useMotionValue(0);

  let requestAnimationFrameId = 0;
  let xForce = 0;
  let yForce = 0;

  const { SPEED1, SPEED2, SPEED3, EASING } = aboutData;
  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;
  const animate = () => {
    xForce = lerp(xForce, 0, EASING);

    yForce = lerp(yForce, 0, EASING);

    mouseX1.set(mouseX1.get() + xForce);
    mouseY1.set(mouseY1.get() + yForce);

    mouseX2.set(mouseX2.get() + xForce * SPEED2);
    mouseY2.set(mouseY2.get() + yForce * SPEED2);

    mouseX3.set(mouseX3.get() + xForce * SPEED3);
    mouseY3.set(mouseY3.get() + yForce * SPEED3);

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) requestAnimationFrame(animate);
    else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = 0;
    }
  };

  const handleMouseMove = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    const { movementX, movementY } = e;
    xForce += movementX * SPEED1;
    yForce += movementY * SPEED1;

    if (requestAnimationFrameId === 0)
      requestAnimationFrameId = requestAnimationFrame(animate);
  };

  return (
    <section
      className=' w-screen h-screen relative'
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <motion.div
        className='w-full h-full absolute brightness-[0.7]'
        style={{ x: mouseX1, y: mouseY1 }}
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
      <motion.div
        className='w-full h-full absolute brightness-[0.6]'
        style={{ x: mouseX2, y: mouseY2 }}
      >
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
      </motion.div>
      <motion.div
        className='w-full h-full absolute brightness-[0.5]'
        style={{ x: mouseX3, y: mouseY3 }}
      >
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
      </motion.div>
    </section>
  );
}
