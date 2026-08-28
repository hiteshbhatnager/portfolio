import { Section } from "./Section";
import { identity, howILearn } from "../data/portfolioData";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Identity() {
  return (
    <Section id="identity" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        
        {/* Me in 5 seconds */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-8">
            Me in 5 seconds
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {identity.labels.map((label, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200"
              >
                {label}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {identity.summary}
          </h3>
        </div>

        {/* How I Learn */}
        <div className="flex flex-col justify-center md:items-end">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm max-w-md w-full">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-8 md:text-right">
              Mindset
            </h2>
            
            {/* Desktop Horizontal Flow */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 mb-6">
              {howILearn.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-zinc-800 dark:text-zinc-200">
                    {step}
                  </span>
                  {i < howILearn.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-zinc-400" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="sm:hidden flex flex-col items-center gap-3 mb-6">
              {howILearn.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <span className="text-xs font-bold tracking-widest text-zinc-800 dark:text-zinc-200">
                    {step}
                  </span>
                  {i < howILearn.length - 1 && (
                    <ArrowDown className="w-3 h-3 text-zinc-400" />
                  )}
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800 my-6"></div>
            
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 text-center md:text-right">
              "Most of my learning happens while building."
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
