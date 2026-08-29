import { ArrowRight } from "lucide-react";
import { Github, Linkedin, Instagram, Whatsapp } from "./Icons";
import { personalInfo, skills } from "../data/portfolioData";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { Magnetic } from "./Magnetic";
import bgTexture from "../asset/bg-texture.jpg";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();
  const heroSkills = skills[0].items.slice(0, 2).concat(skills[1].items.slice(0, 1));

  // Parallax tracking
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
  const photoY = useTransform(smoothY, [-1, 1], [-6, 6]);

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
      className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
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

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex justify-center md:justify-start"
            style={{ x: photoX, y: photoY }}
          >
            <motion.div 
              onMouseEnter={() => setCursorType("image")}
              onMouseLeave={() => setCursorType("default")}
              whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse -z-10"></div>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Section (Right side) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-6"
            >
              Hi, I'm {personalInfo.shortName}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[1.1]"
            >
              {personalInfo.headline}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 font-medium mb-10"
            >
              {heroSkills.map((skill, i) => (
                <span key={skill} className="flex items-center gap-3">
                  <span>{skill}</span>
                  {i < heroSkills.length - 1 && <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold group transition-opacity"
                  onMouseEnter={() => setCursorType("link")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <motion.span whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2">
                    <span>View Work</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </a>
              </Magnetic>

              <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

              <div className="flex items-center gap-4">
                {[
                  { Icon: Github, url: personalInfo.githubUrl, label: "GitHub", hoverClass: "hover:text-zinc-900 dark:hover:text-white" },
                  { Icon: Linkedin, url: personalInfo.linkedinUrl, label: "LinkedIn", hoverClass: "hover:text-blue-600 dark:hover:text-blue-400" },
                  { Icon: Instagram, url: personalInfo.instagramUrl, label: "Instagram", hoverClass: "hover:text-pink-600 dark:hover:text-pink-400" },
                  { Icon: Whatsapp, url: personalInfo.whatsappUrl, label: "WhatsApp", hoverClass: "hover:text-green-600 dark:hover:text-green-400" },
                ].map(({ Icon, url, label, hoverClass }, i) => (
                  <Magnetic key={label}>
                    <motion.a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-zinc-400 transition-colors block ${hoverClass}`}
                      aria-label={label}
                      onMouseEnter={() => setCursorType("link")}
                      onMouseLeave={() => setCursorType("default")}
                      whileHover={!shouldReduceMotion ? { y: -2, scale: 1.1 } : {}}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
