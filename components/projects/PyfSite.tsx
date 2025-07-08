"use client";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function pyfSite() {
  return (
    <article className="group flex flex-col gap-2 bg-gradient-to-b from-sky-400/80 to-purple-300/70 dark:from-sky-400/30 dark:to-purple-800/30 rounded-2xl px-2.5 py-8 cursor-pointer transition-all hover:-translate-y-1">
      {/* Project top section */}
      <div className="flex justify-between items-center px-2.5 mb-2">
        {/* Project text section */}
        <div className="flex flex-col gap-1 text-gray-900 drop-shadow-[0_0_3px_#d1d5db] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#EFBF04] leading-8">
          <h3 className="text-2xl font-semibold leading-8">Showcase Website</h3>
          <p className="text-base font-medium leading-8">Print Your Feet —</p>
          <p className="text-sm font-normal">
            Website presenting company solutions
          </p>
          <small className="text-sm font-semibold dark:font-normal leading-8 text-gray-900 dark:text-yellow-400">
            2025
          </small>
        </div>
        <MoveRight className="text-4xl text-gray-900 drop-shadow-[0_0_3px_#d1d5db] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#EFBF04]" />
      </div>

      {/* Image section with group-hover scaling */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/img/projects/project-pyfShowcaseSite.png"
          alt="Screenshot of the company website"
          width={300}
          height={200}
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    </article>
  );
}
