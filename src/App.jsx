import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Identity } from "./components/Identity";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { HowILearn } from "./components/HowILearn";
import { Contact } from "./components/Contact";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { CursorProvider } from "./context/CursorContext";
import { CustomCursor } from "./components/CustomCursor";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const content = (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black relative">
      {/* Background Decorative Elements - disabled if reduced motion or mobile */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
          {/* Soft blurred gradient orb 1 */}
          <motion.div
            className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-blue-100/20 dark:bg-zinc-800/10 blur-[120px]"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Soft blurred gradient orb 2 */}
          <motion.div
            className="absolute top-[60%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-zinc-100/30 dark:bg-zinc-900/5 blur-[100px]"
            animate={{
              x: [0, -20, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Minimal Vertical Scroll Progress Indicator (desktop only) */}
      {!shouldReduceMotion && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-zinc-200 dark:bg-zinc-800 z-50 rounded-full hidden md:block opacity-60 hover:opacity-100 transition-opacity">
          <motion.div 
            className="w-full bg-zinc-900 dark:bg-white rounded-full origin-top"
            style={{ height: "100%", scaleY }}
          />
        </div>
      )}

      <CustomCursor />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <Identity />
        <Skills />
        <Projects />
        {/* Mindset section — desktop only. Mobile communicates mindset inline in About. */}
        <div className="hidden md:block">
          <HowILearn />
        </div>
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );

  return (
    <CursorProvider>
      {shouldReduceMotion ? (
        content
      ) : (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
          {content}
        </ReactLenis>
      )}
    </CursorProvider>
  );
}

export default App;

