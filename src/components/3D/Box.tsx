import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { Mesh } from "three";

export default function Box() {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll(); // Correct usage of useScroll

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Determine the current section based on the scroll position
      const currentSection = Math.floor(scroll.offset * scroll.pages);

      // Adjust the box's movement based on the current section
      if (currentSection % 3 === 0) {
        // Move to the right in the first section
        meshRef.current.position.x += 1 * delta;
      } else if (currentSection % 3 === 1) {
        // Move to the left in the second section
        meshRef.current.position.x += -1 * delta;
      } else {
        // Keep the box in the middle in the third section
        meshRef.current.position.x = 0;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </mesh>
  );
}
