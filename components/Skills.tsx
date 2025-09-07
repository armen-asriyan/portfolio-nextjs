"use client";

import { useState } from "react";
import useIsMounted from "@/hooks/useIsMounted";
import SkillIcon from "@/components/SkillIcon";
import ScrollIndicator from "./animations/ScrollIndicator";
import { motion } from "motion/react";

import SkillList from "@/components/ui/SkillList";

import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");

  const isMounted = useIsMounted();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Scroll Indicator */}
      <ScrollIndicator isVisible={isVisible} scrollTo="skills" />
      <motion.section
        id="skills"
        className="h-fit w-full flex flex-col items-start justify-start px-6 md:px-16 py-2.5 mb-20 scroll-mt-25"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.9 }}
        onAnimationStart={() => setIsVisible(true)}
      >
        <h2 className="text-5xl bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-600 dark:from-fuchsia-500  dark:via-purple-500 dark:to-indigo-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] pb-2 mb-8">
          {t("title")}
        </h2>

        <motion.div
          className="flex flex-wrap  gap-4 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: isMounted ? 1 : 0,
              transition: {
                staggerChildren: 0.1, // Delay between each child animation
              },
            },
          }}
        >
          {SkillList.map((skill, index) => (
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
              {isMounted ? (
                <SkillIcon
                  icon={skill.icon}
                  hoverColor={skill.hoverColor}
                  darkIcon={skill.darkIcon}
                />
              ) : (
                <div className="w-10 h-10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
