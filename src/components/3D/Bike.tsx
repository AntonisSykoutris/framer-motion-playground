'use client';

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Bike: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
    Cylinder002_2: THREE.Mesh;
    Torus003: THREE.Mesh;
    Torus003_1: THREE.Mesh;
    Torus003_2: THREE.Mesh;
    B_Raios: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Cylinder006_1: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder004_1: THREE.Mesh;
    CaboFreioFrente: THREE.Mesh;
    Cube: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Torus002: THREE.Mesh;
    Torus002_1: THREE.Mesh;
    Torus002_2: THREE.Mesh;
    F_Raios: THREE.Mesh;
    NurbsCurve: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Cylinder007_1: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Cylinder008_1: THREE.Mesh;
    Sphere: THREE.Mesh;
    Sphere002: THREE.Mesh;
  };
  materials: {
    Quadro: THREE.MeshStandardMaterial;
    Eixo: THREE.MeshStandardMaterial;
    Roda: THREE.MeshStandardMaterial;
    Pneu: THREE.MeshStandardMaterial;
    Faixa: THREE.MeshStandardMaterial;
    Raio: THREE.MeshStandardMaterial;
    PedalInterno: THREE.MeshStandardMaterial;
    PedalExterno: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function Bike(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/bike.gltf') as GLTFResult;
  const firstMesh = useRef<Mesh>(null);
  const secondMesh = useRef<Mesh>(null);
  const thirdMesh = useRef<Group>(null);
  const fourthMesh = useRef<Mesh>(null);
  const chainRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (firstMesh.current) firstMesh.current.rotation.y += delta;
    if (secondMesh.current) secondMesh.current.rotation.z += delta;

    if (thirdMesh.current) thirdMesh.current.rotation.y += delta;
    if (fourthMesh.current) fourthMesh.current.rotation.z += delta;

    // if (chainRef.current) chainRef.current.rotation.x += delta;
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bike.geometry} material={materials.Quadro}>
        <group position={[0, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Eixo}
          />
          <mesh
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Roda}
          />
        </group>
        <group
          position={[-1.047, -1.181, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.792, 0.546, 0.792]}
        >
          <axesHelper args={[3]} />
          <mesh
            ref={firstMesh}
            geometry={nodes.Torus003.geometry}
            material={materials.Pneu}
          />
          <mesh
            geometry={nodes.Torus003_1.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Torus003_2.geometry}
            material={materials.Faixa}
          />
        </group>
        <mesh
          ref={secondMesh}
          geometry={nodes.B_Raios.geometry}
          material={materials.Raio}
          position={[-1.053, -1.178, 0.005]}
        />
        <group
          position={[-0.428, -0.32, 0.011]}
          rotation={[1.571, -1.414, 3.142]}
          scale={[1, 3.023, 1]}
        >
          <mesh
            geometry={nodes.Cylinder006.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group
          position={[1.73, -0.423, 0.134]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 3.023, 1]}
        >
          <mesh
            geometry={nodes.Cylinder004.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <mesh
          geometry={nodes.CaboFreioFrente.geometry}
          material={materials.Pneu}
          position={[1.676, -0.253, -0.146]}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Pneu}
          position={[-0.061, 0.319, 0]}
          scale={0.091}
        />
        <group position={[0.272, -1.172, 0.013]}>
          <mesh
            geometry={nodes.Cylinder005.geometry}
            material={materials.PedalInterno}
          />
          <mesh
            geometry={nodes.Cylinder005_1.geometry}
            material={materials.PedalExterno}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials.PedalInterno}
          position={[-1.029, -1.179, 0.165]}
          scale={0.501}
        />
        <group
          ref={chainRef}
          position={[0.286, -0.975, 0.155]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.207, 0.127, 0.207]}
        >
          <axesHelper args={[3]} />

          <mesh
            geometry={nodes.Cylinder010.geometry}
            material={materials.Raio}
          />
          <mesh
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group
          position={[1.308, 0.35, 0.012]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.371}
        >
          <mesh
            geometry={nodes.Cylinder011.geometry}
            material={materials.Raio}
          />
          <mesh
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group position={[1.899, -1.178, 0.005]}>
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Eixo}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Roda}
          />
        </group>
        <group
          ref={thirdMesh}
          position={[1.905, -1.181, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.792, 0.546, 0.792]}
        >
          <mesh geometry={nodes.Torus002.geometry} material={materials.Pneu} />
          <mesh
            geometry={nodes.Torus002_1.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Torus002_2.geometry}
            material={materials.Faixa}
          />
        </group>
        <mesh
          ref={fourthMesh}
          geometry={nodes.F_Raios.geometry}
          material={materials.Raio}
          position={[1.899, -1.178, 0.005]}
        />
        <mesh
          geometry={nodes.NurbsCurve.geometry}
          material={materials.Pneu}
          position={[0.43, -0.796, 0.092]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0.272, -1.527, -0.49]} scale={[3.421, 3.276, 10.4]}>
          <mesh
            geometry={nodes.Cylinder007.geometry}
            material={materials.Pneu}
          />
          <mesh
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Quadro}
          />
        </group>
        <group position={[0.272, -0.814, 0.522]} scale={[3.421, 3.276, 10.4]}>
          <mesh
            geometry={nodes.Cylinder008.geometry}
            material={materials.Pneu}
          />
          <mesh
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Quadro}
          />
        </group>
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials.Roda}
          position={[-0.381, -0.26, 0.18]}
          scale={0.009}
        />
        <mesh
          geometry={nodes.Sphere002.geometry}
          material={materials.Raio}
          position={[1.676, -0.251, -0.192]}
          scale={0.01}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('./models/bike.gltf');
