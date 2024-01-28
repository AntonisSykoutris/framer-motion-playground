"use client";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Environment, Scroll, ScrollControls } from "@react-three/drei";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Box from "@/components/3D/Box";
import { ScrollManager } from "@/components/General/ScrollManager";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "@/lib/utils";
import { Drill } from "../../Drill";
import Experiance from "@/sections/Experiance";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [section, setSection] = useState(0);
  const aboutRef = useRef<any>(null);
  return (
    <section className="h-screen w-full">
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas camera={{ position: [1, 1, 5], near: 0.01 }}>
          <Environment preset="city" />
          <ScrollControls pages={3} damping={0.25}>
            <ScrollManager section={section} onSectionChange={setSection} />
            {/* <Box section={section} /> */}
            <Drill />
            <Scroll html style={{ width: "100%" }}>
              <Hero />
              <About />
              <Experiance />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
    </section>
  );
}
