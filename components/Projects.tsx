"use client";

import PyfSite from "./projects/PyfSite";
import PyfApp from "./projects/PyfApp";

export default function Projects() {
  return (
    <section className="h-fit w-full flex flex-col items-start justify-start p-6 lg:ml-30 mt-10 md:mt-0">
      <h2 className="text-2xl 2 mb-8 text-zinc-900 dark:text-zinc-200">
        Projects
      </h2>

      <div className="flex flex-col w-full gap-6">
        <PyfSite />
        <PyfApp />
      </div>
    </section>
  );
}
