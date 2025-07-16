import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAlternateLinks(locale: string, pathname: string = "") {
  return {
    canonical: `https://armenasriyan.dev/${locale}${pathname}`,
    languages: {
      en: `https://armenasriyan.dev/${pathname}`,
      fr: `https://armenasriyan.dev/fr${pathname}`,
      "x-default": `https://armenasriyan.dev/${pathname}`, // English as default
    },
  };
}
