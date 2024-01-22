"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/General/Section";

type Props = {};

export default function Hero({}: Props) {
  return (
    <Section className="">
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I&apos;m
        <br />
        <span className="bg-white px-1 italic">Antonis Sykoutris</span>
      </h1>
      <motion.p
        className="mt-4 text-lg text-gray-600"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I specialize in creating stunning websites with
        <br />
        intuitive and visually appealing user interfaces.
      </motion.p>
      <motion.button
        className={`mt-16 rounded-lg bg-indigo-600 px-8 
py-4 text-lg font-bold text-white`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
}
