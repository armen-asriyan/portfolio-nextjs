"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { MoveUp, MoveUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

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
                alt="Armen Asriyan Logo"
                width={64}
                height={64}
                className="w-14 h-30 lg:w-14 lg:h-30 object-cover rounded-2xl border border-gray-900"
              />
            </Link>
          </div>
          {/* Nav and social links */}
          <div className="flex w-full flex-col md:flex-row items-start justify-center gap-5">
            {/* Nav links  */}
            <nav
              className="w-full flex flex-col items-start justify-center gap-4 px-2"
              aria-label={tNav("ariaLabels.title")}
            >
              <p className="uppercase text-xs text-gray-700 dark:text-gray-300/80">
                NAV
              </p>
              <Link
                href="/#top"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                onClick={() => handleClick("home")}
              >
                {tNav("home")}
              </Link>
              <Link
                href="/#projects"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                onClick={() => handleClick("projects")}
              >
                {tNav("projects")}
              </Link>
            </nav>

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
                translate="no"
              >
                LinkedIn
                <MoveUpRight className="inline-block" />
              </a>

              {/* Mail */}
              <a
                href="mailto:hi@armenasriyan.dev"
                rel="noopener noreferrer"
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                translate="no"
              >
                hi@armenasriyan.dev
                <MoveUpRight className="inline-block" />
              </a>
              <a
                href={`/cv/${tNav("cvLink")}`}
                className="text-sm text-gray-900 dark:text-gray-100 underline transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                translate="yes"
              >
                {tNav("cv")}
                <MoveUpRight className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 border-t border-gray-300/30 pt-5 px-6 md:px-16">
        {/* Copyright */}
        <p className="text-center text-sm text-gray-700 dark:text-gray-300/80 leading-6">
          &copy; {new Date().getFullYear()} Armen Asriyan. {t("copyright")}
        </p>

        {/* Navigation */}
        <nav
          className="flex items-center justify-center"
          aria-label={tNav("ariaLabels.title")}
        >
          <Link
            href="/legal"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-2 text-sm text-gray-700 dark:text-gray-300/80 underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
            onClick={() => handleClick("")}
          >
            {tNav("legalNotice")}
          </Link>
          <span
            className="inline-flex items-center justify-center w-fit min-h-[44px] text-sm text-gray-700 dark:text-gray-300/80"
            aria-hidden="true"
          >
            |
          </span>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-2 text-sm text-gray-700 dark:text-gray-300/80 underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
            onClick={() => handleClick("")}
          >
            {tNav("privacyPolicy")}
          </Link>
        </nav>

        {/* Scroll to Top */}
        <div className="flex items-center justify-center">
          <a
            href="#top"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-2 text-sm text-gray-700 dark:text-gray-300/80 underline underline-offset-2 transition-colors duration-300 hover:text-gray-400 dark:hover:text-white"
            onClick={() => window.scrollTo(0, 0)}
          >
            {tNav("scrollToTop")}
            <MoveUp className="ml-1 -translate-y-[0.5px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
