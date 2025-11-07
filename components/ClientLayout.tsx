"use client";

import { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { V1Portfolio } from "./V1PortfolioBtn";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark || localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-black min-h-screen w-full antialiased text-foreground">
        <main className="w-full lg:flex items-center px-0 lg:px-6 py-6 overflow-y-auto order-2">
          {children}
        </main>

        <div className="fixed right-2 bottom-2">
          <ThemeSwitcher />
        </div>

        <V1Portfolio />
      </div>
    </>
  );
}
