import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",

  // remove the 'en' locale prefix
  localePrefix: "as-needed",

  // Remove the locale cookie
  // localeCookie: false,

  // Disable locale detection
  // localeDetection: false,
});
