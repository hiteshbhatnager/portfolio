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

  // Stagger and spring reveal variants
  const groupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 50ms stagger
        delayChildren: 0.05,
      }
    }
  };

  const tagVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 15, 
      scale: shouldReduceMotion ? 1 : 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      }
    }
  };

  return (
    <Section id="skills" className="pt-0 md:pt-0">

      {/* ==================== MOBILE LAYOUT ==================== */}
      <div className="md:hidden">
        <div className="mb-5">
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">What I Use</span>
        </div>

        {/* All "USE" tags in one flowing row with staggers */}
        <motion.div
          variants={groupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {skills
            .filter((g) => g.tag === "USE")
            .flatMap((g) => g.items)
            .map((item) => (
              <motion.span
                key={item}
                variants={tagVariants}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 min-h-[36px] flex items-center"
              >
                {item}
              </motion.span>
            ))}
        </motion.div>

        {/* Exploring — compact single line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center gap-2 flex-wrap"
        >
          <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase shrink-0">Exploring</span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            {skills.find((g) => g.tag === "LEARNING")?.items.join(" · ")}
          </span>
        </motion.div>
      </div>

      {/* ==================== DESKTOP LAYOUT (unchanged) ==================== */}
      <div className="hidden md:block">
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
              variants={groupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
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
                    variants={tagVariants}
                    onMouseEnter={() => setCursorType("link")}
                    onMouseLeave={() => setCursorType("default")}
                    whileHover={!shouldReduceMotion ? { scale: 1.02, y: -2 } : {}}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
      </div>

    </Section>
  );
}
