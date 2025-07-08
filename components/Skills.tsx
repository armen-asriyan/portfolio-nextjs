"use client";

import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiHtml5,
  SiCss,
  SiFigma,
  SiWordpress,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import SkillIcon from "@/components/SkillIcon";

import { motion } from "motion/react";

export default function Skills() {
  const skills = [
    { icon: SiJavascript, hoverColor: "#f7df1e" },
    { icon: SiReact, hoverColor: "#61dafb" },
    { icon: SiExpress, darkIcon: true },
    { icon: SiNodedotjs, hoverColor: "#339933" },
    { icon: SiMongodb, hoverColor: "#47a248" },
    { icon: SiPostgresql, hoverColor: "#336791" },
    { icon: SiSqlite, hoverColor: "#003b57" },
    { icon: SiHtml5, hoverColor: "#e34f26" },
    { icon: SiCss, hoverColor: "#663399" },
    { icon: SiFigma, hoverColor: "#f24e1e" },
    { icon: SiWordpress, hoverColor: "#21759b" },
    { icon: SiGit, hoverColor: "#f05032" },
    { icon: SiNextdotjs, hoverColor: "#000", darkIcon: true },
    { icon: SiTailwindcss, hoverColor: "#38b2ac" },
    { icon: SiVercel, hoverColor: "#000", darkIcon: true },
    { icon: SiTypescript, hoverColor: "#3178c6" },
    { icon: SiGithub, hoverColor: "#000", darkIcon: true },
  ];

  return (
    <motion.section
      className="h-fit w-full flex flex-col items-start justify-start px-2 md:px-16 py-2.5 mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.9 }}
    >
      <h2 className="text-5xl bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-600 dark:from-fuchsia-500  dark:via-purple-500 dark:to-indigo-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] pb-2 mb-8">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-5 md:grid-cols-6 gap-1 md:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // Delay between each child animation
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                },
              },
            }}
          >
            <SkillIcon
              icon={skill.icon}
              hoverColor={skill.hoverColor}
              darkIcon={skill.darkIcon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
