"use client";

import { motion } from "motion/react";

import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { SiGithub, SiLinkedin } from "react-icons/si";
import CatThoughts from "./CatThoughts";
import LofiRadio from "./LofiRadio";

export default function LeftSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col justify-between h-screen overflow-y-auto w-screen md:w-1/4 z-50 md:z-0 px-14 py-20 bg-background transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:sticky border-r border-muted shadow-lg overflow-hidden`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 inline-flex md:hidden items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        <X className="size-11" />
      </Button>

      <motion.div
        className="flex flex-col items-center justify-between h-fit gap-2"
        initial="hidden"
        animate={open ? "visible" : "hidden"}
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
        {/* Lofi Radio */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.5,
              },
            },
          }}
        >
          <LofiRadio />
        </motion.div>
        {/* Cat and its thoughts */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 border border-gray-700 dark:border-gray-300 rounded-xl w-full min-h-[150px] relative p-2"
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.5,
              },
            },
          }}
        >
          <div className="absolute top-[-20px] right-[-10px]">
            <Image
              src="/img/cat-eeping.gif"
              alt="Lofi gif"
              width={100}
              height={40}
              className="h-auto w-[100px]"
              unoptimized
            />
          </div>
          <CatThoughts />
        </motion.div>
      </motion.div>
      {/* Actions and links */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4 mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{
          delay: open ? 0.2 : 0, // Animate after the staggered items
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* 
        <a
          href="https://github.com/armenasriyan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base text-gray-300 w-fit underline transition-colors duration-300 hover:text-white"
          aria-label="GitHub"
        >
           <SiGithub className="size-8" /> 
        </a>

        <a
          href="https://www.linkedin.com/in/armen-asriyan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base text-gray-300 w-fit underline transition-colors duration-300 hover:text-white"
          aria-label="LinkedIn"
        >
         <SiLinkedin className="size-8" /> 
        </a>*/}
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="text-sm text-gray-300 hover:text-gray-100 w-fit bg-gradient-to-t from-purple-800 to-violet-900 "
        >
          <a
            href="/cv/Armen_Asriyan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV / Resume"
          >
            Download CV / Resume
            <Download className="inline-block" />
          </a>
        </Button>
      </motion.div>
    </aside>
  );
}
