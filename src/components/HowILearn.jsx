import { Section } from "./Section";
import { howILearn } from "../data/portfolioData";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HowILearn() {
  return (
    <Section id="mindset" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="flex justify-center">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm max-w-2xl w-full">
          <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-8 text-center">
            Mindset
          </h2>
          
          {/* Desktop Horizontal Flow */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 mb-6">
            {howILearn.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-widest text-zinc-800 dark:text-zinc-200">
                  {step}
                </span>
                {i < howILearn.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Vertical Flow */}
          <div className="sm:hidden flex flex-col items-center gap-4 mb-6">
            {howILearn.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold tracking-widest text-zinc-800 dark:text-zinc-200">
                  {step}
                </span>
                {i < howILearn.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-zinc-400" />
                )}
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800 my-6"></div>
          
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 text-center">
            "Most of my learning happens while building."
          </p>
        </div>
      </div>
    </Section>
  );
}
