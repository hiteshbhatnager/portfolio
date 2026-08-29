import { Section } from "./Section";
import { skills } from "../data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const tagColors = {
  USE: "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent",
  LEARNING: "bg-transparent text-zinc-600 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600",
  EXPLORING: "bg-transparent text-zinc-400 dark:text-zinc-500 border-zinc-200 dark:border-zinc-800",
};

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();

  return (
    <Section id="skills" className="pt-0 md:pt-0">
      {/* Section label */}
      <div className="mb-6 md:mb-10">
        <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">What I Use</span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
        {[
          { tag: "USE", label: "Actively using" },
          { tag: "LEARNING", label: "Currently improving" },
        ].map(({ tag, label }) => (
          <div key={tag} className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${tagColors[tag]}`}>
              {tag}
            </span>
            <span className="text-xs text-zinc-400 font-medium">{label}</span>
          </div>
        ))}
      </div>

      {/* Skill groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Group header */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">0{groupIndex + 1}</span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800"></div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${tagColors[group.tag]}`}>
                {group.tag}
              </span>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  onMouseEnter={() => setCursorType("link")}
                  onMouseLeave={() => setCursorType("default")}
                  whileHover={!shouldReduceMotion ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    px-3 py-2 md:py-1.5 rounded-lg text-sm font-semibold cursor-default border
                    transition-shadow duration-300 hover:shadow-sm
                    min-h-[40px] flex items-center
                    ${group.tag === "USE"
                      ? "bg-zinc-100 dark:bg-zinc-800/70 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500"
                      : "bg-zinc-50 dark:bg-zinc-900/30 border-zinc-200/60 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400"
                    }
                  `}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
