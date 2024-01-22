"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh } from "three";

type Props = {};

export default function Scene({}: Props) {
  const planeRef = useRef<Mesh>(null);
  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (planeRef.current) planeRef.current.rotation.y += 2 * delta;
    if (cubeRef.current) cubeRef.current.rotation.y += 2 * delta;
  });

  return (
    <>
      <mesh ref={planeRef}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial color={"orange"} side={DoubleSide} />
      </mesh>
      <mesh ref={cubeRef} position-x={5}>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial color={"#7A00CA"} />
      </mesh>
    </>
  );
}
