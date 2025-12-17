import Hero from "./Portfolio/Hero";
import About from "./Portfolio/About";
import Education from "./Portfolio/Education";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects";
import Experience from "./Portfolio/Experience";
import Hackathons from "./Portfolio/Hackathons";
import Accomplishments from "./Portfolio/Accomplishments";
import Footer from "./Portfolio/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Hackathons />
      <Accomplishments />
      <Footer />
    </main>
  );
}
