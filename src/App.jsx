import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Identity } from "./components/Identity";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Goals } from "./components/Goals";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Identity />
        <Skills />
        <Projects />
        <Journey />
        <Goals />
        <Contact />
      </main>
    </div>
  );
}

export default App;
