"use client";
import { useTranslations } from "next-intl";
// import { Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

import { motion } from "motion/react";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <motion.section
      className="h-fit w-full flex flex-col items-start justify-start px-3 md:px-16 py-2.5 mb-20 scroll-mt-25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
    >
      <h2 className="text-5xl bg-gradient-to-r from-rose-600 to-yellow-700 inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_#ff4573] mb-10 px-6 lg:px-0">
        {t("title")}
      </h2>

      <div className="flex flex-col w-full gap-6 border border-gray-300/70 dark:border-gray-300/30 p-6 rounded-2xl bg-background">
        <div className="flex flex-col gap-4 border-b border-gray-300/30 pb-4">
          <p className="text-xl text-purple-900 drop-shadow-[0_0_5px_#a855f7] dark:text-gray-300 dark:drop-shadow-[0_0_5px_#ff4573] leading-8">
            {t("message1")}
            <br />
            <br />
            {t("message2")}
          </p>
          <div className="flex flex-col gap-2 mb-4">
            {/* GitHub */}
            <a
              href="https://github.com/armen-asriyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-900 dark:text-gray-300 w-fit underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
              translate="no"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/armen-asriyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-900 dark:text-gray-300 w-fit underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
              translate="no"
            >
              LinkedIn
            </a>

            {/* Mail */}
            <a
              href="mailto:hi@armenasriyan.dev"
              rel="noopener noreferrer"
              className="text-base text-gray-900 dark:text-gray-300 w-fit underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
              translate="no"
            >
              hi@armenasriyan.dev
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </motion.section>
  );
}
