"use client";
import { motion } from "framer-motion-3d";

export default function Box({ section }: { section: number }) {
  return (
    <motion.mesh
      animate={{
        y: section === 0 ? 0 : -1,
        scaleX: section === 0 ? 1 : 1.2,
      }}
    >
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </motion.mesh>
  );
}
