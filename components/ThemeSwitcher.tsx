"use client";
import useIsMounted from "@/hooks/useIsMounted";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const isMounted = useIsMounted();
  const { setTheme, theme } = useTheme();

  return (
    <div className="inline-flex items-center justify-end w-full text-gray-900 dark:text-gray-300">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="inline-flex items-center justify-center cursor-pointer"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          isMounted ? (
            <Sun className="size-6" />
          ) : (
            <div className="w-6 h-6" />
          )
        ) : isMounted ? (
          <Moon className="size-6" />
        ) : (
          <div className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}
