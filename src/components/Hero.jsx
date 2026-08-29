import { ArrowRight } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo, skills } from "../data/portfolioData";
import { motion } from "framer-motion";

export function Hero() {
  // Get just a few top skills for the hero tag
  const heroSkills = skills[0].items.slice(0, 2).concat(skills[1].items.slice(0, 1));

  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Photo Section (Asymmetric left on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex justify-center md:justify-start"
          >
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 group">
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse -z-10"></div>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Section (Right side) */}
          <div className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-6"
            >
              Hi, I'm {personalInfo.shortName}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[1.1]"
            >
              {personalInfo.headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 font-medium mb-10"
            >
              {heroSkills.map((skill, i) => (
                <span key={skill} className="flex items-center gap-3">
                  <span>{skill}</span>
                  {i < heroSkills.length - 1 && <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6"
            >
              <a
                href="#work"
                className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold group hover:opacity-70 transition-opacity"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

              <div className="flex items-center gap-4">
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
