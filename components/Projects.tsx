"use client";

import PyfDashboard from "./projects/PyfDashboard";
import PyfSite from "./projects/PyfSite";

export default function Projects() {
  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-2 md:px-16 py-2.5 mb-10 scroll-mt-20"
      id="projects"
    >
      <h2 className="text-5xl bg-gradient-to-r from-fuchsia-500  via-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] mb-10">
        Projects
      </h2>

      <div className="flex flex-col w-full gap-6">
        <PyfDashboard />
        <PyfSite />
      </div>
    </section>
  );
}
