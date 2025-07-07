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
  SiCss3,
  SiFigma,
  SiWordpress,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
  SiGithub,
} from "react-icons/si";
import { SkillIcon } from "@/components/SkillIcon";

export default function Skills() {
  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-2 md:px-16 py-2.5 mb-10"
      //   id="skills"
    >
      <h2 className="text-5xl bg-gradient-to-r from-fuchsia-500  via-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-5 md:grid-cols-6 gap-1 md:gap-4">
        <SkillIcon icon={SiJavascript} hoverColor="#f7df1e" />
        <SkillIcon icon={SiReact} hoverColor="#61dafb" />
        <SkillIcon icon={SiExpress} isDark />
        <SkillIcon icon={SiNodedotjs} hoverColor="#339933" />
        <SkillIcon icon={SiMongodb} hoverColor="#47a248" />
        <SkillIcon icon={SiPostgresql} hoverColor="#336791" />
        <SkillIcon icon={SiSqlite} hoverColor="#003b57" />
        <SkillIcon icon={SiHtml5} hoverColor="#e34f26" />
        <SkillIcon icon={SiCss3} hoverColor="#1572b6" />
        <SkillIcon icon={SiFigma} hoverColor="#f24e1e" />
        <SkillIcon icon={SiWordpress} hoverColor="#21759b" />
        <SkillIcon icon={SiGit} hoverColor="#f05032" />
        <SkillIcon icon={SiNextdotjs} isDark />
        <SkillIcon icon={SiTailwindcss} hoverColor="#38b2ac" />
        <SkillIcon icon={SiVercel} isDark />
        <SkillIcon icon={SiTypescript} hoverColor="#3178c6" />
        <SkillIcon icon={SiGithub} isDark />
      </div>
    </section>
  );
}
