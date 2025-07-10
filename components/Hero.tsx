"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      className="h-fit w-full flex flex-col items-start justify-start px-6 md:px-16 py-10 md:py-24 scroll-mt-25"
      id="home"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-6xl font-light bg-gradient-to-r from-purple-700 to-rose-900 dark:from-purple-400 dark:to-rose-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_10px_#ff4573] pb-2 mb-8"
        initial={{ y: 20, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        Hi, I&apos;m Armen
      </motion.h1>

      <motion.p
        className="text-xl text-gray-900 dark:text-gray-300 leading-8"
        initial={{ y: 20, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        I&rsquo;m a junior dev exploring the world of full-stack development.
        <br />
        <br />I enjoy creating clean, functional apps and constantly pushing
        myself to learn and improve.
      </motion.p>
    </motion.section>
  );
}
