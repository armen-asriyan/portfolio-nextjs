"use client";

import { useTheme } from "next-themes";
import { ComponentType, useEffect, useRef, useState } from "react";

type SkillIconProps = {
  icon: ComponentType<{ className?: string; ref?: React.Ref<SVGSVGElement> }>;
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

  const [title, setTitle] = useState<string>("");
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svgTitle = svgRef.current.querySelector("title")?.textContent;
      if (svgTitle) setTitle(svgTitle);
    }
  }, []);

  const isDarkTheme = resolvedTheme === "dark";

  const baseClasses =
    "size-11 md:size-14 p-2 duration-300 ease-in-out transition-all hover:scale-110 hover:-translate-y-[1px] opacity-80 hover:opacity-100";
  return (
    <div
      className={`group relative rounded-md border-2 border-gray-300 dark:border-accent text-gray-900  dark:text-gray-300 cursor-pointer transition-all hover:shadow-[0_0_10px_#d1d5db]`}
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
      <p
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-xs text-center z-50 pointer-events-none font-bold text-white 
                   bg-black/50 rounded-md transition-all duration-300 ease-in-out 
                   opacity-0 group-hover:opacity-100 p-1"
      >
        {title}
      </p>
      <Icon className={`${baseClasses}`} ref={svgRef} />
    </div>
  );
}
