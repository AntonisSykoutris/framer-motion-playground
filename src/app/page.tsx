"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

import { Environment, Scroll, ScrollControls } from "@react-three/drei";

import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
  return (
    <section className="h-screen w-full">
      <Canvas>
        <Environment preset="night" />
        <ScrollControls pages={3} damping={0.25}>
          <mesh rotation={[1, 2, 1]}>
            <boxGeometry />
            <meshBasicMaterial color={"orange"} />
          </mesh>
          <Scroll html style={{ width: "100%" }}>
            <Hero />
            <About />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </section>
  );
}
