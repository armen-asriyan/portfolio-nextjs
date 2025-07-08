"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  House,
  Lightbulb,
  //  UserRound,
  Mail,
  X,
} from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "motion/react";

export default function RightSidebar({
  open,
  onClose,
  activeSection,
}: {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
}) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <aside
      className={`fixed top-0 right-0 flex flex-col justify-between h-screen overflow-y-auto w-screen md:w-1/4 z-50 md:z-0 px-5 py-20 bg-background transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 md:sticky border-r border-muted shadow-lg overflow-hidden`}
      suppressHydrationWarning
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 inline-flex md:hidden items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        {/* Control react-icons size with Tailwind */}
        <X className="size-11" />
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
        <motion.a
          href="#home"
          className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  ${
            activeSection === "home"
              ? "bg-primary text-primary-foreground"
              : "text-gray-900 dark:text-gray-300"
          } hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer`}
          onClick={isSmallDevice ? onClose : undefined}
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
          <House className="size-6 mr-1" />
          Home
        </motion.a>
        <motion.a
          href="#projects"
          className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer ${
            activeSection === "projects"
              ? "bg-primary text-primary-foreground"
              : "text-gray-900 dark:text-gray-300"
          }`}
          onClick={isSmallDevice ? onClose : undefined}
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
          <Lightbulb className="size-6 mr-1" />
          Projects
        </motion.a>
        {/* <a
          href="#about"
          className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer"
          onClick={onClose}
        >
          <UserRound className="size-6 mr-1" />
          About
        </a> */}
        <motion.a
          href="#contact"
          className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer ${
            activeSection === "contact"
              ? "bg-primary text-primary-foreground"
              : "text-gray-900 dark:text-gray-300 "
          }`}
          onClick={isSmallDevice ? onClose : undefined}
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
          <Mail className="size-6 mr-1" />
          Contact
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          delay: open ? 0.2 : 0, // Animate after the staggered items
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <ThemeSwitcher />
      </motion.div>
    </aside>
  );
}
