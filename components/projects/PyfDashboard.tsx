"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import Link from "next/link";
// import { MoveRight } from "lucide-react";

export default function PyfDashboard() {
  const t = useTranslations("projects.project1");

  return (
    // <Link
    //   href="https://printyourfeet.com"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    <article className="group h-fit w-full flex flex-col gap-2 bg-gradient-to-b from-purple-500/70 to-indigo-400/80 dark:from-purple-900/30 dark:to-indigo-800/30 rounded-2xl px-2.5 py-8 cursor-pointer transition-all hover:-translate-y-1">
      {/* Project top section */}
      <div className="flex justify-between items-center px-2.5 mb-2">
        {/* Project text section */}
        <div className="flex flex-col gap-1 text-neutral-100 dark:text-gray-300 drop-shadow-[0_0_3px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_5px_#EFBF04] leading-8">
          <h3 className="text-2xl font-semibold leading-8">{t("title")}</h3>
          <p className="text-base font-medium leading-8" translate="no">
            Print Your Feet —
          </p>
          <p className="text-sm font-normal">{t("description")}</p>
          <small className="text-sm font-semibold dark:font-normal leading-8 text-gray-900 dark:text-yellow-400">
            2025
          </small>
        </div>

        {/* Arrow icon */}
        {/* <MoveRight className="text-4xl text-gray-900 drop-shadow-[0_0_3px_#d1d5db] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#EFBF04] group-hover:translate-x-1 transition-transform duration-300 ease-in-out" /> */}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap w-full gap-2 my-2 text-sm font-semibold px-2.5">
        <span
          className="rounded-md px-3 py-1 text-gray-900 dark:text-gray-300 bg-gray-100/70 dark:bg-gray-800"
          translate="no"
        >
          React
        </span>
        <span
          className="rounded-md px-3 py-1 text-gray-900 dark:text-gray-300 bg-gray-100/70 dark:bg-gray-800"
          translate="no"
        >
          Express
        </span>
        <span
          className="rounded-md px-3 py-1 text-gray-900 dark:text-gray-300 bg-gray-100/70 dark:bg-gray-800"
          translate="no"
        >
          MongoDB
        </span>
        <span
          className="rounded-md px-3 py-1 text-gray-900 dark:text-gray-300 bg-gray-100/70 dark:bg-gray-800"
          translate="no"
        >
          Cloudinary
        </span>
      </div>

      {/* Image section with group-hover scaling */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/media/projects/project-pyfDashboard.png"
          alt="Screenshot of the Dashboard application"
          width={300}
          height={200}
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    </article>
    // </Link>
  );
}
