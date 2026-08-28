import { Section } from "./Section";
import { goals } from "../data/portfolioData";

export function Goals() {
  const goalItems = [
    { key: "NOW", ...goals.now },
    { key: "NEXT", ...goals.next },
    { key: "LATER", ...goals.later }
  ];

  return (
    <Section id="direction">
      <div className="flex flex-col md:flex-row gap-8 justify-between max-w-4xl mx-auto">
        {goalItems.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center md:items-start p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm relative overflow-hidden group">
            
            {/* Subtle Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-8 relative z-10">
              {item.key}
            </h3>
            
            <div className="flex flex-col items-center md:items-start gap-2 mt-auto relative z-10">
              <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {item.label}
              </span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.detail}
              </span>
            </div>
            
          </div>
        ))}
      </div>
    </Section>
  );
}
