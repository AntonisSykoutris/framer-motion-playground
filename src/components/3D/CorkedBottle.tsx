'use client';

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

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
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.01} rotation={[0, 0, 0]}>
        <group>
          <group position={[0, 92.191, 0]}>
            <mesh
              geometry={nodes['Line001_Material_#48_0'].geometry}
              material={materials.Material_48}
              position={[-32.615, 0, 0]}
            />
          </group>
          <mesh
            geometry={nodes['Cone001_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[-0.346, 114.58, -1.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.576}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/corked_bottle.glb');
