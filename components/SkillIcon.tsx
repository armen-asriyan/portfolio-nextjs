"use client";

import { useTheme } from "next-themes";
import { ComponentType } from "react";

type SkillIconProps = {
  icon: ComponentType<{ className?: string }>;
  hoverColor?: string;
  darkIcon?: boolean;
};

export default function SkillIcon({
  icon: Icon,
  hoverColor,
  darkIcon,
}: SkillIconProps) {
  const {
    //  theme,
    resolvedTheme,
  } = useTheme();

  const isDarkTheme = resolvedTheme === "dark";

  const baseClasses =
    "size-11 md:size-14 p-2 duration-300 ease-in-out transition-all hover:scale-110 hover:-translate-y-[1px] opacity-80 hover:opacity-100";

  return (
    <div
      className={`rounded-md border-2 border-gray-300 dark:border-accent text-gray-900  dark:text-gray-300 cursor-pointer transition-all hover:shadow-[0_0_10px_#d1d5db]`}
      style={{
        color: isDarkTheme ? "#e5e7eb" : undefined,
        transition: "color 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        if (hoverColor && !(isDarkTheme && darkIcon))
          e.currentTarget.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        if (hoverColor && !(isDarkTheme && darkIcon))
          e.currentTarget.style.color = "";
      }}
    >
      <Icon className={`${baseClasses}`} />
    </div>
  );
}
