import { Mail } from "lucide-react";
import { Github, Linkedin, Instagram, Whatsapp } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { Section } from "./Section";
import { motion, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { Magnetic } from "./Magnetic";

export function Contact() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();

  const handleMouseEnter = () => setCursorType("link");
  const handleMouseLeave = () => setCursorType("default");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <Section id="contact" className="pb-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-10">
          Let's connect.
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16 max-w-2xl"
        >
          {[
            { Icon: Mail, url: `mailto:${personalInfo.email}`, label: "Email" },
            { Icon: Whatsapp, url: personalInfo.whatsappUrl, label: "WhatsApp" },
            { Icon: Instagram, url: personalInfo.instagramUrl, label: "Instagram" },
            { Icon: Github, url: personalInfo.githubUrl, label: "GitHub" },
            { Icon: Linkedin, url: personalInfo.linkedinUrl, label: "LinkedIn" },
          ].map(({ Icon, url, label }) => (
            <motion.div key={label} variants={itemVariants}>
              <Magnetic>
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  whileHover={!shouldReduceMotion ? { y: -2, scale: 1.02 } : {}}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>{label}</span>
                </motion.a>
              </Magnetic>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
          &copy; {year} {personalInfo.name}
        </p>
      </div>
    </Section>
  );
}
