"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

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
import { useTranslations } from "next-intl";

const streamIds = [
  "jfKfPfyJRdk", // lofi hip hop radio 📚 beats to relax/study to
  "S_MOd40zlYU", // dark ambient radio 🌃 music to escape/dream to
  "4xDzrJKXOOY", // synthwave radio 🌌 beats to chill/game to
  "GluJS2IAe_s", // 🔴 Video Game Lofi & Chill Beats 🎮 24/7 Radio
  "-E6A7Og90iM", // The Legend of Zelda Lofi & Chill Radio (24/7)
];

const randomstreamId = Math.floor(Math.random() * streamIds.length);

export default function LofiRadio({
  isMuted,
  setIsMuted,
  closeSidebar,
}: {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  closeSidebar: () => void;
}) {
  const t = useTranslations("lofiRadio");
  const isMounted = useIsMounted();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  type ConsentState = true | false | undefined;
  const [consentGiven, setConsentGiven] = useState<ConsentState>(undefined);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoIndex, setVideoIndex] = useState<number>(randomstreamId);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
   * @param command a string with the command (check: https://developers.google.com/youtube/iframe_api_reference#Functions)
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

  const handleConsent = (consent: ConsentState) => {
    if (consent) {
      setConsentGiven(true);
      setIsPlaying(true);
      setIsMuted(false);
      localStorage.setItem("yt-consent", "true");
    } else if (consent === false) {
      setConsentGiven(false);
      setIsPlaying(false);
      setIsMuted(true);
      localStorage.setItem("yt-consent", "false");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedConsent = localStorage.getItem("yt-consent");

      if (storedConsent === "true") {
        setConsentGiven(true);
        setIsMuted(true);
        setIsPlaying(true);
      } else if (storedConsent === "false") {
        setConsentGiven(false);
        setIsMuted(false);
        setIsPlaying(false);
      }
    }
  }, [setIsMuted, setIsPlaying]);

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
    <div className="flex items-center justify-center w-full h-full bg-transparent rounded-xl absolute">
      <Loader2Icon className="text-gray-300 animate-spin size-14" />
    </div>
  );

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4 relative mb-4 select-none shadow-[0_0_25px] shadow-black/40 dark:shadow-[0_0_25px] dark:shadow-white/40 border border-gray-700 dark:border-gray-300 rounded-xl bg-gray-90">
      <div className="relative w-full h-full overflow-hidden shadow-lg border border-gray-700 dark:border-gray-300 rounded-xl group">
        {isMounted ? (
          <Image
            src={`https://img.youtube.com/vi/${streamIds[videoIndex]}/maxresdefault.jpg`}
            alt="Video thumbnail"
            fill
            className="object-cover rounded-xl"
            // loading="lazy"
            priority
            unoptimized
          />
        ) : (
          <motion.div
            className="w-full h-full bg-gray-700 dark:bg-gray-300 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {isLoading && <PlayerFallback />}

        <div
          className={`relative w-full h-full ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          {isMounted && consentGiven ? (
            <iframe
              ref={iframeRef}
              width="100%"
              height="100%"
              title="Lofi Radio"
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              src={`https://www.youtube-nocookie.com/embed/${
                streamIds[videoIndex]
              }?mute=0&autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&enablejsapi=1&playsinline=1&iv_load_policy=3&disablekb=1&cc_load_policy=0&origin=${
                typeof window !== "undefined" ? window.location.origin : ""
              }`}
            />
          ) : (
            <div className="w-full min-h-[200px] h-full">
              <div className="w-full h-full text-sm/normal font-semibold bg-white/90 text-gray-900 dark:bg-black/70 dark:text-gray-100 p-4 select-text">
                <div>
                  {consentGiven === undefined && <p>{t("consent.idle")}</p>}
                  {consentGiven === false && <p>{t("consent.refused")}</p>}

                  <div className="w-full text-right mt-2 mb-8">
                    <Link
                      href="/privacy#tps-youtube"
                      className="text-gray-900 dark:text-gray-300 w-fit underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white "
                      onClick={closeSidebar}
                    >
                      {t("consent.readMore")}
                    </Link>
                  </div>

                  <div className="w-full absolute bottom-0 left-0 right-0 pb-5 pt-2 border-t border-gray-300/30 backdrop-blur-sm z-50 ">
                    <div className="flex flex-row items-center justify-center gap-4">
                      {consentGiven === false ? (
                        <button
                          type="button"
                          onClick={() => setConsentGiven(undefined)}
                          className="text-gray-900 dark:text-gray-300 transition-colors duration-300 hover:text-gray-600 dark:hover:text-white cursor-pointer"
                        >
                          {t("consent.changeSettings")}
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => handleConsent(true)}
                            title={t("consent.iConsent")}
                            className="text-gray-900 dark:text-gray-300 transition-colors duration-300 hover:text-gray-600 dark:hover:text-white cursor-pointer"
                          >
                            {t("consent.iConsent")}
                          </button>
                          <span className="text-gray-900 dark:text-gray-300">
                            |
                          </span>

                          <button
                            type="button"
                            onClick={() => handleConsent(false)}
                            className="text-gray-900 dark:text-gray-300 transition-colors duration-300 hover:text-gray-600 dark:hover:text-white cursor-pointer"
                          >
                            {t("consent.iDoNotConsent")}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Disabled Message - Shows when consent is false */}
              </div>
            </div>
          )}
        </div>

        {/* Player controls */}

        {/* Mute / Unmute */}
        {isMounted &&
          consentGiven &&
          (isMuted ? (
            <motion.button
              type="button"
              onClick={handleUnmute}
              aria-label={t("player.unmute")}
              title={t("player.unmute")}
              className="absolute bottom-14 left-2 bg-black/60 text-gray-100 p-2 rounded-full shadow-md hover:bg-black/80 hover:scale-105 focus:outline-none focus:ring transition cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleMute}
              aria-label={t("player.mute")}
              title={t("player.mute")}
              className="absolute bottom-14 left-2 bg-black/60 text-gray-100 p-2 rounded-full shadow-md hover:bg-black/80 hover:scale-105 focus:outline-none focus:ring transition cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <VolumeX className="w-5 h-5" />
            </motion.button>
          ))}

        {/* Controls */}
        {isMounted && consentGiven && (
          <motion.div
            className="absolute bottom-1 left-1 right-1 flex items-center justify-between px-4 py-2 bg-black/50 rounded-md backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              onClick={() => handleSkip("prev")}
              aria-label={t("player.previousStream")}
              title={t("player.previousStream")}
              className="text-gray-300 p-2 rounded-full hover:ring focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {isPlaying ? (
              <button
                type="button"
                onClick={handlePause}
                aria-label={t("player.pause")}
                title={t("player.pause")}
                className="text-gray-300 p-2 rounded-full hover:ring focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
              >
                <Pause className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePlay}
                aria-label={t("player.play")}
                title={t("player.play")}
                className="text-gray-300 p-2 rounded-full hover:ring focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
              >
                <Play className="w-5 h-5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => handleSkip("next")}
              aria-label={t("player.nextStream")}
              title={t("player.nextStream")}
              className="text-gray-300 p-2 rounded-full hover:ring focus:outline-none focus:ring transition drop-shadow-[0_0_5px_#c084fc] dark:drop-shadow-[0_0_5px_#d1d5db] cursor-pointer"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
