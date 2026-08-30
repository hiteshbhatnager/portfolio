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
            className="w-[52px] h-[52px] md:w-[54px] md:h-[54px] rounded-full flex items-center justify-center bg-white dark:bg-zinc-900 text-[#25D366] border border-zinc-200 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.22)] dark:hover:shadow-[0_8px_25px_rgba(37,211,102,0.18)] hover:border-[#25D366]/40 dark:hover:border-[#25D366]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] dark:focus-visible:ring-offset-black transition-colors duration-200"
          >
            {/* WhatsApp Icon */}
            <motion.svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="currentColor"
              aria-hidden="true"
              className="transition-transform duration-200"
              animate={isHovered && !shouldReduceMotion ? { scale: 1.08 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              <path d="M17.507 14.307l-.009.075c-2.399-1.2-2.823-.889-4.084 1.026-.29.437-.624.475-1.077.252-.45-.224-1.688-.67-3.08-1.92-1.085-.97-1.789-2.148-2.002-2.518-.214-.37-.023-.57.168-.761.171-.172.38-.444.57-.666.19-.223.253-.371.38-.619.127-.247.063-.464-.032-.65-.095-.185-.855-2.057-1.171-2.822-.308-.745-.62-.644-.855-.655-.221-.012-.475-.015-.729-.015s-.665.095-1.014.475c-.349.38-1.332 1.3-1.332 3.17s1.363 3.676 1.554 3.931c.19.254 2.684 4.099 6.502 5.746 3.818 1.647 3.818 1.098 4.502 1.029.684-.069 2.22-.908 2.537-1.785.317-.877.317-1.628.222-1.785-.095-.157-.349-.254-.729-.444zm-5.467 7.693c-1.956 0-3.874-.523-5.556-1.517l-.398-.236-4.128 1.082 1.101-4.024-.26-.414A11.916 11.916 0 0 1 1.5 12C1.5 6.21 6.21 1.5 12.04 1.5c2.81 0 5.452 1.094 7.44 3.081a10.468 10.468 0 0 1 3.06 7.419c0 5.79-4.71 10.5-10.5 10.5zm0-19.5c-4.962 0-9 4.038-9 9 0 1.6.42 3.124 1.218 4.463l.189.317-.723 2.641 2.706-.71.306.182c1.29.767 2.766 1.173 4.304 1.173 4.963 0 9-4.037 9-9s-4.037-9-9-9z" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </aside>
  );
}
