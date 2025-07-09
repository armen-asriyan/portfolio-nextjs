"use client";

import { Typewriter } from "react-simple-typewriter";

export default function CatThoughts({
  isRadioMuted,
}: {
  isRadioMuted: boolean;
}) {
  return (
    /**
     * Note: break-words is required for the text to wrap
     * whitespace-pre-line is required for the '\n' to work
     */
    <h2
      className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-center text-gray-900 dark:text-gray-300 p-7 break-words whitespace-pre-line max-w-full"
      style={{ fontFamily: "var(--font-vt323)" }}
    >
      <Typewriter
        words={[
          "Did you push that last commit?\n ...",
          "Meh, It's probably fine.",
          "Maybe the bugs are features...",
          isRadioMuted
            ? "This beat...\n it's muted? Rude."
            : "This beat slaps.",
          isRadioMuted ? "I was vibing, but ok." : "Certified banger alert.",
          "I'm eeping, stop judging me.",
          ":3",
          "Purrr...formance optimization.",
          isRadioMuted ? "No jams today, huh?" : "Purrrfect tempo.",
          "I don't know what I'm doing,\n but I'm doing it well.",
          "REST? Say less.",
          "=^-^=",
          "Portfolio? More like purrfolio.",
          "Click me",
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
