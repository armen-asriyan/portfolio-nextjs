"use client";

import { LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LuHouse, LuLightbulb, LuUserRound, LuMail } from "react-icons/lu";

export default function RightSidebar({
  open,
  onClose,
  activeSection,
}: {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
}) {
  return (
    <aside
      className={`fixed top-0 right-0 flex flex-col justify-between h-screen overflow-y-auto w-screen md:w-1/4 z-50 px-5 py-20 bg-background transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 md:sticky md:block border-r border-muted shadow-lg`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 inline-flex md:hidden items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        {/* Control react-icons size with Tailwind */}
        <LuX className="size-11" />
      </Button>
      {/* Nav buttons */}
      <div className="flex flex-col items-start justify-start gap-4">
        <a
          href="#home"
          className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  ${
            activeSection === "home"
              ? "bg-primary text-primary-foreground"
              : "text-gray-300"
          } hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer`}
          onClick={onClose}
        >
          <LuHouse className="size-6 mr-1" />
          Home
        </a>
        <a
          href="#projects"
          className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer ${
            activeSection === "projects"
              ? "bg-primary text-primary-foreground"
              : "text-gray-300"
          }`}
          onClick={onClose}
        >
          <LuLightbulb className="size-6 mr-1" />
          Projects
        </a>
        {/* <a
          href="#about"
          className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer"
          onClick={onClose}
        >
          <LuUserRound className="size-6 mr-1" />
          About
        </a> */}
        <a
          href="#contact"
          className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary hover:text-primary-foreground px-3 w-full h-12 cursor-pointer ${
            activeSection === "contact"
              ? "bg-primary text-primary-foreground"
              : "text-gray-300"
          }`}
          onClick={onClose}
        >
          <LuMail className="size-6 mr-1" />
          Contact
        </a>
      </div>
      <ThemeSwitcher />
    </aside>
  );
}
