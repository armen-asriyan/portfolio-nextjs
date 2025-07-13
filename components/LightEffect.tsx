"use client";

export default function LightEffect() {
  return (
    <div
      className="fixed top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-gray-900/75 via-gray-900/50 to-gray-900/25 dark:from-gray-300/75 dark:via-gray-300/50 dark:to-gray-300/25  pointer-events-none  w-[80vw] md:w-[50vw] h-[50vh] md:h-[80vh] opacity-35 dark:opacity-25 md:opacity-10 blur-[450px] rounded-full"
      aria-hidden="true"
    ></div>
  );
}
