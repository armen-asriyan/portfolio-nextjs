"use client";

import { Music, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function TopNavbar({
  onMusicClick,
  onBarsClick,
}: {
  onMusicClick: () => void;
  onBarsClick: () => void;
}) {
  const t = useTranslations("topNavbar");

  return (
    <div className="flex lg:hidden items-center justify-between sticky top-0 px-5 py-2 backdrop-blur-sm shadow-sm dark:shadow-gray-300/20 text-gray-600 dark:text-gray-300 dark: h-17 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMusicClick}
        className="inline-flex lg:hidden items-center justify-center cursor-pointer"
        aria-label={t("ariaLabels.openLeftSidebar")}
        title={t("ariaLabels.openLeftSidebar")}
      >
        <Music className="size-9" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={onBarsClick}
        className="inline-flex lg:hidden items-center justify-center cursor-pointer"
        aria-label={t("ariaLabels.openRightSidebar")}
        title={t("ariaLabels.openRightSidebar")}
      >
        <Menu className="size-9" />
      </Button>
    </div>
  );
}
