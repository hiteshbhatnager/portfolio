import { ArrowRight } from "lucide-react";
import { Github, Linkedin, Instagram, Whatsapp } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { Section } from "./Section";
import { motion, useReducedMotion } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { Magnetic } from "./Magnetic";
import bgTexture from "../asset/bg-texture.jpg";

export function Contact() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();
  const { setCursorType } = useCursor();

  const handleMouseEnter = () => setCursorType("link");
  const handleMouseLeave = () => setCursorType("default");

  const links = [
    { name: "Email", url: `mailto:${personalInfo.email}` },
    { name: "WhatsApp", url: personalInfo.whatsappUrl },
    { name: "Instagram", url: personalInfo.instagramUrl },
    { name: "GitHub", url: personalInfo.githubUrl },
    { name: "LinkedIn", url: personalInfo.linkedinUrl },
  ];

  return (
    <Section id="contact" className="py-20 md:py-32">
      <div className="relative rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 p-8 md:p-16 overflow-hidden">
        {/* Subtle Background Texture inside the card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] mix-blend-multiply dark:mix-blend-lighten"
          style={{
            backgroundImage: `url(${bgTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 relative z-10">
          
          {/* LEFT: Heading & CTA */}
          <div className="flex flex-col items-start justify-center">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-black/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">Available to connect</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Let's build<br />something interesting.
            </h2>
            
            <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium mb-10 max-w-sm">
              Have an idea or just want to say hello?
            </p>

            <Magnetic>
              <motion.a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorType("cta")}
                onMouseLeave={() => setCursorType("default")}
                whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                Start a conversation ↗
              </motion.a>
            </Magnetic>
          </div>

          {/* RIGHT: Contact Links */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="group flex items-center justify-between py-6 border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/20 px-4 -mx-4 rounded-xl transition-colors"
                >
                  <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 flex flex-col items-center justify-center text-center gap-4">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          Always learning. Always building.
        </p>
        <div className="flex flex-col gap-1 text-xs font-medium text-zinc-400 dark:text-zinc-600">
          <span>{personalInfo.name} &copy; {year}</span>
          <span>Built with React</span>
        </div>
      </div>
    </Section>
  );
}
