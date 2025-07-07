"use client";

import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="inline-flex items-center justify-end w-full">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="inline-flex md:hidden items-center justify-center cursor-pointer"
      >
        {theme === "dark" ? (
          <LuSun className="size-6" />
        ) : (
          <LuMoon className="size-6" />
        )}
      </Button>
    </div>
  );
}
