"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function CatThoughts({
  isRadioMuted,
}: {
  isRadioMuted: boolean;
}) {
  const t = useTranslations("catThoughts.messages");

  const words = useMemo(
    () => [
      t("0"),
      t("1"),
      t("2"),
      t(isRadioMuted ? "3-muted" : "3"),
      t(isRadioMuted ? "4-muted" : "4"),
      t("5"),
      t("6"),
      t("7"),
      t(isRadioMuted ? "8-muted" : "8"),
      t("9"),
      t("10"),
      t("11"),
      t("12"),
      t("13"),
    ],
    [t, isRadioMuted]
  );

  // Show full sentence every 3s (optimisation for screen readers)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % words.length);
    }, 3000 + words[currentIndex]?.length * 100); // match delay + type speed

    return () => clearInterval(interval);
  }, [currentIndex, words]);

  return (
    /**
     * Note: break-words is required for the text to wrap
     * whitespace-pre-line is required for the '\n' to work
     */
    <h3
      className="text-2xl font-bold text-center text-gray-900 dark:text-gray-300 p-7 break-words whitespace-pre-line max-w-full"
      style={{ fontFamily: "var(--font-vt323)" }}
    >
      {/* Visually animated version */}
      <span aria-hidden="true">
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle=""
          typeSpeed={100}
          deleteSpeed={0}
          delaySpeed={3000}
        />
      </span>
      {/* Screen reader version (updated with full sentence every 3s) */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {words[currentIndex]}
      </span>
    </h3>
  );
}
