import { Section } from "./Section";
import { skills } from "../data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="skills" className="pt-0 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {skills.map((skillGroup, index) => (
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                0{index + 1}
              </span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                {skillGroup.category}
              </h3>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800"></div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  whileHover={!shouldReduceMotion ? { scale: 1.05, y: -2 } : {}}
                  className="px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors cursor-default"
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
