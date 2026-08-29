import { Section } from "./Section";
import { identity } from "../data/portfolioData";

export function Identity() {
  return (
    <Section id="about" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-8">
          Me in 5 seconds
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {identity.labels.map((label, i) => (
            <span 
              key={i}
              className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200"
            >
              {label}
            </span>
          ))}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
          {identity.summary}
        </h3>
      </div>
    </Section>
  );
}
