"use client";

import { LuDownload, LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
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
      className={`fixed top-0 left-0 flex flex-col justify-between h-screen overflow-y-auto w-screen md:w-1/4 z-50 px-14 py-20 bg-background transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:sticky md:block border-r border-muted shadow-lg`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 inline-flex md:hidden items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        <LuX className="size-11" />
      </Button>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Lofi Radio */}
        <LofiRadio />
        {/* Cat and its thoughts */}
        <div className="flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-xl w-full min-h-[180px] relative p-2">
          <div className="absolute top-[-20px] right-[-10px]">
            <Image
              src="/img/cat-eeping.gif"
              alt="Lofi gif"
              width={100}
              height={40}
            />
          </div>
          <CatThoughts />
        </div>
        {/* Actions and links */}
        <div className="flex gap-4 mb-4">
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
          </a>
        </div>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-sm text-gray-300 w-fit bg-gradient-to-t from-purple-800 to-violet-900"
        >
          <a
            href="/cv/Armen_Asriyan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV / Resume"
          >
            Download CV / Resume
            <LuDownload className="inline-block" />
          </a>
        </Button>
      </div>
    </aside>
  );
}
