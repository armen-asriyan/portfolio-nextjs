"use client";

import Link from "next/link";

export function V1Portfolio() {
  return (
    <div className="inline-flex items-center justify-end w-fit text-gray-900 dark:text-gray-300 -translate-y-1 translate-x-4">
      <Link
        href="https://v1.armenasriyan.dev"
        className="inline-flex items-center justify-center cursor-pointer min-w-[44px] min-h-[44px]"
      >
        View old site (V1)
      </Link>
    </div>
  );
}
