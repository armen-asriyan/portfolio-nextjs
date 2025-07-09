"use client";
import { MoveUp, MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-background flex flex-col items-center justify-center gap-2.5 px-8 md:px-16 pt-2.5 pb-8 border-t border-gray-300/30 relative">
      {/* Footer Top section */}
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5 py-8">
        {/* Logo  */}
        <div className="w-full flex items-center justify-start md:justify-center">
          <div className="w-12 h-24 bg-gray-200 rounded-2xl flex items-center justify-center"></div>
        </div>
        {/* Nav and social links */}
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5">
          {/* Nav links  */}
          <div className="w-full flex flex-col items-start justify-center gap-4 px-2">
            <p className="uppercase text-xs text-gray-700 dark:text-gray-300/80">
              NAV
            </p>
            <a
              href="/"
              className="text-sm text-gray-900 dark:text-white underline transition-colors duration-300 hover:text-gray-400"
            >
              Home
            </a>
            <a
              href="/#projects"
              className="text-sm text-gray-900 dark:text-white underline transition-colors duration-300 hover:text-gray-400"
            >
              Projects
            </a>
          </div>

          {/* Social links  */}
          <div className="w-full flex flex-col items-start justify-center gap-4 px-2">
            <p className="uppercase text-xs text-gray-700 dark:text-gray-300/80">
              SOCIAL
            </p>

            {/* GitHub */}
            <a
              href="https://github.com/armen-asriyan"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm text-gray-900 dark:text-white underline transition-colors duration-300 hover:text-gray-400"
            >
              GitHub
              <MoveUpRight className="inline-block" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/armen-asriyan/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm text-gray-900 dark:text-white underline transition-colors duration-300 hover:text-gray-400"
            >
              LinkedIn
              <MoveUpRight className="inline-block" />
            </a>

            {/* Mail */}
            <a
              href="mailto:hi@armenasriyan.dev"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 dark:text-white underline transition-colors duration-300 hover:text-gray-400"
            >
              hi@armenasriyan.dev
              <MoveUpRight className="inline-block" />
            </a>
            <a
              href="/cv/Armen_Asriyan_CV.pdf"
              className="text-sm text-gray-900 dark:text-white underline transition-colors duration-300 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV / Resume (PDF)
              <MoveUpRight className="inline-block" />
            </a>
          </div>
        </div>
      </div>
      {/* Legal */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2.5 py-2.5">
        <p className="w-full text-sm text-gray-900 dark:text-white text-center leading-6 ">
          &copy; {new Date().getFullYear()} Armen Asriyan.{" "}
          <br className="md:hidden" /> All rights reserved.
        </p>
        <a
          className="w-full text-sm text-gray-700 dark:text-gray-300/80 text-center underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white inline-flex items-end justify-center"
          href="#"
        >
          Scroll to top{" "}
          <MoveUp className="inline-block leading-0 -translate-y-[0.5px]" />
        </a>
        {/* Legal Notice | Privacy Policy */}
        <div className="w-full flex items-center justify-center gap-2.5">
          <Link
            href="/legal"
            className="text-sm text-gray-700 dark:text-gray-300/80 text-center underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
          >
            Legal Notice
          </Link>
          <span className="text-sm text-gray-700 dark:text-gray-300/80 text-center">
            |
          </span>
          <Link
            href="/privacy"
            className="text-sm text-gray-700 dark:text-gray-300/80 text-center underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
