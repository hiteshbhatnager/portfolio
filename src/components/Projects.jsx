import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "./Icons";
import { Section } from "./Section";
import { projects } from "../data/portfolioData";

export function Projects() {
  return (
    <Section id="work">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Work
        </h2>
        <span className="text-sm font-bold text-zinc-400 mb-2">0{projects.length}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col gap-4"
          >
            {/* Image Box */}
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center">
              {/* Optional Real Image - Will fallback to a clean icon if image fails to load/not found */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 -z-10"></div>
              <span className="text-zinc-400 dark:text-zinc-600 font-mono text-xs uppercase tracking-widest group-hover:scale-105 transition-transform duration-500">
                Image Placeholder
              </span>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <div className="flex gap-3">
                  <a href={project.githubUrl} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demoUrl} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Future Project Card */}
        <div className="group flex flex-col justify-center gap-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-transparent p-8 md:aspect-video items-center text-center cursor-default hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors">
           <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-2">
             <ArrowRight className="w-5 h-5 text-zinc-400" />
           </div>
           <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-300">
             More experiments coming...
           </span>
        </div>

      </div>
    </Section>
  );
}
