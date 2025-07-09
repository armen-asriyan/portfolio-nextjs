"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  SkipBack,
  Pause,
  Play,
  SkipForward,
  Volume2,
  VolumeX,
  Loader2Icon,
} from "lucide-react";
import { motion } from "motion/react";
import useIsMounted from "@/hooks/useIsMounted";

const streamIds = ["jfKfPfyJRdk", "S_MOd40zlYU"];

export default function LofiRadio({
  isMuted,
  setIsMuted,
}: {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
}) {
  const isMounted = useIsMounted();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSkip = useCallback(
    (direction: "next" | "prev") => {
      setIsLoading(true);
      const newIndex =
        direction === "next"
          ? (videoIndex + 1) % streamIds.length
          : (videoIndex - 1 + streamIds.length) % streamIds.length;
      setVideoIndex(newIndex);
      setTimeout(() => setIsLoading(false), 600);
    },
    [videoIndex]
  );

  // Post message to iframe
  /**
   *
   * @param command a string with the command
   * @param args an array of arguments, either a number or string, defaults to an empty array if no arguments passed
   */
  const postMessage = (command: string, args: (number | string)[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: command, args }),
      "*"
    );
  };

  const handlePlay = () => {
    postMessage("playVideo");
    setIsPlaying(true);
  };

  const handlePause = () => {
    postMessage("pauseVideo");
    setIsPlaying(false);
  };

  const handleMute = () => {
    postMessage("mute");
    setIsMuted(true);
  };

  const handleUnmute = () => {
    postMessage("unMute");
    postMessage("setVolume", [100]);
    setIsMuted(false);
  };

  useEffect(() => {
    const onIframeLoad = () => {
      if (isMuted) {
        postMessage("mute");
        postMessage("setVolume", [0]);
      } else {
        postMessage("unMute");
        postMessage("setVolume", [100]);
      }
      postMessage("playVideo");
    };

    const iframe = iframeRef.current;
    if (iframe) iframe.addEventListener("load", onIframeLoad);
    return () => iframe?.removeEventListener("load", onIframeLoad);
  }, [videoIndex, isMuted]);

  const PlayerFallback = () => (
    <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 rounded-xl">
      <Loader2Icon className="text-gray-300 animate-spin size-14" />
    </div>
  );

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4 relative mb-4 select-none">
      <div className="relative w-full h-full overflow-hidden shadow-lg border border-gray-300 rounded-xl group">
        <Image
          src={`https://img.youtube.com/vi/${streamIds[videoIndex]}/maxresdefault.jpg`}
          alt="Video thumbnail"
          fill
          className="object-cover rounded-xl"
          loading="lazy"
          unoptimized
        />

        {isLoading && <PlayerFallback />}

        <div
          className={`relative w-full h-full ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          {isMounted && (
            <iframe
              ref={iframeRef}
              title="Lofi Radio"
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              src={`https://www.youtube-nocookie.com/embed/${
                streamIds[videoIndex]
              }?mute=1&autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&enablejsapi=1&playsinline=1&iv_load_policy=3&disablekb=1&cc_load_policy=0&origin=${
                typeof window !== "undefined" ? window.location.origin : ""
              }`}
            />
          )}
        </div>

        {isMounted &&
          (isMuted ? (
            <motion.button
              type="button"
              onClick={handleUnmute}
              aria-label="Unmute"
              className="absolute bottom-14 left-2 bg-black/60 text-gray-100 p-2 rounded-full shadow-md hover:bg-black/80 hover:text-gray-400 focus:outline-none focus:ring transition cursor-pointer"
            >
              <Volume2 className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleMute}
              aria-label="Mute"
              className="absolute bottom-14 left-2 bg-black/60 text-gray-100 p-2 rounded-full shadow-md hover:bg-black/80 hover:text-gray-400 focus:outline-none focus:ring transition cursor-pointer"
            >
              <VolumeX className="w-5 h-5" />
            </motion.button>
          ))}

        {isMounted && (
          <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between px-4 py-2 dark:bg-black/50 rounded-md backdrop-blur-sm">
            <motion.button
              type="button"
              onClick={() => handleSkip("prev")}
              aria-label="Previous Stream"
              className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
            >
              <SkipBack className="w-5 h-5" />
            </motion.button>

            {isPlaying ? (
              <motion.button
                type="button"
                onClick={handlePause}
                aria-label="Pause"
                className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
              >
                <Pause className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                onClick={handlePlay}
                aria-label="Play"
                className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
              >
                <Play className="w-5 h-5" />
              </motion.button>
            )}

            <motion.button
              type="button"
              onClick={() => handleSkip("next")}
              aria-label="Next Stream"
              className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
            >
              <SkipForward className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
