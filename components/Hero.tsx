"use client";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="h-fit w-full lg:w-1/2 flex flex-col items-start justify-start px-6 lg:p-20 lg:m-40 mt-4 md:mt-0">
      <h1 className="text-2xl text-zinc-900 dark:text-zinc-200 pb-2 mb-4 ">
        hi, i&apos;m Armen
      </h1>

      <p className="text-lg leading-8 text-zinc-900 dark:text-zinc-400">
        i like breaking things (and sometimes fixing them).
        <br />
        <br />
        if I&apos;m not coding, you can find me not sleeping.
      </p>
      <SocialIcons />
    </section>
  );
}
