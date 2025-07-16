import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// lib/generateAlternateLinks.ts
export function generateAlternateLinks(locale: string, pathname: string = "") {
  const canonical =
    locale === "en"
      ? `https://armenasriyan.dev${pathname}`
      : `https://armenasriyan.dev/${locale}${pathname}`;

  return {
    canonical,
    languages: {
      en: `https://armenasriyan.dev${pathname}`,
      fr: `https://armenasriyan.dev/fr${pathname}`,
      "x-default": `https://armenasriyan.dev${pathname}`, // English as default
    },
  };
}
