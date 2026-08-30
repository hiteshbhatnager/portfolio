import { ArrowRight } from "lucide-react";
import { Github, Linkedin, Instagram, Whatsapp } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { Magnetic } from "./Magnetic";
import { useState } from "react";
import bgTexture from "../asset/bg-texture.jpg";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();
  const { scrollY } = useScroll();

  // Screen-wide mouse parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    // Normalize -1 to 1
    const x = (clientX / window.innerWidth - 0.5) * 2; 
    const y = (clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 25, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const bgY = useTransform(smoothY, [-1, 1], [-15, 15]);
  
  const photoX = useTransform(smoothX, [-1, 1], [-6, 6]);
  
  // Combine mouse-tilt parallax and scroll parallax for the profile picture
  const photoY = useTransform(
    [smoothY, scrollY],
    ([latestSmoothY, latestScrollY]) => {
      const mouseOffset = latestSmoothY * 6; // range -6 to 6
      const scrollOffset = latestScrollY * -0.04; // subtle scroll parallax (up to ~30px)
      return mouseOffset + scrollOffset;
    }
  );

  // Local interactive mouse tracking for profile photo depth parallax on hover
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const photoHoverX = useMotionValue(0);
  const photoHoverY = useMotionValue(0);
  
  const springPhotoHoverX = useSpring(photoHoverX, { damping: 20, stiffness: 200 });
  const springPhotoHoverY = useSpring(photoHoverY, { damping: 20, stiffness: 200 });

  const handlePhotoMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    photoHoverX.set(x * 12); // max 6px shift
    photoHoverY.set(y * 12);
  };

  const handlePhotoMouseLeave = () => {
    photoHoverX.set(0);
    photoHoverY.set(0);
    setIsPhotoHovered(false);
    setCursorType("default");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex items-center pt-16 pb-12 md:pt-20 md:pb-0 overflow-hidden"
    >
      {/* Abstract Background Texture */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-5 dark:opacity-5 mix-blend-multiply dark:mix-blend-lighten"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          x: bgX,
          y: bgY,
          scale: 1.05 // Prevent edges from showing during parallax
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-black z-0 pointer-events-none"></div>

      <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-center">

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex justify-center md:justify-start"
            style={{ x: photoX, y: photoY }}
          >
            <motion.div 
              onMouseMove={handlePhotoMouseMove}
              onMouseEnter={() => { setCursorType("image"); setIsPhotoHovered(true); }}
              onMouseLeave={handlePhotoMouseLeave}
              whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 rounded-full md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse -z-10"></div>
              
              {/* Photo Image Layer (shifts slightly in opposite direction of mouse for parallax window effect) */}
              <motion.img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                style={{
                  x: useTransform(springPhotoHoverX, (v) => -v * 0.4),
                  y: useTransform(springPhotoHoverY, (v) => -v * 0.4),
                  scale: isPhotoHovered && !shouldReduceMotion ? 1.04 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Decorative sliding ring layer */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-0 rounded-full md:rounded-3xl border border-zinc-900/10 dark:border-white/10 pointer-events-none"
                  style={{
                    x: useTransform(springPhotoHoverX, (v) => v * 0.6),
                    y: useTransform(springPhotoHoverY, (v) => v * 0.6),
                    scale: isPhotoHovered ? 1.02 : 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </motion.div>
          </motion.div>

          {/* Text Section (Right side) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left mt-2 md:mt-0"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-4 md:mb-6"
            >
              Hi, I'm {personalInfo.shortName}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.4rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-3 md:mb-4"
            >
              {personalInfo.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium mb-7 md:mb-10 tracking-wide"
            >
              {personalInfo.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4"
            >
              <Magnetic>
                <motion.a
                  href="#work"
                  onMouseEnter={() => setCursorType("link")}
                  onMouseLeave={() => setCursorType("default")}
                  whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors"
                >
                  View Work
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </Magnetic>

              <Magnetic>
                <motion.a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorType("link")}
                  onMouseLeave={() => setCursorType("default")}
                  whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
              </Magnetic>

              <div className="flex items-center justify-center md:justify-start gap-4 w-full md:w-auto mt-1 md:mt-0 md:ml-2">
                {[
                  { Icon: Linkedin, url: personalInfo.linkedinUrl, label: "LinkedIn", hoverClass: "hover:text-blue-600 dark:hover:text-blue-400" },
                  { Icon: Instagram, url: personalInfo.instagramUrl, label: "Instagram", hoverClass: "hover:text-pink-600 dark:hover:text-pink-400" },
                  { Icon: Whatsapp, url: personalInfo.whatsappUrl, label: "WhatsApp", hoverClass: "hover:text-green-600 dark:hover:text-green-400" },
                ].map(({ Icon, url, label, hoverClass }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-zinc-400 transition-colors block ${hoverClass}`}
                    aria-label={label}
                    onMouseEnter={() => setCursorType("link")}
                    onMouseLeave={() => setCursorType("default")}
                    whileHover={!shouldReduceMotion ? { y: -2, scale: 1.1 } : {}}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile-only: prominent scroll CTA to jump to Work */}
              <motion.a
                href="#work"
                whileTap={{ scale: 0.96 }}
                className="md:hidden flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
                aria-label="View my work"
              >
                <span>View my work</span>
                <span className="text-zinc-400">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
