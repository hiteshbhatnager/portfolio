import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { cn } from "./Section";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursorType } = useCursor();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Mindset", href: "#mindset" },
    { name: "Contact", href: "#contact" },
  ];

  // Mobile menu shows only the most important destinations
  const mobileNavLinks = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMouseEnter = () => setCursorType("link");
  const handleMouseLeave = () => setCursorType("default");

  const handleMobileLinkClick = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        <a 
          href="#hero" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition-opacity z-10 relative"
        >
          {personalInfo.shortName}
        </a>

        {/* Desktop Nav — untouched */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  whileHover={!shouldReduceMotion ? { y: -1 } : {}}
                  className="inline-block text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger button */}
        <button
          className="md:hidden relative z-10 p-2 -mr-2 text-zinc-900 dark:text-zinc-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-0 bg-white dark:bg-black z-40 flex flex-col"
            style={{ paddingTop: "env(safe-area-inset-top)" }}
          >
            {/* Menu header row */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-zinc-100 dark:border-zinc-900 shrink-0">
              <a href="#hero" onClick={handleMobileLinkClick} className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">
                {personalInfo.shortName}
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-zinc-900 dark:text-zinc-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links list — mobile uses the shorter focused list */}
            <nav className="flex flex-col flex-1 px-6 pt-6 overflow-y-auto">
              {mobileNavLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="flex items-center justify-between py-5 text-2xl font-bold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-900 active:opacity-60 transition-opacity"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-300 dark:text-zinc-700 text-base font-normal">↗</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer inside menu */}
            <div className="px-6 py-6 border-t border-zinc-100 dark:border-zinc-900 shrink-0" style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
              <p className="text-xs text-zinc-400 font-medium tracking-wide">Always learning. Always building.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
