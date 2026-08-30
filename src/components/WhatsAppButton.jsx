import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorType("link");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorType("default");
  };

  return (
    <aside
      aria-label="Contact options"
      className="fixed z-40 bottom-[max(18px,env(safe-area-inset-bottom,18px))] right-[max(18px,env(safe-area-inset-right,18px))] md:bottom-6 md:right-6"
    >
      <div className="relative flex items-center justify-center">
        {/* Desktop Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="hidden md:flex flex-col items-center absolute bottom-full mb-2.5 pointer-events-none z-50 select-none"
              role="tooltip"
              id="whatsapp-tooltip"
            >
              <div className="px-3 py-1.5 text-xs font-semibold tracking-tight text-white dark:text-zinc-900 bg-zinc-900/95 dark:bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/10 dark:border-black/10 whitespace-nowrap">
                Chat on WhatsApp
              </div>
              {/* Tooltip Arrow */}
              <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-900/95 dark:border-t-white/95 -mt-[1px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button Container with gentle bobbing animation */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -4, 0],
                }
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.a
            href="https://wa.me/919518827898"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with me on WhatsApp"
            aria-describedby="whatsapp-tooltip"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center bg-white dark:bg-zinc-900 text-[#25D366] border border-zinc-200 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.22)] dark:hover:shadow-[0_8px_25px_rgba(37,211,102,0.18)] hover:border-[#25D366]/40 dark:hover:border-[#25D366]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] dark:focus-visible:ring-offset-black transition-colors duration-200 shrink-0"
          >
            {/* WhatsApp Icon with exact 24x24 dimensions, original viewBox, shrink-0, and no distorting transforms */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 shrink-0 block select-none pointer-events-none"
              style={{ width: "24px", height: "24px", flexShrink: 0 }}
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.12-.17.26-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.26-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </aside>
  );
}
