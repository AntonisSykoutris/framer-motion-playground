"use client";
import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Drill_01: THREE.Mesh;
  };
  materials: {
    Drill_01: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Drill(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/drill.glb") as GLTFResult;
  const drill = useRef<any>();
  const scroll = useScroll();
  const tl = useRef<any>();

  useFrame((state, delta) => {
    if (tl.current) tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let section = 0;
      new ScrollTrigger({});
      tl.current = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power2.inOut",
        },
        scrollTrigger: {
          trigger: ".section-about",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
          markers: true,
          immediateRender: false,
        },
      });

      tl.current
        .to(drill.current.position, { x: -10, y: -2 }, section)
        .to(drill.current.scale, { x: 1.01, y: 1.01, z: 1.01 }, section)
        .to(drill.current.rotation, { y: -Math.PI }, section);

      section += 1;
      tl.current
        .to(drill.current.position, { x: 7, y: -4.96 }, section)
        .to(drill.current.rotation, { x: 0.053, y: 0.2, z: -0.194 }, section);
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);

  const { rotation, position, scale } = useControls({
    rotation: [0, 0, 0],
    position: [0, -2, 0],
    scale: 30,
    // {"position":[-0.346,148.58,-1.24]}
  });

  return (
    <group {...props} dispose={null} ref={drill}>
      <mesh
        geometry={nodes.Drill_01.geometry}
        material={materials.Drill_01}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload("./models/drill.glb");
