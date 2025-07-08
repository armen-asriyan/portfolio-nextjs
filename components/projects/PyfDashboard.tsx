"use client";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function PyfDashboard() {
  return (
    <article className="group flex flex-col gap-2 bg-gradient-to-b from-purple-500/70 to-indigo-400/80 dark:from-purple-900/30 dark:to-indigo-800/30 rounded-2xl px-2.5 py-8 cursor-pointer transition-all hover:-translate-y-1">
      {/* Project top section */}
      <div className="flex justify-between items-center px-2.5 mb-2">
        {/* Project text section */}
        <div className="flex flex-col gap-1 text-neutral-100 dark:text-gray-300 drop-shadow-[0_0_3px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_5px_#EFBF04] leading-8">
          <h3 className="text-2xl font-semibold leading-8">Dashboard</h3>
          <p className="text-base font-medium leading-8">Print Your Feet —</p>
          <p className="text-sm font-normal">
            Data management and visualisation interface
          </p>
          <small className="text-sm font-semibold dark:font-normal leading-8 text-gray-900 dark:text-yellow-400">
            2025
          </small>
        </div>
        <MoveRight className="text-4xl text-neutral-100 dark:text-gray-300 drop-shadow-[0_0_3px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_5px_#EFBF04]" />
      </div>

      {/* Image section with group-hover scaling */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/img/projects/project-pyfDashboard.png"
          alt="Screenshot of the Dashboard application"
          width={300}
          height={200}
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    </article>
  );
}
