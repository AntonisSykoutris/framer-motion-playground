'use client';

import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';

export default function SplineFiber({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/7V74FiZIFbJlm23J/scene.splinecode');
  return (
    <>
      <color attach='background' args={['#fefefe']} />
      <group {...props} dispose={null}>
        <scene name='Scene 1'>
          <mesh
            name='Text'
            geometry={nodes.Text.geometry}
            material={materials['Text Material']}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={3}
          />
          <group name='Bottle' position={[-129.77, 849.85, 323.39]} scale={[2, 2, 2]} rotation={[0, 0, 1.19]}>
            <mesh
              name='Cylinder 2'
              geometry={nodes['Cylinder 2'].geometry}
              material={materials['Cylinder 2 Material']}
              castShadow
              receiveShadow
              position={[0, 166.13, -149.19]}
              rotation={[-0.72, 0, 0]}
              scale={0.83}
            />
            <mesh
              name='Cylinder'
              geometry={nodes.Cylinder.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[2.42, 0, -Math.PI]}
              scale={[-1, 1.58, 1]}
            />
          </group>
          <directionalLight
            name='Directional Light'
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[-284.87, 781.22, -58.4]}
            rotation={[1.59, -0.02, -0.8]}
          />
          <OrthographicCamera name='1' makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name='Default Ambient Light' intensity={0.75} color='#eaeaea' />
        </scene>
      </group>
    </>
  );
}
