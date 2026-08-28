import { ArrowRight, ArrowDown } from "lucide-react";
import { Section } from "./Section";
import { journeySteps } from "../data/portfolioData";
import { motion } from "framer-motion";

export function Journey() {
  return (
    <Section id="journey" className="bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Journey
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Desktop Horizontal Journey */}
        <div className="hidden lg:flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-200 dark:bg-zinc-800 -z-10 -translate-y-1/2"></div>
          
          {journeySteps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-all">
                <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500">
                  {step.stage}
                </span>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 max-w-[120px] text-center">
                {step.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Vertical Journey */}
        <div className="lg:hidden flex flex-col items-center">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-sm mb-3">
                  <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500">
                    {step.stage}
                  </span>
                </div>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {step.description}
                </span>
              </div>
              
              {index < journeySteps.length - 1 && (
                <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 my-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
