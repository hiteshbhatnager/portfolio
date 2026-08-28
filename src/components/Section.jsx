import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Section({ id, children, className, containerClass }) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn("container mx-auto px-6 max-w-4xl", containerClass)}
      >
        {children}
      </motion.div>
    </section>
  );
}
