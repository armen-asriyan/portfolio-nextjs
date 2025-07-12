"use client";

import { motion } from "motion/react";

import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { SiGithub, SiLinkedin } from "react-icons/si";
import CatThoughts from "./CatThoughts";
import LofiRadio from "./LofiRadio";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function LeftSidebar({
  open,
  onClose,
  isMobile,
}: {
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}) {
  const t = useTranslations("leftSideBar");
  const tGeneral = useTranslations("generalMessages");
  const tNav = useTranslations("nav");

  const [isRadioMuted, setIsRadioMuted] = useState(false);
  const purrAudioRef = useRef<HTMLAudioElement>(null);
  const meowAudioRef = useRef<HTMLAudioElement>(null);

  const handlePurr = () => {
    if (
      typeof window !== "undefined" &&
      navigator.userActivation.hasBeenActive &&
      purrAudioRef.current &&
      !isMobile
    ) {
      purrAudioRef.current.volume = 0.5;
      purrAudioRef.current.play();
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col items-center justify-between h-screen overflow-y-auto w-screen lg:w-1/4 z-50 lg:z-0 px-14 py-20 bg-background transition-transform duration-300 ease-in-out lg:visible ${
        open ? "translate-x-0 visible" : "-translate-x-full invisible "
      } lg:translate-x-0 lg:sticky border-r border-muted shadow-lg overflow-hidden`}
      inert={!open ? true : false}
      tabIndex={open ? 0 : -1}
      aria-label={t("ariaLabels.sectionTitle")}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 inline-flex lg:hidden items-center justify-center cursor-pointer"
        onClick={onClose}
        tabIndex={-1}
        aria-label={t("ariaLabels.closeSidebar")}
      >
        <X className="size-11" />
      </Button>

      <motion.div
        className="flex flex-col items-center justify-between h-[60%] lg:h-[50%] sm:w-[70%] md:w-[50%] lg:w-full gap-4"
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
          className="w-full h-full"
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
          <LofiRadio
            isMuted={isRadioMuted}
            setIsMuted={setIsRadioMuted}
            closeSidebar={onClose}
          />
        </motion.div>
        {/* Cat and its thoughts */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 border border-gray-700 dark:border-gray-300 rounded-xl w-full h-full min-h-[200px]  relative p-2"
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
          <div className="absolute top-[-20px] right-[-10px] w-[100px] h-[43px]">
            <Image
              src="/media/cat-eeping.gif"
              alt="Lofi gif"
              fill
              priority
              className="h-auto w-auto"
              unoptimized
              onClick={() => meowAudioRef.current?.play()}
              onMouseEnter={handlePurr}
              onMouseLeave={() => purrAudioRef.current?.pause()}
            />

            <audio ref={purrAudioRef} loop>
              <source src="/audio/purr.flac" type="audio/flac" />
              {tGeneral("unsupportedAudio")}
            </audio>

            <audio ref={meowAudioRef}>
              <source src="/audio/meow.flac" type="audio/flac" />
              {tGeneral("unsupportedAudio")}
            </audio>
          </div>
          <CatThoughts isRadioMuted={isRadioMuted} />
        </motion.div>
      </motion.div>
      {/* Actions and links */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4 mb-4 sm:gap-6 sm:mb-6 w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{
          delay: open ? 0.2 : 0, // Animate after the staggered items
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <a
          href={`/cv/${tNav("cvLink")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV / Resume"
          className="text-sm text-gray-300 hover:text-gray-100 md:text-base md:w-fit bg-gradient-to-t from-purple-800 to-violet-900 w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-gradient-to-b hover:from-violet-900 hover:to-purple-800"
        >
          {tNav("cv")}
          <Download className="inline-block" />
        </a>
      </motion.div>
    </aside>
  );
}
