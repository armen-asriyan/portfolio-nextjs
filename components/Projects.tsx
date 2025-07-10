"use client";

import PyfDashboard from "./projects/PyfDashboard";
import PyfSite from "./projects/PyfSite";

import { motion } from "motion/react";

export default function Projects() {
  return (
    <motion.section
      className="h-fit w-full flex flex-col items-start justify-start px-6 md:px-16 py-2.5 mb-20 scroll-mt-25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
    >
      <h2 className="text-5xl bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-600 dark:from-fuchsia-500  dark:via-purple-500 dark:to-indigo-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] pb-2 mb-8">
        Projects
      </h2>

      <div className="flex flex-col w-full gap-6">
        <PyfDashboard />
        <PyfSite />
      </div>
    </motion.section>
  );
}
