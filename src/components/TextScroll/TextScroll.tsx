'use client';
import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { PARAGRAPH } from '@/lib/data';
import Word from './Word';
import Image from 'next/image';
import Picture from '../../../public/photo1.jpg';
type Props = {};

export default function TextScroll({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = PARAGRAPH.split(' ');
  return (
    <p ref={container} className=' flex text-3xl md:text-7xl leading-none p-10 max-w-7xl text-white flex-wrap'>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <>
            {/* <Image
              src={Picture}
              fill
              className='object-contain bg-no-repeat w-64 h-64'
              alt='Picture of the author'
              placeholder='blur'
            /> */}
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          </>
        );
      })}
    </p>
  );
}
