"use client";

import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";

export default function CatThoughts({
  isRadioMuted,
}: {
  isRadioMuted: boolean;
}) {
  const t = useTranslations("catThoughts.messages");

  const words = [
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
  ];

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
        words={words}
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
