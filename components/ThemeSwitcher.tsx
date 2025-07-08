"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="inline-flex items-center justify-end w-full text-gray-900 dark:text-gray-300">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="inline-flex items-center justify-center cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun className="size-6" />
        ) : (
          <Moon className="size-6" />
        )}
      </Button>
    </div>
  );
}
