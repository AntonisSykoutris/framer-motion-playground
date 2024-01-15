'use client';

import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useControls } from 'leva';
import { motion } from 'framer-motion-3d';

type GLTFResult = GLTF & {
  nodes: {
    ['Line001_Material_#48_0']: THREE.Mesh;
    ['Cone001_02_-_Default_0']: THREE.Mesh;
  };
  materials: {
    Material_48: THREE.MeshStandardMaterial;
    ['02_-_Default']: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function CorkedBottle(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    './models/corked_bottle.glb'
  ) as GLTFResult;

  const { rotation, position } = useControls({
    rotation: [0, 0, -0.5],
    position: [-0.346, 114.58, -1.24],
    // {"position":[-0.346,148.58,-1.24]}
  });

  const CapVariants = {
    initial: {
      x: -0.346,
      y: 114.58,
      z: -1.24,
    },
    animate: {
      x: -0.346,
      y: 148.58,
      z: -1.24,
      transition: { type: 'spring', stiffness: 30, bounce: 4 },
    },
  };

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.01} rotation={rotation}>
        <motion.group
          onHoverStart={() => console.log('the bottle is hovered!!!')}
        >
          <group position={[0, 92.191, 0]}>
            <mesh
              geometry={nodes['Line001_Material_#48_0'].geometry}
              material={materials.Material_48}
              position={[-32.615, 0, 0]}
            />
          </group>
          <motion.mesh
            geometry={nodes['Cone001_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={position}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.576}
            variants={CapVariants}
            initial={'initial'}
            whileHover={'animate'}
          />
        </motion.group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/corked_bottle.glb');
