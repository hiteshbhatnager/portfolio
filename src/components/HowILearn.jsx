import { Section } from "./Section";
import { howILearn } from "../data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { useCursor } from "../context/CursorContext";

// Step icons / symbols for each stage
const stepMeta = {
  LEARN:      { symbol: "◎", color: "text-blue-500 dark:text-blue-400" },
  BUILD:      { symbol: "◆", color: "text-emerald-500 dark:text-emerald-400" },
  BREAK:      { symbol: "✕", color: "text-red-400 dark:text-red-400" },
  FIX:        { symbol: "◉", color: "text-amber-500 dark:text-amber-400" },
  UNDERSTAND: { symbol: "◈", color: "text-violet-500 dark:text-violet-400" },
  REPEAT:     { symbol: "↺", color: "text-zinc-500 dark:text-zinc-400" },
};

export function HowILearn() {
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howILearn.length);
    }, 1600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <Section id="mindset" className="bg-zinc-50 dark:bg-zinc-900/30">
      {/* Section label */}
      <div className="mb-6 md:mb-10">
        <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">How I Build</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* LEFT — Animated loop visual */}
        <div>
          {/* Desktop: 2-col grid of step nodes */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {howILearn.map((step, i) => {
              const meta = stepMeta[step] ?? { symbol: "·", color: "text-zinc-400" };
              const isActive = activeStep === i;
              const isLast = i === howILearn.length - 1;

              return (
                <motion.div
                  key={step}
                  onMouseEnter={() => { setActiveStep(i); setCursorType("link"); }}
                  onMouseLeave={() => setCursorType("default")}
                  animate={{
                    scale: isActive ? 1.04 : 1,
                    borderColor: isActive ? undefined : undefined,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`
                    relative flex flex-col gap-2 p-4 md:p-5 rounded-2xl border cursor-default transition-all duration-300
                    ${isActive
                      ? "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600 shadow-md dark:shadow-black/40"
                      : "bg-white/50 dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-800"
                    }
                    ${isLast ? "col-span-2" : ""}
                  `}
                >
                  {/* Indicator dot */}
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    className={`text-xl font-bold ${meta.color}`}
                  >
                    {meta.symbol}
                  </motion.span>
                  <span className={`text-xs font-black tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-600"}`}>
                    {step}
                  </span>

                  {/* Active pulse ring */}
                  {isActive && !shouldReduceMotion && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      className={`absolute inset-0 rounded-2xl border ${meta.color.replace("text-", "border-")} pointer-events-none`}
                    />
                  )}

                  {/* Arrow connector (not on last) */}
                  {!isLast && (
                    <span className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-300 dark:text-zinc-700 text-xs font-bold select-none hidden sm:block">→</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Statement */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
            "Most of my learning<br />happens while{" "}
            <span className="text-zinc-400 dark:text-zinc-500">building."</span>
          </blockquote>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-sm">
            I don't wait until I fully understand something — I start building and let the mistakes teach me.
          </p>

          {/* Live step indicator */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex gap-1.5">
              {howILearn.map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    width: activeStep === i ? 20 : 6,
                    backgroundColor: activeStep === i ? "#18181b" : "#d4d4d8"
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-1.5 rounded-full dark:bg-zinc-600"
                  style={{ backgroundColor: activeStep === i ? undefined : undefined }}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
              {howILearn[activeStep]}
            </span>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
