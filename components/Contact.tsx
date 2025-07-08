"use client";
// import { Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

import { motion } from "motion/react";

export function Contact() {
  return (
    <motion.section
      className="h-fit w-full flex flex-col items-start justify-start px-2 md:px-16 py-2.5 mb-10 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
    >
      <h2 className="text-5xl bg-gradient-to-r from-rose-600  to-yellow-700 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] mb-10">
        Contact
      </h2>

      <div className="flex flex-col w-full gap-6 border border-gray-300/70 dark:border-gray-300/30 p-6 rounded-2xl bg-background ">
        <div className="flex flex-col gap-4 border-b border-gray-300/30 pb-4">
          <p className="text-xl text-purple-900 drop-shadow-[0_0_5px_#a855f7] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#ff4573] leading-8">
            Got an idea? A question? Or maybe just a really good cat gif to
            share?
            <br />
            <br />
            Hit me up through the form or use any of the links below. I’m always
            happy to connect and collaborate.
          </p>
          <div className="flex flex-col gap-2 mb-4">
            <a
              href="https://www.linkedin.com/in/armen-asriyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-gray-900 dark:text-gray-300 w-fit underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:hi@armen-asriyan.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-gray-900 dark:text-gray-300 w-fit underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              hi@armen-asriyan.dev
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </motion.section>
  );
}
