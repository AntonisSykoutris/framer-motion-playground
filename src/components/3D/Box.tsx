"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useLayoutEffect, useRef } from "react";
import { DoubleSide, Mesh } from "three";

type Props = {};

export default function Box({}: Props) {
  const boxRef = useRef<any>(null);
  const tl = useRef<any>(null);
  const scroll = useScroll();
  const controls = useAnimation();

  useFrame((state, delta) => {
    if (boxRef.current) {
      controls.set({
        rotateY: scroll.offset * 5,
        x: scroll.offset * 5,
      });
    }
  });

  useLayoutEffect(() => {
    controls.start({
      rotateY: [-1, 1, 0, 0, 0],
      x: [1, -1, 0, 0, 0],
      transition: {
        duration: 20,
        ease: "power1.inOut",
      },
    });
  }, [controls]);
  return (
    <>
      <motion.mesh animate={controls} ref={boxRef} rotation={[1, 2, 1]}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"} />
      </motion.mesh>
    </>
  );
}
