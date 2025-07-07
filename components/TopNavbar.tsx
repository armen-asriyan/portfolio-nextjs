"use client";

import { LuMusic, LuMenu } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function TopNavbar({
  onMusicClick,
  onBarsClick,
}: {
  onMusicClick: () => void;
  onBarsClick: () => void;
}) {
  return (
    <div className="flex sm:hidden items-center justify-between sticky top-0 px-5 py-2 bg-background text-gray-300 h-17 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMusicClick}
        className="inline-flex md:hidden items-center justify-center cursor-pointer"
      >
        <LuMusic className="size-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onBarsClick}
        className="inline-flex md:hidden items-center justify-center cursor-pointer"
      >
        <LuMenu className="size-8" />
      </Button>
    </div>
  );
}
