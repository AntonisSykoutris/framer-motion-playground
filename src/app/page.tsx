"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Environment, Scroll, ScrollControls } from "@react-three/drei";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Box from "@/components/3D/Box";
import { ScrollManager } from "@/components/General/ScrollManager";

export default function Home() {
  const [section, setSection] = useState(0);
  return (
    <section className="h-screen w-full">
      <Canvas camera={{ position: [1, 1, 5], near: 0.01 }}>
        <Environment preset="night" />
        <ScrollControls pages={3} damping={0.25}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Box />
          <Scroll html style={{ width: "100%" }}>
            <Hero />
            <About />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </section>
  );
}
