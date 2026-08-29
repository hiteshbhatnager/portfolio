import { motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Section({ id, children, className, containerClass }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id={id} className={cn("py-14 md:py-24 lg:py-32", className)}>
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn("container mx-auto px-5 sm:px-6 max-w-4xl", containerClass)}
      >
        {children}
      </motion.div>
    </section>
  );
}

