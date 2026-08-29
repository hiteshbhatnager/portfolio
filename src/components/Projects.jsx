import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "./Icons";
import { Section } from "./Section";
import { projects } from "../data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { Magnetic } from "./Magnetic";
import bgTexture from "../asset/bg-texture.jpg";

export function Projects() {
  const { setCursorType } = useCursor();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="work" className="relative">
      {/* Extremely faint texture for projects background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] mix-blend-multiply dark:mix-blend-lighten"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ==================== DESKTOP LAYOUT (unchanged) ==================== */}
      <div className="hidden md:block">
        <div className="flex items-end justify-between mb-12 relative z-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-3">What I've Built</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Work
            </h2>
          </div>
          <span className="text-sm font-bold text-zinc-400 mb-2">0{projects.length}</span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {projects.map((project) => (
            <motion.div
              variants={itemVariants}
              whileHover={!shouldReduceMotion ? { y: -5 } : {}}
              onClick={() => window.open(project.demoUrl, "_blank")}
              onMouseEnter={() => setCursorType("project")}
              onMouseLeave={() => setCursorType("default")}
              key={project.id}
              className="group flex flex-col gap-4 cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 group-hover:shadow-xl dark:group-hover:shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 -z-10"></div>
                <motion.div
                  className="w-full h-full"
                  whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-4" onMouseEnter={(e) => { e.stopPropagation(); setCursorType("default"); }} onMouseLeave={(e) => { e.stopPropagation(); setCursorType("project"); }}>
                    <Magnetic>
                      <a href={project.githubUrl} target="blank" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors block" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a href={project.demoUrl} target="_blank" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors block" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Magnetic>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded-sm transition-transform duration-300 group-hover:translate-x-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future Project Card */}
          <motion.div
            variants={itemVariants}
            className="group flex flex-col justify-center gap-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-transparent p-8 md:aspect-video items-center text-center cursor-default hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-2">
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-300">
              More experiments coming...
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ==================== MOBILE LAYOUT — editorial numbered ==================== */}
      <div className="md:hidden relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-2">Selected Work</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Work
            </h2>
          </div>
          <span className="text-xs font-bold text-zinc-300 dark:text-zinc-700 mb-1">0{projects.length}</span>
        </div>

        {/* Project list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col gap-10"
        >
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="flex flex-col gap-3"
              >
                {/* Project number */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-300 dark:text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Image — large on mobile */}
                <motion.div
                  whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                  onClick={() => window.open(project.demoUrl, "_blank")}
                  className={`
                    relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800/50
                    border border-zinc-200 dark:border-zinc-800 cursor-pointer
                    ${isFeatured ? "aspect-[16/10]" : "aspect-[16/9]"}
                  `}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading={isFeatured ? "eager" : "lazy"}
                  />
                  {/* Subtle dark gradient overlay for tap feedback */}
                  <div className="absolute inset-0 bg-black/0 active:bg-black/10 transition-colors duration-150 pointer-events-none rounded-2xl" />
                </motion.div>

                {/* Project name */}
                <div className="flex items-start justify-between gap-2 mt-1">
                  <h3 className={`font-bold tracking-tight text-zinc-900 dark:text-white ${isFeatured ? "text-xl" : "text-base"}`}>
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags — compact dot-separated on mobile */}
                <p className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-600 tracking-wide">
                  {project.technologies.join(" · ")}
                </p>

                {/* Always-visible touch-friendly links */}
                <div className="flex items-center gap-4 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 active:text-zinc-900 dark:active:text-white transition-colors min-h-[44px] pr-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <span className="text-zinc-300 dark:text-zinc-700 text-xs">↗</span>
                  </a>
                  <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 active:text-zinc-900 dark:active:text-white transition-colors min-h-[44px] pr-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                    <span className="text-zinc-300 dark:text-zinc-700 text-xs">↗</span>
                  </a>
                </div>

                {/* Separator (except last) */}
                {index < projects.length - 1 && (
                  <div className="h-px bg-zinc-100 dark:bg-zinc-900 mt-2" />
                )}
              </motion.article>
            );
          })}

          {/* Future Project — compact mobile version */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 py-4 border-t border-zinc-100 dark:border-zinc-900"
          >
            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </div>
            <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">
              More experiments coming...
            </span>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
