import { Section } from "./Section";
import { personalInfo, identity } from "../data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export function Identity() {
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="about">
      {/* Section label */}
      <div className="mb-6 md:mb-10">
        <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Who I Am</span>
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      {/* Ultra-compact card: shown only below md breakpoint */}
      <div className="md:hidden">
        {/* Top row: photo + name + role */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4 mb-5"
        >
          {/* Photo */}
          <div className="w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shrink-0">
            <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>
          {/* Name + identity */}
          <div>
            <h2 className="text-base font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
              {personalInfo.name}
            </h2>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mt-0.5 tracking-wide">
              Developer · Builder · Learner
            </p>
          </div>
        </motion.div>

        {/* Mindset line — replaces the full HowILearn section on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm italic text-zinc-500 dark:text-zinc-400 mb-5 font-medium"
        >
          "I build what I learn."
        </motion.p>

        {/* Compact status rows */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-2 gap-2"
        >
          {identity.status.slice(0, 2).map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[9px] font-bold tracking-widest text-zinc-400 dark:text-zinc-600 uppercase">{label}</span>
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ==================== DESKTOP LAYOUT (unchanged) ==================== */}
      <div className="hidden md:grid grid-cols-12 gap-16 items-start">

        {/* LEFT — Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-4"
        >
          {/* Developer ID Card */}
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 overflow-hidden">
            <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-zinc-400 uppercase">DEV / 001</span>

            {/* Photo */}
            <motion.div
              onMouseEnter={() => setCursorType("image")}
              onMouseLeave={() => setCursorType("default")}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-20 h-20 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 mb-5 cursor-pointer"
            >
              <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
            </motion.div>

            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
              {personalInfo.name}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-medium">
              Developer / Builder
            </p>

            <div className="flex flex-col gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-5">
              {identity.status.map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-widest text-[10px] mt-0.5 shrink-0">{label}</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-medium text-right">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Open to opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Identity statement + number highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="col-span-8 flex flex-col justify-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-tight mb-8"
          >
            "I learn by<br />
            <span className="text-zinc-400 dark:text-zinc-500">building things."</span>
          </motion.h3>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {identity.labels.map((label) => (
              <motion.span
                key={label}
                whileHover={!shouldReduceMotion ? { scale: 1.05, y: -2 } : {}}
                className="px-4 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 cursor-default"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
            {[
              { num: "01", label: "Build", sub: "Ship real projects" },
              { num: "02", label: "Learn", sub: "Understand by doing" },
              { num: "03", label: "Improve", sub: "Iterate constantly" },
            ].map(({ num, label, sub }) => (
              <motion.div
                key={num}
                whileHover={!shouldReduceMotion ? { y: -3 } : {}}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-1 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 group cursor-default"
              >
                <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{num}</span>
                <span className="text-base font-bold text-zinc-900 dark:text-white">{label}</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
