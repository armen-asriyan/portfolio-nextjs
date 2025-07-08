"use client";

import { useRef, useState } from "react";
import YouTube, { YouTubePlayer, YouTubeEvent } from "react-youtube";
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

const streamIds = ["jfKfPfyJRdk", "S_MOd40zlYU"];

export default function LofiRadio() {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const onPlayerReady = (event: YouTubeEvent) => {
    setIsLoading(false);
    playerRef.current = event.target;
    setIsMuted(playerRef.current?.isMuted() ?? true);
  };

  const onStateChange = (event: YouTubeEvent) => {
    const playerState = event.data;
    if (playerState === 1) setIsPlaying(true);
    else if (playerState === 2 || playerState === 0) setIsPlaying(false);
  };

  const handlePlay = () => {
    playerRef.current?.playVideo();
  };

  const handlePause = () => {
    playerRef.current?.pauseVideo();
  };

  const handleSkipForward = () => {
    const nextIndex = (videoIndex + 1) % streamIds.length;
    setVideoIndex(nextIndex);
    playerRef.current?.cueVideoById(streamIds[nextIndex]);
    playerRef.current?.playVideo();
  };

  const handleSkipBack = () => {
    const prevIndex = (videoIndex - 1 + streamIds.length) % streamIds.length;
    setVideoIndex(prevIndex);
    playerRef.current?.cueVideoById(streamIds[prevIndex]);
    playerRef.current?.playVideo();
  };

  const handleMute = () => {
    playerRef.current?.setVolume(0);
    setIsMuted(true);
  };

  const handleUnmute = () => {
    playerRef.current?.unMute();
    playerRef.current?.setVolume(100);
    setIsMuted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 relative mb-4">
      <div className="relative min-w-[300px] w-full h-[200px] overflow-hidden shadow-lg border border-gray-300 rounded-xl group">
        {isLoading && (
          <Loader2Icon className="text-gray-300 animate-spin absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-14" />
        )}
        <YouTube
          videoId={streamIds[videoIndex]}
          // loading="lazy"
          onReady={onPlayerReady}
          onStateChange={onStateChange}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              mute: 1, // allow autoplay
              controls: 0,
              modestbranding: 1,
              rel: 0,
            },
          }}
        />

        {/* Mute / Unmute Button */}
        {isMuted ? (
          <motion.button
            type="button"
            onClick={handleUnmute}
            aria-label="Unmute"
            className="absolute bottom-14 left-2 bg-black/60 text-gray-100 p-2 rounded-full shadow-md hover:bg-black/80 hover:text-gray-400 focus:outline-none focus:ring transition cursor-pointer"
            initial={
              isLoading ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
            }
            animate={
              !isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.2 }}
          >
            <Volume2 className="w-5 h-5" />
          </motion.button>
        ) : (
          <button
            type="button"
            onClick={handleMute}
            aria-label="Mute"
            className="absolute bottom-14 left-2 bg-black/60 text-gray-100 p-2 rounded-full shadow-md hover:bg-black/80 hover:text-gray-400 focus:outline-none focus:ring transition cursor-pointer"
          >
            <VolumeX className="w-5 h-5" />
          </button>
        )}

        {/* Player Controls */}
        <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between px-4 py-2 dark:bg-black/50 rounded-md backdrop-blur-sm">
          <motion.button
            type="button"
            onClick={handleSkipBack}
            aria-label="Previous Stream"
            className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
            initial={
              isLoading ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
            }
            animate={
              !isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.2 }}
          >
            <SkipBack className="w-5 h-5" />
          </motion.button>

          {isPlaying ? (
            <motion.button
              type="button"
              onClick={handlePause}
              aria-label="Pause"
              className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
              initial={
                isLoading
                  ? { opacity: 0, scale: 0.5 }
                  : { opacity: 1, scale: 1 }
              }
              animate={
                !isLoading
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.2 }}
            >
              <Pause className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handlePlay}
              aria-label="Play"
              className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
              initial={
                isLoading
                  ? { opacity: 0, scale: 0.5 }
                  : { opacity: 1, scale: 1 }
              }
              animate={
                !isLoading
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.2 }}
            >
              <Play className="w-5 h-5" />
            </motion.button>
          )}

          <motion.button
            type="button"
            onClick={handleSkipForward}
            aria-label="Next Stream"
            className="text-purple-600 dark:text-gray-300 p-2 rounded-full hover:scale-105 focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
            initial={
              isLoading ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
            }
            animate={
              !isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.2 }}
          >
            <SkipForward className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Volume slider  */}
      </div>
    </div>
  );
}
