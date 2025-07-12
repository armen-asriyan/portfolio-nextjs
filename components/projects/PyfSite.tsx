"use client";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PyfSite() {
  const t = useTranslations("projects.project2");

  return (
    <Link
      href="https://printyourfeet.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="group flex flex-col gap-2 bg-gradient-to-b from-sky-400/80 to-purple-300/70 dark:from-sky-400/30 dark:to-purple-800/30 rounded-2xl px-2.5 py-8 cursor-pointer transition-all hover:-translate-y-1">
        {/* Project top section */}
        <div className="flex justify-between items-center px-2.5 mb-2">
          <div className="flex flex-col gap-1 text-gray-900 drop-shadow-[0_0_3px_#d1d5db] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#EFBF04] leading-8">
            <h3 className="text-2xl font-semibold leading-8">{t("title")}</h3>
            <p className="text-base font-medium leading-8" translate="no">
              Print Your Feet —
            </p>
            <p className="text-sm font-normal">{t("description")}</p>
            <small className="text-sm font-semibold dark:font-normal leading-8 text-gray-900 dark:text-yellow-400">
              2025
            </small>
          </div>
          <MoveRight className="text-4xl text-gray-900 drop-shadow-[0_0_3px_#d1d5db] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#EFBF04] group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap w-full gap-2 my-2 text-sm font-semibold px-2.5">
          <span
            className="rounded-md px-3 py-1 text-gray-900 dark:text-gray-300 bg-gray-100/70 dark:bg-gray-800"
            translate="no"
          >
            WordPress
          </span>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/media/projects/project-pyfShowcaseSite.png"
            alt="Screenshot of the company website"
            width={300}
            height={200}
            className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </article>
    </Link>
  );
}
