import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { Section } from "./Section";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <Section id="contact" className="pb-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col items-center justify-center text-center">

        {/* Tiny avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-6 group cursor-pointer">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-10">
          Keep building.
        </h2>

        <div className="flex items-center gap-6 mb-16">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
          &copy; {year} {personalInfo.name}
        </p>
      </div>
    </Section>
  );
}
