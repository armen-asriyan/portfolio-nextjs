"use client";

import { Globe } from "lucide-react";
import { useParams } from "next/navigation";
import type { Locale } from "next-intl";
import { type ReactNode, useTransition, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  // Ensure the component updates when the locale changes
  useEffect(() => {
    // This effect ensures the component re-renders when the locale changes
  }, [defaultValue]);

  function onValueChange(nextLocale: string) {
    if (nextLocale === defaultValue) return;

    startTransition(() => {
      try {
        // First try the router.replace method
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          { pathname, params },
          { locale: nextLocale as Locale }
        );
      } catch (error: unknown) {
        console.error("Error in onValueChange:", error);
        // Fallback to window.location if router.replace fails
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(
          `/${defaultValue}`,
          `/${nextLocale}`
        );
        window.location.href = newPath;
      }
    });
  }

  return (
    <div className="flex items-center gap-2">
      <Select
        value={defaultValue}
        onValueChange={onValueChange}
        disabled={isPending}
        name="locale-selector"
      >
        <SelectTrigger
          className="w-auto border-none bg-transparent px-2 py-1 text-sm font-medium uppercase shadow-none focus:ring-0"
          aria-label={label}
        >
          <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <SelectValue aria-label={label} />
        </SelectTrigger>
        <SelectContent aria-label={label} role="listbox">
          {children}
        </SelectContent>
      </Select>
    </div>
  );
}
