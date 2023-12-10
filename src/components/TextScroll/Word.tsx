'use client';
import { useTransform, motion, MotionValue } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

export default function Word({ children, progress, range }: Props) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className='mr-3 mt-3'>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
