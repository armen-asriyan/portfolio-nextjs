"use client";

export default function Hero() {
  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-2 md:px-16 py-10 md:py-24 scroll-mt-20"
      id="home"
    >
      <h1 className="text-6xl font-light bg-gradient-to-r from-purple-400  to-rose-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#f43f5e] mb-10">
        Hi, I'm Armen
      </h1>

      <p className="text-xl text-gray-300 leading-8">
        I’m a junior dev exploring the world of full-stack development.
        <br />
        <br />I enjoy creating clean, functional apps and constantly pushing
        myself to learn and improve.
      </p>
    </section>
  );
}
