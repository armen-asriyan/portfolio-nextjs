"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex gap-2 mt-4">
      {/* GitHub */}
      <a
        href="https://github.com/armen-asriyan"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-sm border text-zinc-900 dark:text-zinc-400 hover:bg-gray-300/10 dark:hover:bg-gray-300/10"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/armen-asriyan/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-sm border text-zinc-900 dark:text-zinc-400 hover:bg-gray-300/10 dark:hover:bg-gray-300/10"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>

      {/* Mail */}
      <a
        href="mailto:hi@armenasriyan.dev"
        rel="noopener noreferrer"
        className="p-3 rounded-sm border text-zinc-900 dark:text-zinc-400 hover:bg-gray-300/10 dark:hover:bg-gray-300/10"
        aria-label="Email"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
}
