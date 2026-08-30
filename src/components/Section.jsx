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
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30, scale: shouldReduceMotion ? 1 : 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : {
                type: "spring",
                stiffness: 75,
                damping: 14,
                mass: 0.8,
                duration: 0.7,
              }
        }
        className={cn("container mx-auto px-5 sm:px-6 max-w-4xl", containerClass)}
      >
        {children}
      </motion.div>
    </section>
  );
}

