import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectGrid from "./components/ProjectGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { personalProjects, freelanceProjects } from "./data/projects";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Skills />

        <ProjectGrid
          id="projects"
          label="Portfolio"
          title="Selected Projects"
          description="A collection of full-stack applications, dashboards, and modern web experiences."
          projects={personalProjects}
        />

        <ProjectGrid
          id="freelance"
          label="Freelance"
          title="Client & Volunteer Work"
          description="Websites designed and developed for real businesses using modern design workflows and AI-assisted development."
          projects={freelanceProjects}
        />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
