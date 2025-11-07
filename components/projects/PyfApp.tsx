"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PyfApp() {
  return (
    <article className="group flex flex-col gap-2 bg-white dark:bg-[#0A0A0A80] backdrop-blur-sm shadow-[0_0_5px_#99a1af70] rounded-2xl py-5 px-2 w-full lg:w-1/2">
      {/* Project top section */}
      <div className="flex justify-between items-center px-2.5 mb-2">
        <div className="flex flex-col gap-1 text-zinc-900 dark:text-zinc-400 leading-8">
          <Link
            href="https://app.printyourfeet.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Print Your Feet App"
            className="text-sm text-zinc-900 dark:text-zinc-400 flex items-center gap-2 w-fit mb-4 hover:bg-gray-300/10 dark:hover:bg-gray-300/10 rounded-lg py-1.5"
          >
            <Image
              src="https://printyourfeet.com/wp-content/uploads/2023/11/OFFICIAL-LOGO-PRINT-YOUR-FEET-WHITEX.png"
              alt="Print Your Feet"
              width={40}
              height={40}
              className="bg-black dark:bg-transparent rounded-full"
            />
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 leading-8">
                Print Your Feet - App
              </h3>
              app.printyourfeet.com
              <ExternalLink className="ml-2 inline-block w-4 h-4" />
            </div>
          </Link>

          <p className="text-sm font-normal">
            App to get foot measurements based on photos taken with your phone.
          </p>
        </div>
      </div>
    </article>
  );
}
