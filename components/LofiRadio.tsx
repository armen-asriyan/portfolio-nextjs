"use client";

import { useRef, useState } from "react";
import YouTube, { YouTubePlayer, YouTubeEvent } from "react-youtube";
import { LuSkipBack, LuPause, LuPlay, LuSkipForward } from "react-icons/lu";

const streamIds = ["jfKfPfyJRdk", "S_MOd40zlYU"];

export default function LofiRadio() {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const onPlayerReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
  };

  const onStateChange = (event: YouTubeEvent) => {
    const playerState = event.data;
    if (playerState === 1) setIsPlaying(true); // Playing
    else if (playerState === 2 || playerState === 0) setIsPlaying(false); // Paused or Ended
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
    playerRef.current?.loadVideoById(streamIds[nextIndex]);
  };

  const handleSkipBack = () => {
    const prevIndex = (videoIndex - 1 + streamIds.length) % streamIds.length;
    setVideoIndex(prevIndex);
    playerRef.current?.loadVideoById(streamIds[prevIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 relative mb-4">
      <div className="relative w-full h-[200px] overflow-hidden shadow-lg border border-gray-300 rounded-xl group">
        <YouTube
          videoId={streamIds[videoIndex]}
          onReady={onPlayerReady}
          onStateChange={onStateChange}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
            },
          }}
        />

        {/* Controls */}
        {playerRef.current && (
          <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between px-4 py-2 bg-black/50 rounded-md backdrop-blur-sm">
            <LuSkipBack
              onClick={handleSkipBack}
              className="text-2xl text-gray-300 cursor-pointer drop-shadow-[0_0_5px_#d1d5db] transition-all hover:scale-105"
            />
            {isPlaying ? (
              <LuPause
                onClick={handlePause}
                className="text-2xl text-gray-300 cursor-pointer drop-shadow-[0_0_5px_#d1d5db] transition-all hover:scale-105"
              />
            ) : (
              <LuPlay
                onClick={handlePlay}
                className="text-2xl text-gray-300 cursor-pointer drop-shadow-[0_0_5px_#d1d5db] transition-all hover:scale-105"
              />
            )}
            <LuSkipForward
              onClick={handleSkipForward}
              className="text-2xl text-gray-300 cursor-pointer drop-shadow-[0_0_5px_#d1d5db] transition-all hover:scale-105"
            />
          </div>
        )}
      </div>
    </div>
  );
}
