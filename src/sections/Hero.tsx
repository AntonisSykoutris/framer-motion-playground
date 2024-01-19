"use client";
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";

import SplineTet from "@/components/3D/SplineTet";
import Scene from "@/components/3D/Scene";
import { CorkedBottle } from "@/components/3D/CorkedBottle";
import Particles from "@/components/3D/Particles";
import { Bike } from "@/components/3D/Bike";
import { GridLock } from "@/components/3D/GridLock";
import Typewriter from "@/components/CodeBlock/Typewriter";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="h-screen w-full">
      <Canvas>
        <Environment preset="night" />
        <ScrollControls pages={2} damping={0.25}>
          <Scroll>
            <mesh rotation={[1, 2, 1]}>
              <boxGeometry />
              <meshBasicMaterial color={"orange"} />
            </mesh>
          </Scroll>
          <Scroll html style={{ width: "100%" }}>
            <Section>
              <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic">Antonis Sykoutris</span>
              </h1>
              <motion.p
                className="mt-4 text-lg text-gray-600"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
              >
                I specialize in creating stunning websites with
                <br />
                intuitive and visually appealing user interfaces.
              </motion.p>
              <motion.button
                className={`mt-16 rounded-lg bg-indigo-600 px-8 
      py-4 text-lg font-bold text-white`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 2,
                }}
              >
                Contact me
              </motion.button>
            </Section>
            <Section>
              <h1 className="text-6xl">Projects</h1>
            </Section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </section>
  );
}

const Section = (props: { children: any }) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  mx-auto flex h-screen w-screen max-w-screen-2xl
  flex-col items-start justify-center p-8
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
