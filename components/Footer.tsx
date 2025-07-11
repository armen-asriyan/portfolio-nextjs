"use client";
import { MoveUp, MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) {
  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <footer className="w-full bg-background flex flex-col items-center justify-center gap-2.5 pt-2.5 pb-8 border-t border-gray-300/30 relative">
      <div className="w-full py-8 px-8 md:px-16">
        <div className="w-full flex md:flex-row flex-col items-start justify-center gap-8">
          {/* Logo  */}
          <div className="flex w-full items-center">
            <Link
              href="/"
              className="hover:opacity-90 transition-opacity duration-300 w-fit"
              onClick={() => handleClick("home")}
            >
              <Image
                src="/media/logo/logo-light.avif"
                alt="Logo"
                width={64}
                height={64}
                className="w-14 h-30 lg:w-14 lg:h-30 object-cover rounded-2xl border border-gray-900"
              />
            </Link>
          </div>
          {/* Nav and social links */}
          <div className="flex w-full flex-col md:flex-row items-start justify-center gap-5">
            {/* Nav links  */}
            <div className="w-full flex flex-col items-start justify-center gap-4 px-2">
              <p className="uppercase text-xs text-gray-700 dark:text-gray-300/80">
                NAV
              </p>
              <Link
                href="/"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                onClick={() => handleClick("home")}
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                onClick={() => handleClick("projects")}
              >
                Projects
              </Link>
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
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
              >
                GitHub
                <MoveUpRight className="inline-block" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/armen-asriyan/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
              >
                LinkedIn
                <MoveUpRight className="inline-block" />
              </a>

              {/* Mail */}
              <a
                href="mailto:hi@armenasriyan.dev"
                rel="noopener noreferrer"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
              >
                hi@armenasriyan.dev
                <MoveUpRight className="inline-block" />
              </a>
              <a
                href="/cv/Armen_Asriyan_CV.pdf"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV / Resume (PDF)
                <MoveUpRight className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2.5 border-t border-gray-300/30 pt-5 px-8 md:px-16">
        <p className="w-full text-sm text-gray-700 dark:text-gray-300/80 leading-6 text-center md:text-left">
          &copy; {new Date().getFullYear()} Armen Asriyan. All rights reserved.
        </p>
        <div className="w-full flex items-center justify-center flex-1/2">
          <a
            className="w-fit text-sm text-gray-700 dark:text-gray-300/80 text-center underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white inline-flex items-end justify-center"
            href="#"
          >
            Scroll to top{" "}
            <MoveUp className="inline-block leading-0 -translate-y-[0.5px]" />
          </a>
        </div>
        {/* Legal Notice | Privacy Policy */}
        <div className="w-full flex items-center justify-center gap-2.5 ">
          <Link
            href="/legal"
            className="text-sm text-gray-700 dark:text-gray-300/80 text-center underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
            onClick={() => handleClick("")}
          >
            Legal Notice
          </Link>
          <span className="text-sm text-gray-700 dark:text-gray-300/80 text-center">
            |
          </span>
          <Link
            href="/privacy"
            className="text-sm text-gray-700 dark:text-gray-300/80 text-center underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
            onClick={() => handleClick("")}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
