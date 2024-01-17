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

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="h-screen w-full">
      <Canvas>
        <Environment preset="night" />
        <ScrollControls pages={6} damping={0.25}>
          <Scroll></Scroll>
          <Scroll html style={{ width: "100%" }}>
            <h1 className="absolute left-1/2 top-[45vh] -translate-x-1/2 -translate-y-1/2 transform text-9xl text-gray-300">
              THIS IS CENTER.
            </h1>
            <div className="absolute top-[132vh] text-gray-300">
              <h2 className="text-6xl font-bold text-gray-300">
                THIS IS LEFT.
              </h2>
            </div>

            <div className="absolute top-[230vh] w-full">
              <div className="absolute right-40">
                <h2 className="text-6xl  font-bold text-gray-300">
                  THIS IS RIGHT.
                </h2>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </section>
  );
}
