"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  House,
  Lightbulb,
  Mail,
  //  ToolCase,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import useIsMounted from "@/hooks/useIsMounted";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function RightSidebar({
  open,
  onClose,
  activeSection,
  setActiveSection,
  setIsLocked,
  isMobile,
}: {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  setIsLocked: (clicked: boolean) => void;
  isMobile: boolean;
}) {
  const t = useTranslations("rightSideBar");
  const tNav = useTranslations("nav");

  const isMounted = useIsMounted();

  const handleClick = (section: string) => {
    setIsLocked(true);
    setActiveSection(section);
    if (isMobile) onClose();
  };

  return (
    <aside
      className={`fixed top-0 right-0 flex flex-col justify-between h-screen overflow-y-auto w-screen lg:w-1/4 z-50 lg:z-0 px-5 py-20 bg-background transition-transform duration-300 ease-in-out lg:visible ${
        open ? "translate-x-0 visible" : "translate-x-full invisible "
      } lg:translate-x-0 lg:sticky border-r border-muted shadow-lg overflow-hidden`}
      inert={!open ? true : false}
      tabIndex={open ? 0 : -1}
      aria-label={t("ariaLabels.sectionTitle")}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 inline-flex lg:hidden items-center justify-center cursor-pointer"
        onClick={onClose}
        tabIndex={-1}
        aria-label={t("ariaLabels.closeSidebar")}
      >
        {/* Control react-icons size with Tailwind */}
        {isMounted ? <X className="size-11" /> : <div className="w-11 h-11" />}
      </Button>

      {/* Nav buttons */}
      <motion.div
        className="flex flex-col items-start justify-start gap-4"
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
        {/* Home */}
        <Link href="/#top" className="w-full">
          <motion.div
            className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  ${
              activeSection === "home" || activeSection === "skills"
                ? "bg-primary text-primary-foreground"
                : "text-gray-900 dark:text-gray-300"
            } hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-900 px-3 w-full h-12 cursor-pointer`}
            onClick={() => handleClick("home")}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 16,
                  duration: 0.5,
                },
              },
            }}
          >
            {isMounted ? (
              <House className="size-9 lg:size-8 mr-3" />
            ) : (
              <div className="w-11 h-11" />
            )}
            {tNav("home")}
          </motion.div>
        </Link>

        {/* Skills */}
        {/* <Link href="/#skills" className="w-full">
          <motion.div
            className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-900 px-3 w-full h-12 cursor-pointer ${
              activeSection === "skills"
                ? "bg-primary text-primary-foreground"
                : "text-gray-900 dark:text-gray-300"
            }`}
            onClick={() => handleClick("skills")}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 16,
                  duration: 0.5,
                },
              },
            }}
          >
            {isMounted ? (
              <ToolCase className="size-9 lg:size-8 mr-3" />
            ) : (
              <div className="w-11 h-11" />
            )}
            Skills
          </motion.div>
        </Link> */}

        {/* Projects */}
        <Link href="/#projects" className="w-full">
          <motion.div
            className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-900 px-3 w-full h-12 cursor-pointer ${
              activeSection === "projects"
                ? "bg-primary text-primary-foreground"
                : "text-gray-900 dark:text-gray-300"
            }`}
            onClick={() => handleClick("projects")}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 16,
                  duration: 0.5,
                },
              },
            }}
          >
            {isMounted ? (
              <Lightbulb className="size-9 lg:size-8 mr-3" />
            ) : (
              <div className="w-11 h-11" />
            )}
            {tNav("projects")}
          </motion.div>
        </Link>

        {/* Contact */}
        <Link href="/#contact" className="w-full">
          <motion.div
            className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-900 px-3 w-full h-12 cursor-pointer ${
              activeSection === "contact"
                ? "bg-primary text-primary-foreground"
                : "text-gray-900 dark:text-gray-300 "
            }`}
            onClick={() => handleClick("contact")}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 16,
                  duration: 0.5,
                },
              },
            }}
          >
            {isMounted ? (
              <Mail className="size-9 lg:size-8 mr-3" />
            ) : (
              <div className="w-11 h-11" />
            )}
            {tNav("contact")}
          </motion.div>
        </Link>
      </motion.div>

      {/* Theme Switcher */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          delay: open ? 0.2 : 0, // Animate after the staggered items
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex items-center justify-between w-full"
      >
        <div className="w-full ml-6">
          <LocaleSwitcher />
        </div>
        <ThemeSwitcher />
      </motion.div>
    </aside>
  );
}
