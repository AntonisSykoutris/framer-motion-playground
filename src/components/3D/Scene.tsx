'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DoubleSide, Mesh } from 'three';

type Props = {};

export default function Scene({}: Props) {
  //   const planeRef = useRef<Mesh>(null);
  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    // if (planeRef.current) planeRef.current.rotation.y += 2 * delta;
    // if (cubeRef.current) cubeRef.current.rotation.y += 2 * delta;
  });

  return (
    <>
      {/* <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color={'orange'} side={DoubleSide} />
      </mesh> */}
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color={'#7A00CA'} />
      </mesh>
    </>
  );
}
