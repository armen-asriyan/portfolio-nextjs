"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ScrollIndicator({
  isVisible,
  scrollTo,
}: {
  isVisible: boolean;
  scrollTo: string;
}) {
  const isMounted = useIsMounted();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="w-full flex items-center justify-center md:justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: !isVisible && !isClicked ? 1 : 0 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <motion.a
        href={`#${scrollTo}`}
        aria-label="Scroll down"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        onClick={() => setIsClicked(true)}
      >
        {isMounted ? (
          <ChevronDown className="w-16 h-16 text-gray-900/50 dark:text-gray-300/50 stroke-1" />
        ) : (
          <div className="w-16 h-16" />
        )}
      </motion.a>
    </motion.div>
  );
}
