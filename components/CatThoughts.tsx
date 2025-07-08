"use client";

import { Typewriter } from "react-simple-typewriter";

export default function CatThoughts() {
  return (
    <h2
      className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-gray-300 p-7"
      style={{ fontFamily: "var(--font-vt323)" }}
    >
      <Typewriter
        words={[
          "Did you push that last commit? ... It’s probably fine.",
          "Maybe the bugs are features...",
          "I’m eeping, stop judging me.",
          "Purrr...formance optimization.",
          "I don’t know what I’m doing, but I’m doing it well.",
          "This beat slaps.",
          "REST? Say less.",
          "Portfolio? More like purrfolio.",
        ]}
        loop={0} // Infinite
        cursor
        cursorStyle=""
        typeSpeed={100}
        deleteSpeed={0}
        delaySpeed={3000}
      />
    </h2>
  );
}
