import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Identity } from "./components/Identity";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { HowILearn } from "./components/HowILearn";
import { Contact } from "./components/Contact";
import { CursorProvider } from "./context/CursorContext";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <CursorProvider>
      <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
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
      </div>
    </CursorProvider>
  );
}

export default App;
